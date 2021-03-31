const imprimirresultado = function(nota){
    if(nota>7){
        console.log('aprovado!')
    } else {
        console.log('reprovado')
    }
}
imprimirresultado(10)
imprimirresultado(4)
imprimirresultado('epa') //cuidado com erro
