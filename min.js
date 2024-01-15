
const sonido = new Audio('./sonido/1.mp3')
const victoria = new Audio('./sonido/2.wav')

// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let nombre = document.getElementById('nombreIngresado');
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
intentos = 0;
// Función para comprobar el número ingresado por el usuario

window.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        chequearResultado();
    }
});

// esta es para checar la tecla pulsada
/* const checar = document.getElementById('nombreIngresado');

checar.addEventListener('keydown', function(e){
    console.log('precionaste la tecla: ' + e.key)
}) */

function chequearResultado() {
    sonido.play();
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color = 'black';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.innerHTML = (`¡Felicidades! 👏🎈<span> ${nombre.value}</span> 🏆🎮 ¡Adivinaste el número! 
        <img class="gif5" src="img/40.gif" width="250px">`);
        mensaje.style.color = 'rgb(106, 185, 9)';
        sonido.pause();
        victoria.play();
        numeroEntrada.disabled = true;
        nombre.disabled = true;
        document.querySelector('button').disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.innerHTML = (`<span> ${nombre.value}</span> El número es mayor.`);
        numeroEntrada.focus();
        mensaje.style.color = 'orange';
    } else {
        mensaje.innerHTML = (`<span>${nombre.value}</span> El número es menor. Intenta de nuevo.`);
        numeroEntrada.focus();
        mensaje.style.color = 'red';
    }
}
