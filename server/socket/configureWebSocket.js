const chokidar = require("chokidar");
const WebSocket = require("ws");
const path = require("path");
const moment = require("moment");

function configureWebSocket(wss, folderToWatch) {
  // Настройка отслеживания изменений с помощью chokidar
  const watcher = chokidar.watch(folderToWatch, {
    ignored: /^\./, // игнорировать скрытые файлы
    persistent: true,
    usePolling: true, // использовать polling
    interval: 1000, // интервал опроса в миллисекундах
  });

  // Массив для хранения новых файлов
  let newFiles = [];

  // Таймер для определения времени между отправками файлов
  let sendTimer;

  // Обработчик для события добавления нового файла
  watcher.on("add", (filePath) => {
    const fileName = path.basename(filePath);
    const folderPath = require("path").dirname(filePath);
    //console.log(`Новый файл добавлен: ${filePath}`);
    //-----------------------------------------------------------

    // Разделение строки по обратному слешу
    let folders = folderPath.split("\\");

    // Поиск индекса "rip"
    let ripIndex = folders.indexOf("RIP" || "rip");

    // Если "rip" найден, извлекаем все папки после него
    let extractedFolders = [];
    if (ripIndex !== -1 && ripIndex < folders.length - 1) {
      extractedFolders = folders.slice(ripIndex + 1);
    }

    // Попытка парсинга строки как даты
    const parsedDate = moment(extractedFolders[0], "DD.MM", true); // Второй аргумент указывает на формат даты

    //Создаем объект
    const myObject = {
      url: filePath,
      folderDate: extractedFolders[0],
      folderFabric: extractedFolders[1] || "Уточните ткань",
      name: fileName,
    };
    console.log(myObject);
    //-----------------------------------------------------------
    newFiles.push(filePath); // Добавляем новый файл в массив

    // Если уже есть активный таймер, ничего не делаем
    if (sendTimer) return;

    // Запускаем таймер для отправки файлов через 1 секунду
    sendTimer = setTimeout(() => {
      // Если в массиве есть файлы, отправляем их клиенту
      if (newFiles.length > 0) {
        // Отправляем массив файлов на фронтенд через WebSocket
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "filesArray", path: newFiles }));
          }
        });
        // Очищаем массив новых файлов
        newFiles = [];
      }
      // Сбрасываем таймер
      sendTimer = null;
    }, 1000); // Отправляем файлы через 1 секунду
  });

  watcher.on("error", (error) => {
    console.error(`Произошла ошибка: ${error}`);
  });

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
