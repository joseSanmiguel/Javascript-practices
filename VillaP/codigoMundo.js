var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var fondo = {
  //No es necesario que se llamen URL o CargaOk, es solo el nombre descriptivo
  url: "tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var cantidad = aleatorio(5, 20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url ;
vaca.imagen.addEventListener("load",cargarvacas);

/*var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load",cargarcerdos);

var pollo = new Image();
pollo.src = "pollo.png" ;
pollo.addEventListener("load",cargarpollos);*/

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarvacas() {
  vaca.cargaOk = true;
  dibujar();
}

function dibujar(){
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk){
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      /*el 6 corresponde al 500/80 donde 500 es
      el valor de la imagen fondo y 80 es el tama;o
    de la imagen vaca, pero este resultado al multimplicarse por el
    valor de una imagen que es 80 va a sobrepasr los 420 que es el
    maximo de pantalla para que no se salgan las vacas fuera del
    lienzo, entonces le bajamos al valor para que sea 5 de esta manera
    no va a salir del lienzo, si queremos lasvacas mas cercanas solo
    cambiamos el 80 por un valor mas peque;o. al final ese valor multimplicacado
    por el valor al lado de cero en aleatorio() no debe superar los 420mp */
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x , y);
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
