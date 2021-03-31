function divisao (div1,div2){
resultado = div1 / div2
return resultado
}
console.log(divisao(10, 5))

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`) 
}

divisao(11, 4)