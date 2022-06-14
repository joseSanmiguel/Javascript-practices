var numeros = 100;

for (var i = 1; i <= 100; i++) {
if (esDivisible(i, 3)) {
  document.write(" fizz");
}
if (esDivisible(i,5)) {
  document.write(" Buzz");
}
/* el signo ! es para decir que "no es" en este caso "no es divisible"
al igual que si fuera != que seria diferente o no es igual*/
if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
  document.write (i);
}
document.write( "<br/>")}

function esDivisible(num, divisor)
{
  if (num % divisor == 0){
    return true;
  }
  else return false;
}
