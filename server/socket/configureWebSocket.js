import chokidar from "chokidar";
import WebSocket from "ws";
import path from "path";
import { parseUrl } from "../util/parseURL.js";
import { AddPrintFile } from "../controllers/PrintFile.js";

let server;

export const configureWebSocket = (wss, folderToWatch) => {
  server = wss;
  const watcher = chokidar.watch(folderToWatch, {
    ignored: /^\./,
    persistent: true,
    // usePolling: true,
    // interval: 1000,
  });

  let newFiles = [];

  let sendTimer;

  watcher.on("add", (filePath) => {
    const fileExtension = path.extname(filePath);
    if (fileExtension !== '.bmp') {
      const fileName = path.basename(filePath);
      const folderPath = path.dirname(filePath);
      if (parseUrl(filePath, folderPath, fileName) !== -1)
        newFiles.push(parseUrl(filePath, folderPath, fileName));
  
      if (sendTimer) return;
  
      sendTimer = setTimeout(() => {
        if (newFiles.length > 0) {
          try {
            AddPrintFile(newFiles);
          } catch (error) {
            console.error("Error adding item to database:", error);
          }
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: "filesArray", path: newFiles }));
            }
          });
          newFiles = [];
        }
        sendTimer = null;
      }, 1000);
    }
  });
  watcher.on("change", (filePath) => {
    console.log(`Файл ${path.basename(filePath)} был изменен.`);
    // Здесь можно добавить код для обработки изменения файла
  });

  watcher.on("unlink", (filePath) => {
    console.log(`Файл ${path.basename(filePath)} был удален.`);
    // Здесь можно добавить код для обработки удаления файла
  });
  watcher.on("error", (error) => {
    console.error(`Error occurred: ${error}`);
  });

  wss.on("connection", (ws) => {
    console.log("New WebSocket connection");

    ws.on("message", (message) => {
      console.log("Received message from client:", message);
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });
  });
};

export function sendObjectUpdateNotificationToAllClients() {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "object_updated" }));
    }
  });
}
