var botonJugar = document.querySelector("#crear-jugar");
var palabra = document.querySelector("#creando-palabra");

var palabra_final;
palabra.value = "";

botonJugar.addEventListener("click", function(){
    console.log(palabra.value.toUpperCase());
    if(tiene8(palabra.value)){
        palabra_final = palabra.value.toUpperCase();
        start(palabra_final);
        palabra.value = "";
    }else{
        alert("Ingrese una Palabra de 8 letras..!");
    }
});

function tiene8(palabra){
    if(palabra.length == 8){
        return true;
    }else{
        return false;
    }
}