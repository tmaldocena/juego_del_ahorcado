var botonJugar = document.querySelector("#jugar");
var botonVolverJuego = document.querySelector("#volver-juego");
var botonPalabra = document.querySelector("#palabra");
var botonVolverPalabra = document.querySelector("#volver-palabra");
var botonCrearJugar = document.querySelector("#crear-jugar");
var seccionBotones = document.querySelector(".botones");
var seccionJuego = document.querySelector(".juego");
var seccionPalabra = document.querySelector(".crear-palabra");
var palabraCrear = document.querySelector("#creando-palabra");

seccionJuego.classList.add("invisible");
seccionPalabra.classList.add("invisible");

botonJugar.addEventListener("click", function(event){
    seccionBotones.classList.add("invisible");
    seccionJuego.classList.remove("invisible");
    window.scroll({
        top: 100,
        behavior: "smooth",
    });
});

botonPalabra.addEventListener("click", function(){
    seccionBotones.classList.add("invisible");
    seccionPalabra.classList.remove("invisible");
    window.scroll({
        top: 100,
        behavior: "smooth",
    });
});

botonCrearJugar.addEventListener("click", function(){
    if(tiene8(palabraCrear.value)){
        seccionPalabra.classList.add("invisible");
        seccionJuego.classList.remove("invisible");
        window.scroll({
            top: 100,
            behavior: "smooth",
        });
    }
});

botonVolverJuego.addEventListener("click", function(){
    seccionBotones.classList.remove("invisible");
    seccionJuego.classList.add("invisible");
    window.scroll({
        top: 100,
        behavior: "smooth",
    });
    intentos = 1000;
    nroLetras = 1000;
});

botonVolverPalabra.addEventListener("click", function(){
    seccionPalabra.classList.add("invisible");
    seccionBotones.classList.remove("invisible");
    window.scroll({
        top: 100,
        behavior: "smooth",
    });
    intentos = 1000;
    nroLetras = 1000;
});