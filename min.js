// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let nombre = document.getElementById('nombreIngresado');
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
intentos = 0;
// Función para comprobar el número ingresado por el usuario
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color = 'red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! 👏🎈 ' + nombre.value + ' 🏆🎮¡Adivinaste el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        nombre.disabled = true;
        document.querySelector('button').disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'blue';
    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'orange';
    }
}
