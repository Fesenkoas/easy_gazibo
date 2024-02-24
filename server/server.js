const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors")
const WebSocket = require("ws");
const dotenv = require("dotenv");
const configureWebSocket = require("./socket/configureWebSocket");
const configureExpressServer = require("./path/configureExpressServer");

const app = express();
dotenv.config();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Путь к папке, которую вы хотите отслеживать
const folderToWatch = "C:/Users/Fesenko/Desktop/RIP";

//Constant
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;
const PASSWORD = process.env.DB_PASSWORD;
const USER = process.env.DB_USER;

//Middleware
 app.use(cors());
// app.use(express.json({limit: '50mb'}));

//Routes
//http://localhost:3002
// app.use("/user", userRoute);
// app.use("/item",itemRoute);

// Асинхронная функция start()
async function start() {
  try {
    // Подключение к базе данных
    // await mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log("Подключение к MongoDB успешно");
    // Запуск сервера
    server.listen(PORT, () => {
      configureWebSocket(wss, folderToWatch);
      configureExpressServer(app, server);
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (error) {
    console.error("Ошибка при подключении к MongoDB:", error);
  }
}
start();

// pm2 start server.js
// pm2 stop server.js
// pm2 start ecosystem.config.js
// pm2 logs
// pm2 monit
// npm run server
// npm run start
