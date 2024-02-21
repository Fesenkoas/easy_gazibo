const socket = new WebSocket('ws://localhost:3002');

socket.addEventListener('open', function (event) {
  console.log('Соединение установлено');
});

socket.addEventListener('message', function (event) {
  const data = JSON.parse(event.data);
  if (data.type === 'newFile') {
    console.log('Получено уведомление о новом файле:', data.filePath);
    // Здесь можно выполнить любые действия по обработке нового файла
  } else if (data.type === 'filePrinted') {
    console.log('Получено уведомление о распечатанном файле:', data.printedFilePath);
    // Здесь можно выполнить любые действия по обработке распечатанного файла
  }
});

socket.addEventListener('close', function (event) {
  console.log('Соединение закрыто');
});

socket.addEventListener('error', function (event) {
  console.error('Ошибка WebSocket:', event);
});

// // Пример отправки сообщения о распечатанном файле
// // Этот код можно вызывать в нужном месте вашего клиентского приложения
// function notifyFilePrinted(printedFilePath) {
//   socket.send(JSON.stringify({ type: 'filePrinted', printedFilePath }));
// }