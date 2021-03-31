Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}
 
const imprimirresultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    }else if(nota.entre(4,6.99)){
        console.log('recuperacao')
    }else if(nota.entre(0, 3,99)) {
        console.log('reprovado')
    }else {
        console.log('nota invalida')
    }
}

imprimirresultado(10)
imprimirresultado(8.9)
imprimirresultado(6.55)
imprimirresultado(1.9)
imprimirresultado(NaN)
imprimirresultado(11)
