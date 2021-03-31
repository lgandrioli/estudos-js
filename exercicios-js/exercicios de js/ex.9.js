function aprovados(nota){
    let resultado = arredonda(nota)
    if (resultado >=40){
     console.log(`aprovado com nota ${resultado}`)}
     else{
         console.log(`Reprovado com nota ${resultado}`)
     }
}

function arredonda (nota){
    if(nota % 5 >2){
        return nota+ (5 -(nota % 5))
    }else {
        return nota
    }
}
aprovados(100)
aprovados(80)
aprovados(78)
aprovados(56)
aprovados(29)
aprovados(39)
aprovados(38)
