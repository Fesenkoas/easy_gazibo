import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import printRoute from "./routes/PrintFile.js";
import { configureWebSocket } from "./socket/configureWebSocket.js";
import { configureExpressServer } from "./path/configureExpressServer.js";

const app = express();
dotenv.config();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Path to the folder you want to watch
const folderToWatch = "C://Users//Fesenko//Desktop//rip";
// const folderToWatch = "//192.168.1.16/rip";

// Constants
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// http://localhost:3002
app.use("/auth", authRoute);
app.use("/print",printRoute);

// Async function start()
async function start() {
  try {
    await mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`);
    console.log("Successfully connected to MongoDB");
    server.listen(PORT, () => {
      configureWebSocket(wss, folderToWatch);
      configureExpressServer(app, server);
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
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
