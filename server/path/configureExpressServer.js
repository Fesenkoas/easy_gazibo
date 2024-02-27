import express from "express";
import path from "path";

export const configureExpressServer = (app, server) => {
  // Middleware для обработки статических файлов
  app.use(express.static(path.join(__dirname, '../public/Shaot-FrontEnd/build')));

  // Обработка ошибок
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  // Middleware для отправки файла index.html для всех запросов
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Shaot-FrontEnd/build', 'index.html'));
  });
}