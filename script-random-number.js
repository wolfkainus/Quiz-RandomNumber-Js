//RANDOM NUMBER
var randomNumber = Math.floor(Math.random() *10) + 1;

for (Intentos = 0; Respuesta != randomNumber; Intentos +=1) {
    var Respuesta = prompt("Adivina un número entre el 1 al 10");
}

document.write("Adivinaste, el número era " + randomNumber + "<br>");

if (randomNumber === 1){
    document.write("Te costo " + Intentos + " intento");
}
else {
    document.write("Te costo " + Intentos + " intentos");
}
