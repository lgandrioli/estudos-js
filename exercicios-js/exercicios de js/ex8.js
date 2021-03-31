//pedro joga 5 jogos na temp
let stringpontos = "10,20,30,50,30,5,20,15,0"

function avaliajogos(stringpontos){
    let pontuacao =stringpontos.split(", ")
    let qntquebrarecord = 0
    let piorjogo = 1
    let maiorpont = pontuacao[0]
    let menorpont = pontuacao[0]

    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorpont){
            maiorpont = pontuacao[i]
            qntquebrarecord++
        }else if (pontuacao[i] < menorpont) {
            menorpont = pontuacao[i]
            piorjogo = i+1;
        }
    }
    return[ qntquebrarecord,piorjogo]
}

console.log(avaliajogos(stringpontos))