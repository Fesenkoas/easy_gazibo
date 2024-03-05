import chokidar from "chokidar";
import WebSocket from "ws";
import path from "path";
import { parseUrl } from "../util/parseURL.js";
import { AddPrintFile } from "../controllers/PrintFile.js";

export const configureWebSocket = (wss, folderToWatch) => {
  // Setting up file watching using chokidar
  const watcher = chokidar.watch(folderToWatch, {
    ignored: /^\./, // ignore hidden files
    persistent: true,
    usePolling: true, // use polling
    interval: 1000, // polling interval in milliseconds
  });

  // Array to store new files
  let newFiles = [];

  // Timer to determine time between sending files
  let sendTimer;

  // Handler for 'add' event (new file added)
  watcher.on("add", (filePath) => {
    const fileName = path.basename(filePath);
    const folderPath = path.dirname(filePath);
    if(parseUrl(filePath, folderPath, fileName) !== -1)
    newFiles.push(parseUrl(filePath, folderPath, fileName)); // Add new file to the array

    // If there is already an active timer, do nothing
    if (sendTimer) return;
    // Start timer to send files after 1 second
    sendTimer = setTimeout(async () => {
      // If there are files in the array, send them to the client
      if (newFiles.length > 0) {
        try {

         //console.log(newFiles);
         await AddPrintFile(newFiles);
        } catch (error) {
          console.error("Error adding item to database:", error);
        }
        // Send the array of files to the frontend via WebSocket
        // wss.clients.forEach((client) => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     client.send(JSON.stringify({ type: "filesArray", path: newFiles }));
        //   }
        // });
        // Clear the array of new files
        newFiles = [];
      }

      // Reset the timer
      sendTimer = null;
    }, 1000); // Send files after 1 second
  });

  watcher.on("error", (error) => {
    console.error(`Error occurred: ${error}`);
  });

  // WebSocket connection handler
  wss.on("connection", (ws) => {
    console.log("New WebSocket connection");

    // WebSocket close handler
    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });
  });
};
