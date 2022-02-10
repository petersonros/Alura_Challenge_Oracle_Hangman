let tentativas = 6;

let listaDinamica = [];
let palavraDica;
let palavraSorteada;

const palavras = [
    palavra01 = {
        palavra: "BRASIL",
        dica:"LUGARES"
    },
    palavra02 = {
        palavra: "ARGENTINA",
        dica:"LUGARES"
    },
    palavra03 = {
        palavra: "CACHORRO",
        dica:"ANIMAL"
    },
    palavra04 = {
        palavra: "CAVALO",
        dica: "ANIMAL"
    },
    palavra05 = {
        palavra: "BANANA",
        dica: "FRUTA"
    },
    palavra06 = {
        palavra: "MANGA",
        dica: "FRUTA"
    }
];

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

function verificaLetraEscolhida(letra){
    document.getElementById("idkey-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("idkey-" + letra);
        comparaListas(letra);
        mostrarPalavra();
    }
    console.log(letra);
}

function mudarStyleLetra(idkey){
    document.getElementById(idkey).style.background = "#151515";
    document.getElementById(idkey).style.color = "#FFFFFF";
}

function comparaListas(letra){
    const pos = palavraSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        // mostrar imagem
        // vererificar se ainda tem tentativas // mensagem
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
        vitoria = false;
    }

    if(vitoria == true){
        // mensagem na tela
        tentativas = 0;
    }
}