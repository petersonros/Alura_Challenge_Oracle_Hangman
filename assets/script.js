let tentativas = 6;
let listaDinamica = [];
let palavraDica;
let palavraSorteada;

criarPalavra()
function criarPalavra(){
    const indexPalavra = parseInt(Math.random(0) * palavras.length)
    palavraSorteada = palavras[indexPalavra].palavra;
    palavraDica = palavras[indexPalavra].dica;
}

mostrarPalavra();
function mostrarPalavra(){
    const dica = document.getElementById("dica");
    dica.innerHTML = palavraDica;

    const naTela = document.getElementById("palavra");
    naTela.innerHTML = "";

    for(i = 0; i < palavraSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            naTela.innerHTML = naTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            naTela.innerHTML = naTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
    console.log(palavraSorteada);

}

function verificaLetra(letra){
    document.getElementById("idkey-" + letra).disabled = true;
    if(tentativas > 0){
        mudaCorBotao("idkey-" + letra);
        comparaListas(letra);
        mostrarPalavra();
    }
}

function mudaCorBotao(idkey){
    document.getElementById(idkey).style.background = "#87CEFA";
    document.getElementById(idkey).style.color = "#FFFFFF";
}

function comparaListas(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        montaBoneco();
        if(tentativas == 0){
            document.querySelector("#result").innerHTML = ("Não foi dessa vez! A palavra era " + palavraSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        document.getElementById("result").innerHTML = ("Parabéns, você venceu!");
        tentativas = 0;
    }
}

function montaBoneco(){
    switch(tentativas){
        case 5:
            head();
            break;
        case 4:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 2:
            rightArm();
            break;
        case 1:
            leftLeg();
            break;
        case 0:
            rightLeg();
            break;
    }
}

let bntNovoJogo = document.querySelector("#btnNovoJogo")
bntNovoJogo.addEventListener("click", function(){
    location.reload();
});
