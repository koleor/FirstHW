// подключаем модуль http
const express = require('./node_modules/express');
const app = express(); 
const port = 3000;

// создаем сервер
app.get ('/', (req, res) =>{

    res.send('Привет, мир :D');
});

// слушаем порт 3000
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:3000`);
  });
