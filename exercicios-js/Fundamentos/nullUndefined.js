let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.tostring()) //erro                             //nao definir valores como undefined

const produto ={}
console.log(produto.preco)

produto.preco = 3,50
console.log(produto)

produto.preco = undefined //evitar usar undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto) 

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)