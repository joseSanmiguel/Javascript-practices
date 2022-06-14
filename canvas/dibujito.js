var usuario = document.getElementById("cajaCantidadDeLineas");
var d = document.getElementById("dibujito");
var ancho = d.width;
var button = document.getElementById("boton");
button.addEventListener("click", dibujoPorClick);
var lienzo = d.getContext("2d");

function dibujalineas(color, xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(usuario.value);
  var l = 0;
  var yi, xf;
  var colorcito = "red";
  var espacio = ancho / lineas;

  //while(l < lineas){
    for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujalineas(colorcito, 0, yi, xf, ancho);
    console.log("linea" + l);
    //l++;
    }

    dibujalineas(colorcito, 0, 0, 0, ancho);
    dibujalineas(colorcito, 0, 300, 300, ancho);
}
