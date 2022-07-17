var botonJugar = document.querySelector("#jugar");
var botonRestart = document.querySelector("#nva-palabra");

/* 003049-d62828-f77f00-fcbf49-eae2b7 */
var randomWord = ["ABLANDAR","ABORIGEN","ABREVIAR","ACARREAR","ACOGEDOR","ADJETIVO","ADJUNTAR","AFRONTAR","AGRICOLA","ALCAYATA","ALMOHADA","AMINORAR","APARECER","APRECIAR","ARBITRAR","ATENAZAR","ATREVIDO","AVENTURA","AVESTRUZ","BAILARIN","BALUARTE","BARATIJA","BARBACOA","BEBEDIZO","BENDECIR","BLANCURA","BOFETADA","BOMBILLA","BORDILLO","BRAGUERO","CABESTRO","CAFETERA","CALCULAR","CALIFATO","CALLEJON","CALZADOR","CAMARERO","CAPTURAR","CARRUAJE","CARRUSEL","CARTILLA","CARTUCHO","CASTILLO","CATARATA","CELEBRAR","CELLISCA","CERILLAS","CHISTERA","CIRCUITO","CIRCULAR","CODORNIZ","COFRADIA","COLGANTE","COLONIAL","COMPARAR","COMPARSA","CONCEBIR","CONCEDER","CONCEPTO","CONSULTA","CONTRATO","CONVERSO","CONVICTO","CONVULSO","CORRECTO","CORREDOR","CREACION","CREATIVO","CREENCIA","CULMINAR","CULTURAL","DACTILAR","DECISION","DEGRADAR","DEGUSTAR","DELGADEZ","DEPRIMIR","DESACATO","DESATINO","DESCOSER","DESCUIDO","DESGUACE","DESHACER","DESTACAR","DESTAPAR","DESTELLO","DEVUELTO","DICTAMEN","DIMINUTO","DIPUTADO","DISOLVER","DOLORIDO","DUALIDAD","DURADERO","EFECTUAR","ELEVADOR","EMBELESO","EMPALMAR","EMPLAZAR","ENCANTAR","ENCESTAR","ENDEMICO","ENFATICO","ENSALADA","ENTENDER","ENVUELTO","ERUPCION","ESCALOPE","ESCOMBRO","ESPINOSO","ESPUMOSO","ESQUIMAL","ESTATURA","ESTOFADO","ESTUDIAR","EVENTUAL","EVOCADOR","EXALTADO","EXPLORAR","EXPULSAR","EXTRACTO","FABRICAR","FABULOSO","FANATICO","FANDANGO","FAVORITO","FECHORIA","FECUNDAR","FEMENINO","FESTEJAR","FLAQUEZA","FLORISTA","FOLLETIN","FONETICA","FORAJIDO","FRONDOSO","GABINETE","GALAPAGO","GARBANZO","GENEROSO","GENETICA","GRABADOR","GRADUADO","GUISANTE","GUITARRA","HABANERO","HECHIZAR","HERETICO","HOLGAZAN","HOMONIMO","HOSPITAL","HUMILDAD","ILUSTRAR","IMAGINAR","IMPRENTA","IMPULSAR","INCIENSO","INCIERTO","INCULPAR","INDULTAR","INOCENTE","INSIGNIA","INSUFLAR","INSUMISO","INTENTAR","INVASION","ISOTERMO","JABALINA","JACOBINO","JILGUERO","JUSTICIA","JUVENTUD","LABRANZA","LADRILLO","LANGOSTA","LANZADOR","LASTIMAR","LICENCIA","LIQUIDEZ","LUCHADOR","MAGNOLIA","MALETERO","MAMIFERO","MANIOBRA","MEDIEVAL","MERCADER","MERENDAR","MISTERIO","MOLESTAR","MOLINERO","MORALEJA","NEBULOSA","NERVIOSO","OBELISCO","OCTAEDRO","OLFATEAR","ONDULADO","OPOSITOR","ORIGINAL","ORQUIDEA","PABELLON","PALOMITA","PARAGUAS","PASAJERO","PASTORIL","PERCUTOR","PERDURAR","PEREZOSO","PERFECTO","PERGEÑAR","PISTACHO","PLEITEAR","POLTRONA","POPULOSO","PORTERIA","PRECEPTO","PRESTAMO","PROBABLE","PROBADOR","PRODUCTO","PROFESOR","PROVOCAR","PUÑETAZO","PURGANTE","RASPADOR","REACTIVO","REAVIVAR","RECORTAR","REITERAR","RENEGADO","REPROCHE","REPUESTO","RESERVAR","REVOLCAR","RUPESTRE","SACUDIDA","SEDUCTOR","SEGMENTO","SENCILLO","SENSIBLE","SERVICIO","SIMETRIA","SOBORNAR","SORPRESA","SUBSUELO","SUCIEDAD","SUFRAGIO","SUSTENTO","TABURETE","TANGENTE","TERMINAR","TORNILLO","TORRENTE","TRADUCIR","TRAVESIA","VAINILLA","VARIEDAD","VENTISCA","VOCATIVO","VORAGINE"];

var palabraAdivinar;
var palabraArray;
var letrasUsadas = [1];
var palabra_Inner = document.querySelector("#palabraInner");
var letras_Inner = document.querySelector("#letras-usadas");
var intentos;
var nroLetras;
var guiones;
var guiones_act;
var resultado = document.querySelector("#resultado");


var filter = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var teclaPulsada = document.querySelector("html");
var tecla;
var cambio;

palabra_Inner.addEventListener("touchstart", function(){
    focus();
});

botonJugar.addEventListener("click", function(){
    start(randomWord[Math.floor(Math.random() * randomWord.length)]);
});

botonRestart.addEventListener("click", function(){
    start(randomWord[Math.floor(Math.random() * randomWord.length)]);    
});

teclaPulsada.addEventListener("input", function(event){
    
    tecla = event.key.toUpperCase();
    console.log(tecla);
    if(filter.includes(tecla)){
        if(buscarLetra(tecla)){
            if(checkLetrasUsadas(tecla)){
            nroLetras = nroLetras + cambio;
            }
            console.log(nroLetras);
            if(nroLetras == 8){
                alert("Felicidades!");
                resultado.innerHTML = "Felicidades! Ganaste!!";
                return;
            }
        }else{
            if(checkLetrasUsadas(tecla)){                
                intentos--; 
                dibujoJuego(intentos);               
            }
            console.log("Intentos restantes: " + intentos);           
            if(intentos == 0){
                alert("Perdiste crack!");
                resultado.innerHTML = "Buen Intento! Perdiste!";
                return;
            }
        }

    }
});

function checkLetrasUsadas(key){
    if(!letrasUsadas.includes(key)){
        letrasUsadas.push(key);
        letras_Inner.innerHTML = letrasUsadas;
        return true;
    }
    return false;
}

function buscarLetra(key){
    cambio = 0;
    for(var i = 0; i < palabraArray.length; i++){
        if(palabraArray[i] == key){
            guiones_act[i] = key;
            console.log(guiones_act);
            palabra_Inner.innerHTML = guiones_act.join(" ");
            cambio++;
        }
    }
    if(cambio == 0){
        return false;
    }else{
        return true;
    }
}

function start(palabra){
    limpiar();
    dibujarBaseHorca();
    guiones = ["_","_","_","_","_","_","_","_"];
    letrasUsadas.length = 0;
    guiones_act = guiones;
    intentos = 8;
    nroLetras = 0;
    resultado.innerHTML = "";
    palabraAdivinar = palabra;
    palabraArray = palabraAdivinar.split("");
    palabra_Inner.innerHTML = palabra_Inner.innerHTML.replace(palabra_Inner.innerHTML, guiones_act.join(" "));
    letras_Inner.innerHTML = letras_Inner.innerHTML.replace(letras_Inner.innerHTML,"");
    console.log(palabraArray);
    console.log(palabraArray.join(""));
}
