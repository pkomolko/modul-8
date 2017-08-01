

var a = parseInt(prompt('podaj liczbę'));
var b = parseInt(prompt('podaj drugą liczbę'));

var wynikRownania = (a * a) + (2 * a * b) - (b * b);

alert (' wynik równania dla liczby ' + a + ' oraz ' + b + ' wynosi ' + wynikRownania + ' . ')

/*if (wynikRownania >= 0) {
    alert('wynik dodatni');
  } else {
    alert('wynik ujemny');
  }

if (wynikRownania = 0) {
    alert('wynik jest zerem');
  } else {
    alert('wynik nie jest zerem');
  }
*/

if (wynikRownania > 0) {

    alert('wynik dodatni');

} else if (wynikRownania < 0) {

    alert('wynik dodatni');

} else {

    alert('wynik jest zerem');

}
