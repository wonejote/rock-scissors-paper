

const opciones = ["Piedra","Papel","Tijeras"];

function elegir()
{   
    let x = Math.floor( Math.random()*3  );
    return opciones[x];
}



let contadorJugador = 0;
let contadorPC = 0;

const mensaje = document.querySelector(".victorias");
mensaje.textContent = "Victorias : " + contadorJugador;

const mensaje2 = document.querySelector(".derrotas");
mensaje2.textContent = "Derrotas : " + contadorPC;

const mensaje3 = document.querySelector(".usado");


const mensaje4 = document.querySelector(".computador");

function usar(numero){
    if (numero === 1) {mensaje3.textContent = "Piedra";}
    if (numero === 2) {mensaje3.textContent = "Tijeras";}
    if (numero === 3) {mensaje3.textContent = "Papel";}  
    let compu = elegir();
    mensaje4.textContent = compu; 
    ganador(numero,compu);
}
function ganador(numero,compu)
{
    if (numero === 1 && compu === "Tijeras"){contadorJugador++;}
    if (numero === 1 && compu === "Papel"){contadorPC++;}

    if (numero === 2 && compu === "Papel"){contadorJugador++;}
    if (numero === 2 && compu === "Piedra"){contadorPC++;}

    if (numero === 3 && compu === "Piedra"){contadorJugador++;}
    if (numero === 3 && compu === "Tijeras"){contadorPC++;}

    mensaje.textContent = "Victorias : " + contadorJugador;
    mensaje2.textContent = "Derrotas : " + contadorPC;

}


const botones = document.querySelectorAll(".botond");

botones.forEach(boton => {
  boton.addEventListener("click", function () {
    if (boton.id === "uno") {usar(1);}
     else if (boton.id === "dos") {usar(2);}
      else if (boton.id === "tres") {usar(3);}
  });
});


