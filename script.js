

let opciones = ["piedra","papel","tijera"];

function elegir()
{
    
    let x = Math.floor( Math.random()*3  );
    return opciones[x];

}



let contadorJugador = 0;
let contadorPC = 0;

const mensaje = document.querySelector(".victorias");
mensaje.textContent = "Victorias : " + contadorJugador

const mensaje2 = document.querySelector(".derrotas");
mensaje2.textContent = "Derrotas : " + contadorPC;

const mensaje3 = document.querySelector(".usado");
mensaje3.textContent = "aun no";

function usar(numero){
    if (numero === 1)
    {
        mensaje3.textContent = "1";
        contadorJugador ++;
    }
    if (numero === 2)
    {
        mensaje3.textContent = "2";
    }
    if (numero === 3)
    {
        mensaje3.textContent = "3";
    }
    
}

const boton1 = document.getElementById("uno");
boton1.addEventListener("click",function()
{usar(1);
    const mensaje = document.querySelector(".victorias");
mensaje.textContent = "Victorias : " + contadorJugador

}

);
const boton2 = document.getElementById("dos");
boton2.addEventListener("click",function()
{usar(2);}

);
const boton3 = document.getElementById("tres");
boton3.addEventListener("click",function()
{usar(3);}

); 




