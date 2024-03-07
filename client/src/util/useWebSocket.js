import { useEffect, useState } from "react";

export const useWebSocket = () => {
  const [msgReceived, setMsgReceived] = useState(false);

  useEffect(() => {
    // Создаем новое подключение WebSocket
    const socket = new WebSocket("ws://localhost:3002");

    // Обработчик события получения сообщения
    const handleMessage = (event) => {
      // Распаковываем данные из JSON
      const data = JSON.parse(event.data);
      // Устанавливаем состояние, что сообщение получено
      setMsgReceived(true);
      // Делаем что-то с полученными данными
      console.log("Получено сообщение:", data);
    };
    socket.addEventListener("message", handleMessage);

    // Очистка эффекта: убираем слушатель и закрываем соединение при размонтировании компонента
    return () => {
      socket.removeEventListener("message", handleMessage);
      socket.close();
    };
  }, []);

  return msgReceived;
}