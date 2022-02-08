/* 
var frutas = ['maça', 'banana', 'morango', 'abacate', 'melancia', 'jabuticaba', 'mamão', 'melão', 'laranja', 'abacaxi', 'acerola', 'manga'];
var transporte = ["avião", "caminhão", "trem", "taxi", "ônibus", "metro", "bicicleta", "navio", "barco", "carro", "bonde", "balsa"]
 */
var frutas = ['Maçã', 'Banana', 'Laranja'];


function escolherFrutaAleatoria() {
  var frutaAleatoria = frutas[Math.floor(Math.random() * frutas.length)];
	return frutaAleatoria;
};
//Armazenando em uma variável baseados no array de frutas acima onde:
//Math.floor irá arredondar os números para que sejam sempre inteiros (0,1,2)
//Math.randon fara uma escolha aleatória baseada no número de itens presentes 
//dentro do array de frutas, pois multiplicamos as possibilidades pelo
//comprimento do array de frutas ou seja Math.randon( ) * 2

console.log(frutaAleatoria);
//0 = "Maçã", 1 = "Banana" ou 2 = "Laranja";


