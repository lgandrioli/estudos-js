//Closure é o escopo criado quando uma funçao é declarada
//Esse escopo permite a funçao acessar e manipular variaveis externas a funçao

//contexto lexico em acao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())