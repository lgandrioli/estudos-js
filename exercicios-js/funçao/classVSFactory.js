class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Joao')
p1.falar()

const criarpessoa = nome => {
    return {
        falar: ( )=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarpessoa('Joao')
p2.falar()