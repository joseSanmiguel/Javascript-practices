var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujalineas("green", 149, 149, 151, 151, papel);

function dibujalineas(color, xInicial, yInicial, xFinal, yFinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colo = "blue";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
    dibujalineas(colo, x, y, x, y - movimiento, papel);
    y = y - movimiento;
      break;
      case teclas.DOWN:
      dibujalineas(colo, x, y, x, y + movimiento, papel);
      y = y + movimiento;
        break;
        case teclas.LEFT:
        dibujalineas(colo, x, y, x - movimiento, y, papel);
        x = x - movimiento;
          break;
          case teclas.RIGHT:
          dibujalineas(colo, x, y, x  + movimiento, y, papel);
          x = x + movimiento;
            break;
  }
}
