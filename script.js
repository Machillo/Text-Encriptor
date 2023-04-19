function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");

    if (typeof texto === 'string') {
        const textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "img/Encrypt.jpg";
        } else {
            muñeco.src = "img/oracle.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    } else {
    swal("Ooops!", "El texto ingresado no es válido", "error");
}
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");

    if (typeof texto === 'string') {
        const textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "img/Decrypt.jpg";
        } else {
            muñeco.src = "img/oracle.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
        }
    } else {
        swal("Ooops!", "El texto ingresado no es válido", "error");
    }
}

const btnCopiar = document.querySelector('#btn-copiar');

btnCopiar.addEventListener('click', () => {
    const textoCifrado = document.getElementById('texto');
    textoCifrado.select();
    document.execCommand('copy');
});