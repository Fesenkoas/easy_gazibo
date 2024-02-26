import React, { useEffect, useState } from "react";
import "./App.css";
//[import { ListView } from "./components/ListView";

function App() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    // Создаем новое подключение WebSocket
    const socket = new WebSocket("ws://localhost:3002");

    // Обработчик события открытия соединения
    socket.addEventListener("open", function (event) {
      console.log("WebSocket соединение установлено");
    });

    // Обработчик события получения сообщения
    socket.addEventListener("message", function (event) {
      // Распаковываем данные из JSON
      const data = JSON.parse(event.data);
      data.path.map((item, key)=>
        (setMsg(prevMsg => [...prevMsg, item]))
      )
      // Делаем что-то с полученными данными
      console.log("Получено сообщение:", data.path);
    });

    // Обработчик события закрытия соединения
    socket.addEventListener("close", function (event) {
      console.log("WebSocket соединение закрыто");
    });

    // Обработчик события ошибки
    socket.addEventListener("error", function (event) {
      console.error("WebSocket ошибка:", event);
    });

    // Очистка эффекта: закрытие соединения при размонтировании компонента
    return () => {
      socket.close();
    };
  }, [msg]);
  return (
    <div>
      {msg.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
      {/* <ListView/> */}
    </div>
  );
}

export default App;