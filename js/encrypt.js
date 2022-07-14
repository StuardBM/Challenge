const inputText = document.querySelector(".textarea-text");
const outputText = document.querySelector(".output-text");


function btnEncriptar(){

    const textoEncriptado = encriptar(inputText.value);
    outputText.value = textoEncriptado;

}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    document.getElementById("munieco").style.display = "none";
    document.getElementById("text-not-found").style.display = "none";
    document.getElementById("text-put").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

    return stringEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputText.value);
    outputText.value = textoDesencriptado;
    console.log(textoDesencriptado);
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let j=0; j<matrizCodigo.length; j++){
        if(stringDesencriptar.includes(matrizCodigo[j][0])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[j][0],matrizCodigo[j][1]);
        }
    }

    document.getElementById("munieco").style.display = "none";
    document.getElementById("text-not-found").style.display = "none";
    document.getElementById("text-put").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

    return stringDesencriptar;
}

function btnCopy(){
    var content = document.getElementById("text-out");
    content.select();
    document.execCommand('copy');
    alert("Copied");
}
