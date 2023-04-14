function encrypt() {
    let text = document.getElementById("text").value;
    let messageTitle = document.getElementById("message-title");
    let paragraph = document.getElementById("paragraph");
    let oracle = document.getElementById("oracle");

    let codedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (text.length != 0) {
        document.getElementById("text").value = codedText;
        messageTitle.textContent = "Texto encriptado con éxito";
        paragraph.textContent = "";
        oracle.src = "./img/Encrypt.jpg";
    } else {
        oracle.src = "./img/oracle.png";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function decrypt() {
    let text = document.getElementById("text").value;
    let messageTitle = document.getElementById("messagetitle");
    let paragraph = document.getElementById("paragraph");
    let oracle = document.getElementById("oracle");

    let codedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (text.length != 0) {
        document.getElementById("text").value = codedText;
        messageTitle.textContent = "Texto desencriptado con éxito";
        paragraph.textContent = "";
        oracle.src = "./img/Decrypt.jpg";
    } else {
        oracle.src = "./img/oracle.png";
        messageTitle.textContent = "Ningún mensaje fue encontrado";
        paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}