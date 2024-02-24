const chokidar = require("chokidar");
const WebSocket = require("ws");
const path = require("path");

// let filesTransferredCount = 0; // Переменная для отслеживания количества переданных файлов

function sendFileAddedNotification(wss, folderToWatch) {
  let filesTransferredCount = 0; // Переменная для отслеживания количества переданных файлов
  let files = []; // Массив для хранения файлов
  let filesSentCount = 0;
  const watcher = chokidar.watch(folderToWatch, {
    ignored: /(^|[/\\])\../, // игнорировать скрытые файлы
    persistent: true,
    usePolling: true,
    interval: 1000,
  });

  // Обработчик для события добавления нового файла
  watcher.on("add", (path) => {
    filesTransferredCount++; // Увеличиваем счетчик переданных файлов
       
  });
  // Обработчик для события добавления нового файла
  watcher.on("add", (path) => {
    // console.log(`Новый файл добавлен: ${path}`);
    files.push(path);
    // Получаем имя файла из полного пути
    // const fileName = require("path").basename(path);
    // console.log(`Имя фаила: ${fileName}`);

    if (files.length === filesTransferredCount) {
      // Отправляем массив файлов на фронтенд через WebSocket
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "filesArray", files }));
        }
      });

      // Увеличиваем счетчик отправленных файлов и обнуляем массив
      // filesSentCount += files.length;
      // files = [];
      // console.log(`Отправлено ${filesSentCount} файлов`);

      // Здесь можно добавить логику, если нужно выполнить действие после отправки файлов
    }
  });
}

module.exports = { sendFileAddedNotification };
