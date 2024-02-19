const fs = require("fs");
const path = require("path");

function copyFile(sourcePath, targetPath) {
  if (sourcePath && targetPath) {
    // Проверяем, существует ли целевая папка, если нет, создаем ее
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath);
    }
    // Копируем файл из sourcePath в targetPath
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Файл скопирован: ${sourcePath} -> ${targetPath}`);
  }else {
    console.log('Файл не выбран');
  }
}

function deleteFile(filePath) {
  // Удаляем файл
  fs.unlinkSync(filePath);
  console.log(`Файл удален: ${filePath}`);
}

// Пример использования функций для копирования и удаления файла
const sourceFilePath = "/path/to/source/file.txt"; // Путь к исходному файлу
const targetFilePath = "/path/to/target/file.txt"; // Путь к целевому файлу

copyFile(sourceFilePath, targetFilePath); // Копируем файл
deleteFile(targetFilePath); // Удаляем скопированный файл
