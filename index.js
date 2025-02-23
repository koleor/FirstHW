const express = require('./node_modules/express');
const app = express(); 
const port = 3000;

app.get ('/', (req, res) =>{

    res.send('Привет, мир :D');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:3000`);
  });
