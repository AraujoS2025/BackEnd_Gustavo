const express = require('express');
const router = express.Router();

// Operações matemáticas
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return 'Divisão por zero não permitida';
  return a / b;
}

function aoQuadrado(a) {
  return a * a;
}

function raizQuadrada(a) {
  if (a < 0) return 'Raiz de número negativo não permitida';
  return Math.sqrt(a);
}

// Endpoints
router.get('/somar', (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: somar(Number(numA), Number(numB)) });
});

router.get('/subtrair', (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: subtrair(Number(numA), Number(numB)) });
});

router.get('/multiplicar', (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: multiplicar(Number(numA), Number(numB)) });
});

router.get('/dividir', (req, res) => {
  const { numA, numB } = req.query;
  res.json({ resultado: dividir(Number(numA), Number(numB)) });
});

router.get('/ao-quadrado', (req, res) => {
  const { num } = req.query;
  res.json({ resultado: aoQuadrado(Number(num)) });
});

router.get('/raiz-quadrada', (req, res) => {
  const { num } = req.query;
  res.json({ resultado: raizQuadrada(Number(num)) });
});

module.exports = router;