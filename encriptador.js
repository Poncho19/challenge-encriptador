//Se desarrolla un encriptador
let palabraFrase;


//Funcionalidad del boton encriptador
function botonEncriptador(){
    let palabraEncriptada = "";
    let palabraNormal = document.getElementById("area-1").value.toLowerCase();    
    palabraNormal = eliminaAcentos(palabraNormal);
    palabraEncriptada = encriptar(palabraNormal);
    return document.getElementById("area-2").innerHTML = palabraEncriptada;
}

//Funcionalidad del boton desencriptar
function botonDesencriptar(){
    let palabraEncriptada = document.getElementById("area-1").value.toLowerCase();   
    palabraEncriptada = eliminaAcentos(palabraEncriptada); 
    palabraNormal = desencriptar(palabraEncriptada);
    return document.getElementById("area-2").innerHTML = palabraNormal;
}

//Funcion que detecta acentos
function eliminaAcentos(palabraAcentuada){    

    palabraAcentuada = palabraAcentuada.replaceAll('é','e');
    palabraAcentuada = palabraAcentuada.replaceAll('í','i');
    palabraAcentuada = palabraAcentuada.replaceAll('á','a');
    palabraAcentuada = palabraAcentuada.replaceAll('ó','o');
    palabraAcentuada = palabraAcentuada.replaceAll('ú','u');
    
    return palabraAcentuada;
}

//Funcionalidad del boton copiar
function botonCopiar(){ 
    let textoCopiado = "";
    
    document.getElementById("area-2").select();
    document.execCommand('copy');
    document.getElementById("area-1").select();
    document.execCommand('delete');
    textoCopiado = document.getElementById("area-2").value;
    console.log(textoCopiado);
    window.getSelection().removeAllRanges();
    return;
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