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