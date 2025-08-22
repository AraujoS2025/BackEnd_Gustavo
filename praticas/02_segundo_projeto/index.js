// Importando a lib promp-synb

let  prompt = require ("prompt-sync")()

//usar a lib do promp-sync

let nome = prompt ("Qual é o seu nome? ")

console.log ("iaaE"  + nome)
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require ('./calculadoredenota')

//Nota A1
// perguntar pro usuario de exerciocio, trabalho, prova
 let exerciciosA1 =parseFloat (prompt ("qual a nota do exercicio A1: "))
 let trabalhoA1 = parseFloat (prompt ("Qual a nota do trabalho A1: "))
 let provaA1 = parseFloat (prompt ("Qual a nota da prova A1: "))
 let NotaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

 console.log("### Calculo da Nota A1 ###")
 console.log("Nota Exercicio A1: " ,exerciciosA1)
 console.log("Nota Trabalho A1: " ,trabalhoA1)
 console.log("Nota prova A1: ", provaA1)
 console.log("Nota A1 Calculada: ", NotaA1)


 //Nota A2 
 let exercicioA2 = parseFloat (prompt ("Qual a nota do exercicioA2: "))
 let trabalhoA2 = parseFloat (prompt ("Qual a nota do trabalhoA2: "))
 let provaA2 = parseFloat (prompt ("Qual a nota da provaA2: "))
 let NotaA2 = calcularNotaA2(exercicioA2, trabalhoA2, provaA2)


 console.log("### Calculo da Nota A2 ###")
 console.log("Nota Exercicio A2: " ,exercicioA2)
 console.log("Nota Trabalho A2: " ,trabalhoA2)
 console.log("Nota prova A2: ", provaA2)
 console.log("Nota A2 Calculada: ", NotaA2)

 let NotaFinal = calcularNotaFinal (NotaA1, NotaA2)

 console.log ("A nota Final é: ", NotaFinal)

 if (NotaFinal >= 5){
    console.log("Parabéns " + nome + ", Voce foi aprovado!!!")
 }else {
     console.log("nome " + nome + ", QUE PENINHA VOCE REPROVOU !!@")
    }
    
 
