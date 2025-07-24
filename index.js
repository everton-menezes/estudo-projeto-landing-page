var Leonardo = window.document.getElementById("card-leonardo")
var Samantha = window.document.getElementById("card-samantha")
var Bruna = window.document.getElementById("card-bruna")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    SetaDireita.style = "display: none"
    SetaEsquerda.style = "display: flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    SetaDireita.style = "display: flex"
    SetaEsquerda.style = "display: none"
}