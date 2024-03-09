import express from "express";
import path from "path";

export const configureExpressServer = (app, server) => {
 
  const buildPath = path.resolve(path.join(process.cwd(), '../public', 'build'));
  app.use(express.static(buildPath));
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}