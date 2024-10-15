function invertirTexto() {
    var texto = document.getElementById('inputText').value;
    var textoInvertido = texto.split('').reverse().join('');
    document.getElementById('textoInvertido').textContent = textoInvertido;
    document.getElementById('copyButton').disabled = false; // Habilitar el botón de copiar
}

function copiarTexto() {
    var textoInvertido = document.getElementById('textoInvertido').textContent;
    navigator.clipboard.writeText(textoInvertido).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}
