//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome
const cliente ={
    nome: 'Robertinho',
    idade: 24 ,
    peso:130,
    endereco: {
        logradouro:'rua n,sei das quantas',
        numero:321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

