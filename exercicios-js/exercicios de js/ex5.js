function resultado(a ,b){
    resultado = a + b
    if (resultado = 0.30000000000000004){
        return 'R$0,30'
    }
}

console.log(resultado(0.1,0.2))


function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)