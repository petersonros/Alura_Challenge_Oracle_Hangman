var tela = document.querySelector("canvas");
var linha = tela.getContext('2d');

/* desenha tela */
linha.fillStyle = '#252525';
linha.fillRect(0, 0, 510, 360);
linha.fill();

/* desenha forca */
forca();

/* forca */
function forca(){
    linha.fillStyle = "#FFFFFF";
    linha.beginPath();
    linha.moveTo(167, 60);
    linha.lineTo(167, 340);
    linha.lineTo(115, 355);
    linha.lineTo(115, 360);
    linha.lineTo(225, 360);
    linha.lineTo(225, 355);
    linha.lineTo(173, 340);
    linha.lineTo(173, 66);
    linha.lineTo(334, 66);
    linha.lineTo(334, 120);
    linha.lineTo(340, 120);
    linha.lineTo(340, 60);
    linha.fill();
};

/* cabeça */
function head(){
    linha.fillStyle = '#FFFFFF';
    linha.beginPath();
    linha.arc(337, 143, 23, 0, 2 * 3.14);
    linha.fill();
};

/* tronco */
function body(){
    linha.fillStyle = "#FFFFFF"
    linha.beginPath();
    linha.moveTo(334, 166);
    linha.lineTo(334, 229);
    linha.lineTo(340, 229);
    linha.lineTo(340, 166);
    linha.fill();
};

/* braço esquerdo */
function leftArm(){
    linha.fillStyle = "#FFFFFF"
    linha.beginPath();
    linha.moveTo(337, 170);
    linha.lineTo(337, 178);
    linha.lineTo(310, 205);
    linha.lineTo(310, 197);
    linha.fill();
};

/* braço direito */
function rightArm(){
    linha.fillStyle = "#FFFFFF"
    linha.beginPath();
    linha.moveTo(337, 170);
    linha.lineTo(337, 178);
    linha.lineTo(364, 205);
    linha.lineTo(364, 197);
    linha.fill();
};

/* perna esquerda */
function leftLeg(){
    linha.fillStyle = "#FFFFFF"
    linha.beginPath();
    linha.moveTo(337, 218);
    linha.lineTo(337, 226);
    linha.lineTo(310, 253);
    linha.lineTo(310, 245);
    linha.fill();
};

/* perna direita */
function rightLeg(){
    linha.fillStyle = "#FFFFFF"
    linha.beginPath();
    linha.moveTo(337, 218);
    linha.lineTo(337, 226);
    linha.lineTo(364, 253);
    linha.lineTo(364, 245);
    linha.fill();
}