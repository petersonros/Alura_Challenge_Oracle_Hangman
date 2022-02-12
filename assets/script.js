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
}

function verificaLetra(letra){
    document.getElementById("idkey-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("idkey-" + letra);
        comparaListas(letra);
        mostrarPalavra();
    }
}

function mudarStyleLetra(idkey){
    document.getElementById(idkey).style.background = "#151515";
    document.getElementById(idkey).style.color = "#FFFFFF";
}

function comparaListas(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        montaBoneco();// mostrar imagem
        // vererificar se ainda tem tentativas // mensagem
        if(tentativas == 0){
            document.querySelector().innerHTML
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
        // mensagem na tela
        mostraMenssagem();
        tentativas = 0;
    }
}

function montaBoneco(){
    switch(tentativas){
        case 5:
            document.getElementById("tela").innerHTML.head();
            break;
        case 4:
            document.getElementById("imagem").innerHTML.body();
            break;
        case 3:
            document.getElementById("imagem").innerHTML.leftArm();
            break;
        case 2:
            document.getElementById("imagem").innerHTML.rightArm();
            break;
        case 1:
            document.getElementById("imagem").innerHTML.leftLeg();
            break;
        case 0:
            document.getElementById("imagem").innerHTML.rightLeg();
            break;
    }
}

function mostraMenssagem(titulo, mensagem){
    let vitoriaNaTela = document.getElementById("result", "parabéns, você venceu!");
    vitoriaNaTela.innerText = titulo;

    let modalBody = document.getElementById("result");
    modalBody.innerHTML = mensagem;

/*     $("#myModal").modal({
        show: true
    }); */
}

let bntNovoJogo = document.querySelector("#btnNovoJogo")
bntNovoJogo.addEventListener("click", function(){
    location.reload();
});
