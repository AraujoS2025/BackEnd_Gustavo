// 40% da Nota

function calcularNotaA1(exerecicios, trabalho, prova){
    return exerecicios + trabalho + prova
}

// 60% da Nota
function calcularNotaA2(exerecicios, trabalho, prova){
    return exerecicios + trabalho + prova
}

// calculo nota Final (NotaA1 + notaA2)
 function calcularNotaFinal(NotaA1, NotaA2){
    return (NotaA1 * 0.4 ) + (NotaA2 * 0.6)
 }

 // exportar essas funções para serem utilizadas no index
 
 module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    calcularNotaFinal,
 }