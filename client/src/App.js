import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./util/temporaryDB";
import { PageWorker } from "./page/PageWorker";
import { Header } from "./page/Header";

function App() {
  const [msg, setMsg] = useState([]);
  const [timedb, setTimedb] = useState(data);
  console.log(timedb);
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
      data.path.map((item, key) => setMsg((prevMsg) => [...prevMsg, item]));
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
    <div>
      {/* {timedb.map((item, key) => (
        <div key={key}>
          <div>{item.folderDate}</div>
          <div>
            {item.folderFabric.map((i, key) => (
              <div key={key}>
                <div>{i.fabricName}</div>
                <div>
                  {i.item.map((y, key) => (
                    <div>
                      <div>{y.url}</div>
                      <div>{y.fileName}</div>
                      <div>{y.width}</div>
                      <div>{y.height}</div>
                      <div>{y.col}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
      <Header/>
      <PageWorker/>
    </div>
  );
}

export default App;
