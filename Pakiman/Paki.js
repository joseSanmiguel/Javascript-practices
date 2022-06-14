var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman {
  constructor(n, v, a){
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
  }

  /*no tengo que escribir function porque se entiende implicitamente que
  todo lo que esta dentro ena clase son funciones, por ende no es necesario
  escribir function hablar (ejemplo), sino que escribo directamente hablar*/
  hablar(){
  alert(this.nombre);
  }
}
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);
tocinauro.hablar();
