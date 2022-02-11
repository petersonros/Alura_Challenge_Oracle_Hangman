var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = '#252525';
pincel.fillRect(0, 0, 510, 360);
pincel.fill();

/* desenho da forca */
pincel.fillStyle = "#FFD700"
pincel.beginPath();
pincel.moveTo(167, 60); /* ponto 1 */
pincel.lineTo(167, 340); /* ponto 2 */
pincel.lineTo(105, 355); /* ponto 3 */
pincel.lineTo(105, 360); /* ponto 4 */
pincel.lineTo(235, 360); /* ponto 5 */
pincel.lineTo(235, 355); /* ponto 6 */
pincel.lineTo(173, 340); /* ponto 7 */
pincel.lineTo(173, 66); /* ponto 8 */
pincel.lineTo(334, 66); /* ponto 9 */
pincel.lineTo(334, 120); /* ponto 10 */
pincel.lineTo(340, 120); /* ponto 11 */
pincel.lineTo(340, 60); /* ponto 12 */
pincel.fill();

/* desenho do boneco */

/* pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill(); */
