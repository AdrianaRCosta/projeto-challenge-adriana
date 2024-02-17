function criptografarTexto() {
    var texto = document.getElementById('texto').value;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    texto = texto.replace(/e/g, "enter")
                 .replace(/i/g, "imes")
                 .replace(/a/g, "ai")
                 .replace(/o/g, "ober")
                 .replace(/u/g, "ufat");
    document.getElementById("contTexto").innerHTML = "<b>Texto Criptografado: </b>" + texto;
    document.getElementById("semCont").style.display = "none";
    document.getElementById("comCont").style.display = "flex";    
}

function descriptografarTexto() {
    var texto = document.getElementById('texto').value;
    texto = texto.replace(/enter/g, "e")
                 .replace(/imes/g, "i")
                 .replace(/ai/g, "a")
                 .replace(/ober/g, "o")
                 .replace(/ufat/g, "u");
    document.getElementById("contTexto").innerHTML = "<b>Texto Descriptografado: </b>" + texto;
    document.getElementById("semCont").style.display = "none";
    document.getElementById("comCont").style.display = "flex";   
}

// Função para copiar o texto
function copiarTexto() {
    var texto = document.getElementById("contTexto").innerText;
    texto = texto.replace("Texto Criptografado: ","");
    texto = texto.replace("Texto Descriptografado: ","");
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado!");
    }, function(err) {
        console.error('Falha ao copiar: ', err);
    });
}


