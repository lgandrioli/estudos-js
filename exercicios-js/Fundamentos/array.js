const valores = [7.7, 8.9, 6.4, 9.2] //indices de 0 a 3
console.log(valores[0])
console.log(valores[4])

valores[4]= 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3},false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]//deleta elementos do arrey
console.log(valores)

console.log(typeof valores)
