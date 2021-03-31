globalThis.preco = 20
globalThis.desc = 0.1

function getPreco(imposto = 0,moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const  produto = { 
    nome:'notebook',
    preco:4000,
    desc:0.15,
    getPreco
}
        

    console.log(getPreco())
    console.log(produto.getPreco())

    const carro = { preco:49990, desc: 0.20}

    console.log(getPreco.call(carro))
    console.log(getPreco.apply(carro))

  
    