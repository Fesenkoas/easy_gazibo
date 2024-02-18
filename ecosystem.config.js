module.exports = {
    apps: [
      {
        name: 'easy_gazibo', // Имя вашего приложения
        script: 'server.js', // Путь к вашему Express-серверу
        watch: true, // Наблюдение за изменениями файлов (автоматически перезапускать приложение)
        ignore_watch: ["node_modules", "build"], // Игнорировать изменения в указанных папках
        env: {
          NODE_ENV: 'production', // Установка переменной окружения для production
          PORT: 3002, // Порт Express-сервера
        },
      },
    ],
  };