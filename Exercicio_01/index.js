// index.js
let prompt = require("prompt-sync")()


const calculadora = require('./calculadora');


let a = parseFloat(prompt("Digite o primeiro valor: "));
let b = parseFloat(prompt("Digite o segundo valor: "));

console.log(`Soma: ${calculadora.somar(a, b)}`);
console.log(`Subtração: ${calculadora.subtrair(a, b)}`);
console.log(`Multiplicação: ${calculadora.multiplicar(a, b)}`);
console.log(`Divisão: ${calculadora.dividir(a, b)}`);
