//location no es una funcion de este caso sino un variable del objeto window por lo cual se le
//conoce como atributo o propiedad. En este caso location es un aributo o propiedad del objeto window
var ruta = window.location;
//console.log se usa para mandar informacion que el usuario no ve solo es interna para el sistema
//pero se puede acceder a la misma dentro de la pagina web con el inspector de codigo (Tecla f12)
console.log(ruta);
//.write es una funcion que hace parte de un objeto en este caso el objeto es Document
//un metodo es un funcion anidad con un objeto
document.write("Estas en " + ruta);
