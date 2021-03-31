function imprimirnomegritado(Obj) {
    try{
    console.log(Obj.name.toUpperCase()) + '!!!'}
 catch(e) {
    tratarerroelancar(e)
}
}




const Obj = {nome:'Roberto'}
imprimirnomegritado(obj)
