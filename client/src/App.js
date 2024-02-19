import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
       // Создаем новое подключение WebSocket
       const socket = new WebSocket('ws://localhost:3002');

       // Обработчик события открытия соединения
       socket.addEventListener('open', function (event) {
           console.log('WebSocket соединение установлено');
       });

       // Обработчик события получения сообщения
       socket.addEventListener('message', function (event) {
           // Распаковываем данные из JSON
           const data = JSON.parse(event.data);
           
           // Делаем что-то с полученными данными
           console.log('Получено сообщение:', data);
       });

       // Обработчик события закрытия соединения
       socket.addEventListener('close', function (event) {
           console.log('WebSocket соединение закрыто');
       });

       // Обработчик события ошибки
       socket.addEventListener('error', function (event) {
           console.error('WebSocket ошибка:', event);
       });

       // Очистка эффекта: закрытие соединения при размонтировании компонента
       return () => {
           socket.close();
       };
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
