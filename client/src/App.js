import React from "react";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { PageWorker } from "./page/PageWorker";
import { Header } from "./page/Header";
import { getAllPrintFile } from "./features/redux/printSlice";
import { getAllPrintFileFetch } from "./features/action/fetchPrint";

function App() {
  const [msg, setMsg] = useState([]);
  const { printFile, loading } = useSelector((state) => state.printFile);
  const dispatch = useDispatch();


useEffect(()=>{
dispatch(getAllPrintFileFetch());
//  if(loading)console.log(printFile);

},[dispatch])
  // useEffect(() => {
  //   // // Создаем новое подключение WebSocket
  //   // const socket = new WebSocket("ws://localhost:3002");

  //   // // Обработчик события открытия соединения
  //   // socket.addEventListener("open", function (event) {
  //   //   console.log("WebSocket соединение установлено");
  //   // });

  //   // // Обработчик события получения сообщения
  //   // socket.addEventListener("message", function (event) {
  //   //   // Распаковываем данные из JSON
  //   //   const data = JSON.parse(event.data);
  //   //   data.path.map((item, key) => setMsg((prevMsg) => [...prevMsg, item]));
  //   //   // Делаем что-то с полученными данными
  //   //   console.log("Получено сообщение:", data);
  //   // });

  //   // // Обработчик события закрытия соединения
  //   // socket.addEventListener("close", function (event) {
  //   //   console.log("WebSocket соединение закрыто");
  //   // });

  //   // // Обработчик события ошибки
  //   // socket.addEventListener("error", function (event) {
  //   //   console.error("WebSocket ошибка:", event);
  //   // });

  //   // // Очистка эффекта: закрытие соединения при размонтировании компонента
  //   // return () => {
  //   //   socket.close();
  //   // };
  // }, [msg]);
  return (
    <div>
      <Header/>
      <PageWorker/>
    </div>
  );
}

export default App;
