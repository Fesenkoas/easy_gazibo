const chokidar = require("chokidar");
const WebSocket = require("ws");
const path = require("path");

function configureWebSocket(wss, folderToWatch) {
  // Настройка отслеживания изменений с помощью chokidar
  const watcher = chokidar.watch(folderToWatch, {
    ignored: /(^|[/\\])\../, // игнорировать скрытые файлы
    persistent: true,
    usePolling: true,
    interval: 1000,
  });

  // Обработчик для события добавления нового файла
  watcher.on("add", (path) => {
    console.log(`Новый файл добавлен: ${path}`);
    // const folderPath = require("path").dirname(path);
    // console.log(`Файл был добавлен в папку: ${folderPath}`);

    // Получаем имя файла из полного пути
    // const fileName = require("path").basename(path);
    // console.log(`Имя фаила: ${fileName}`);
    
    // Отправка уведомления на фронтенд через WebSocket
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "newFile", fileName }));
      }
    });
  });

  // // Обработчик для события добавления новой папки
  // watcher.on("addDir", (path) => {
  //   console.log(`Новая папка добавлена: ${path}`);

  //   // Отправка уведомления на фронтенд через WebSocket
  //   wss.clients.forEach((client) => {
  //     if (client.readyState === WebSocket.OPEN) {
  //       client.send(JSON.stringify({ type: "newFolder", folderName: path }));
  //     }
  //   });
  // });

  // Обработчик подключения WebSocket
  wss.on("connection", (ws) => {
    console.log("Новое соединение WebSocket");

    // Обработчик закрытия WebSocket
    ws.on("close", () => {
      console.log("WebSocket соединение закрыто");
    });
  });
}

module.exports = configureWebSocket;
