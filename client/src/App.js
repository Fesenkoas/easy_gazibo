import React from "react";
import  { useEffect, useState } from "react";
import "./App.css";
import { PageWorker } from "./page/PageWorker";
import { Header } from "./page/Header";

function App() {
  const [msg, setMsg] = useState([]);
  

  useEffect(() => {
  
    const socket = new WebSocket("ws://localhost:3001");
   
    socket.addEventListener("open", function (event) {
      console.log("WebSocket соединение установлено");
    });
    socket.addEventListener("message", function (event) {
      const data = JSON.parse(event.data);
      data.path.map((item, key) => setMsg((prevMsg) => [...prevMsg, item]));
      console.log("Получено сообщение:", data);
    });
    socket.addEventListener("close", function (event) {
      console.log("WebSocket соединение закрыто");
    });
    socket.addEventListener("error", function (event) {
      console.error("WebSocket ошибка:", event);
    });
    return () => {
      socket.close();
    };
  }, [msg]);
  return (
    <div>
      <Header/>
      <PageWorker/>
    </div>
  );
}

export default App;
