let textoInput =document.getElementById('textoInput').value="";
let codigoCifrar=[
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
];
let textoCifrado = [""];
let unirTextoCifrado=[""];

function validarInput(textoInput) { 


    let regex = /^[A-Za-zÿ\u00f1\s]+$/;    
    textoInput.value = textoInput.value.toLowerCase();
    let texto = textoInput.value; 
 
    if (!regex.test(texto)) {
        textoInput.value = texto.replace(/[^a-z]/g, '');
    }else;  
};

function descifrar() {

    textoInput =document.getElementById('textoInput').value;
    codigoCifrar.map((element) => textoInput = textoInput.replaceAll (element[1],element[0]));
    mostrarTextoCifrado("#ingrese-texto",textoInput);
    document.querySelector('.descifrar').setAttribute('disabled','true');
    document.querySelector('.cifrar').setAttribute('disabled','true');
    document.querySelector('.descifrar').classList.add("green");
    document.querySelector('.descifrar').innerHTML= "REALIZADO";
    displayNone();
}

function cifrar() {

    textoInput = document.getElementById('textoInput').value;
    let palabras = textoInput.split("");
      
    for (let i = 0; i < palabras.length; i++) {
        let palabraEnLetras = palabras[i];

        if (codigoCifrar.some(subArray => subArray.includes(palabraEnLetras)) ){
                    
            for (let i = 0; i < codigoCifrar.length; i++) {
                let codigoCifrarSeparado =codigoCifrar[i];
   
                    if (codigoCifrarSeparado.includes(palabraEnLetras)) {
                        cambioCodigoLetra= palabraEnLetras.replace (codigoCifrarSeparado[0],codigoCifrarSeparado[1]);
                        textoCifrado.push(cambioCodigoLetra);
                    }                    
                }
        } 
        else {
            textoCifrado.push(palabraEnLetras);
            }  
    }
    unirTextoCifrado=textoCifrado.join("");
    mostrarTextoCifrado("#ingrese-texto",unirTextoCifrado);
    document.querySelector('.cifrar').setAttribute('disabled','true');
    document.querySelector('.descifrar').setAttribute('disabled','true');
    document.getElementById("texto-cifrado").setAttribute('style', "height: 400px");
    document.getElementById("ingrese-texto").setAttribute('style', "font-size : 26px");
    document.querySelector('.cifrar').classList.add("green");
    document.querySelector('.cifrar').innerHTML= "REALIZADO"; 
    displayNone();
    textoCifrado=[""];
}

function condicionesIniciales() {

    document.querySelector('.cifrar').removeAttribute('disabled');
    document.querySelector('.descifrar').removeAttribute('disabled');
    document.querySelector('.cifrar').classList.remove("green");
    document.querySelector('.descifrar').classList.remove("green");
    document.querySelector('.cifrar').innerHTML= "CODIFICAR";
    document.querySelector('.descifrar').innerHTML= "DECODIFICAR";
    //document.getElementById("textoInput").value="";
}

function mostrarTextoCifrado(elemento, texto) {
    //mostrar el texto cifrado o descifrado
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function copiarTexto() {

    let copiar = document.getElementById("ingrese-texto");
    let texto = copiar.innerText;
    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textarea.value);
    mostrarTextoCifrado("#ingrese-texto","Texto copiado");
    document.body.removeChild(textarea); 
    document.getElementById('textoInput').value = "";
}

function displayNone() {
    //elimina parrafo cuando cifra o descifra
    //elimina imagen cuando cifra o descifra
    //visibiliza boton copiar cuando cifra o descifra
    document.getElementById("muñeco").style.display="none";
    document.getElementById("texto-sin-ingresar").style.display="none";
    document.getElementById("boton-copiar").style.display="block";
}