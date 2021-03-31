//usando a notacao literal
const obj1 = {}
console.log (obj1)

//object em JS
console.log(typeof Object,typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function produto(nome, preco,desc){
this.nome = nome
this.getPrecoComDesconto = () =>{
    return preco * (1 - desc)
   }
}

const p1 = new produto('caneta',7.99,0.15)
const p2 = new produto('notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Funcao factory
function criarfuncionario(nome,salariobase,faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario() {
            return (salariobase / 30) * (30 - faltas)
        }
    
    }
}

const f1 = criarfuncionario('joao',7980, 4)
const f2 = criarfuncionario('maria',11400,1)
console.log(f1.getsalario(), f2.getsalario())

//object.create
const filha = Object.create(null)
filha.nome = 'janete'
console.log(filha)

//uma funcao famosa que retorna objeto
const fromJson = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJson.info)

