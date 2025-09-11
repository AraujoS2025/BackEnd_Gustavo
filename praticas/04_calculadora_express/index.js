// index.js
const express = require('express');
const app = express();
const calculadoraRouter = require('./routes/calculadora');

app.use('/calculadora', calculadoraRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});