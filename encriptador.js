//Se desarrolla un encriptador
let palabraFrase;


//Funcionalidad del boton encriptador
function botonEncriptador(){
    let palabraEncriptada = "";
    let palabraNormal = document.getElementById("area-1").value;
    console.log(palabraNormal);    
    palabraEncriptada = encriptar();
    document.getElementById("area-2").value = palabraEncriptada; 
    return palabraEncriptada;
}

//Funcion para encriptar
function encriptar(palabraFrase){
    palabraFrase = palabraFrase.replaceAll('e',"enter");
    palabraFrase = palabraFrase.replaceAll('i',"imes");
    palabraFrase = palabraFrase.replaceAll('a',"ai");
    palabraFrase = palabraFrase.replaceAll('o',"ober");
    palabraFrase = palabraFrase.replaceAll('u',"ufat");
    return palabraFrase;
}


//Funcion para desencriptar
function desencriptar(palabraFrase){
    palabraFrase = palabraFrase.replaceAll("enter",'e');
    palabraFrase = palabraFrase.replaceAll("imes",'i');
    palabraFrase = palabraFrase.replaceAll("ai",'a');
    palabraFrase = palabraFrase.replaceAll("ober",'o');
    palabraFrase = palabraFrase.replaceAll("ufat",'u');
    return palabraFrase;
}