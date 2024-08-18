const textArea = document.querySelector(".tex-area");
const mensaje= document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encriptar(stringEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado
}
function btnDesencriptar(){
    const textoEncriptado= desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function desencriptar (stringDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}

function copiarTexto(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado esta en la papelera');

}
function verificarTexto(event) {
    const texto = textArea.value;
    
    const regex = /[A-ZÁÉÍÓÚÑáéíóúñàèìòùÀÈÌÒÙäëïöüÄËÏÖÜ]/;

    if (regex.test(texto)) {
        alert("No se permiten letras mayúsculas ni caracteres con acento")
        textArea.value = texto.slice(0, -1);
    }
}