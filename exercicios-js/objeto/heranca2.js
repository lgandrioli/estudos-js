//cadeia de prototipos(prototype chain)
Object.prototype.atributo0 = '0'  //<- nao recomendado usar

const avo = { atributo1:'A'}
const pai = {__proto__:avo,atributo2:'B'}
const filho = {__proto__:pai,atributo3:'C'}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

const carro={
    velatual:0,
    velmax: 200,
    acelerarmais(delta) {
        if(this.velatual + delta <= this.velmax){
            this.velatual += this.velmax
        }else{this.velatual = this.velmax}
    },status(){
        return `${this.velatual}Km/h de ${this.velmax}Km/h`
    }
}
 
const ferrari = {
    modelo:'f40',
    velmax: 324  //shadowing
}

const volvo= {
    modelo:'v40',
    status(){
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari,volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())