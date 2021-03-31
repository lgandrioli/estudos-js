/*const prod1 = {
    nome: '...'
    preco: 45
}

const prod2 = {
    nome: '...'
    preco: 45
}
redundante*/

//Factory simples
function criarPessoa() {
    return{
        nome:'james',
        sobrenome:'pereira'
    }
}

console.log(criarPessoa())