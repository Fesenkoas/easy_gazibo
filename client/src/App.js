import React, { useEffect, useState } from "react";
import "./App.css";

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
       setMsg(prevMsg => [...prevMsg, data]);
      // Делаем что-то с полученными данными
      console.log("Получено сообщение:", data);
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
    <div className="App">
      {msg.map((item, key) => (
        <div key={key}>{item.path}</div>
      ))}
    </div>
  );
}

export default App;
