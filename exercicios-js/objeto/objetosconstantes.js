//pessoa ->123 ->{...}
const pessoa = { nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 ->{...}
//pessia = { nome:'Ana'}

Object.freeze(pessoa) //nao pode ser mudado depois de freeze

//pessoa.nome = 'Maria'
//console.log(pessoa.nome)
//delete pessoa.nome

//console.log(pessoa.nome)
//console.log(pessoa)

const pessoaConstante = Object.freeze({ nome:'joao' })
pessoaConstante.nome
console.log(pessoaConstante)
