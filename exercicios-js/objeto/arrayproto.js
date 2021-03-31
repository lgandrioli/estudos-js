let a1 = [1, 2, 3, 4, 5]
Array.prototype.first = function (){
    return this[0];
    
}
console.log(a1.first())



Array.prototype.last = function (){
    return this[this.length - 1];
    
}

console.log(a1.last())
