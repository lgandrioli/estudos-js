function jurossimples(cap,taxa,temp){
  resultado = `montante = ${cap * taxa * temp}` 
  console.log(resultado)
}

jurossimples(1000,0.10,2)

function juroscompostos(cap,taxa,temp,){
resultado2 = cap * (1 +  taxa) ** temp
console.log(resultado2)}
juroscompostos(1000,0.10,2)


