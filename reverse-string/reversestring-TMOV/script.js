// script.js

document.getElementById('btnReverso').addEventListener('click', function() {
    var texto = document.getElementById('inputTexto').value;
    var textoReverso = texto.split('').reverse().join('');
    document.getElementById('resultado').textContent = textoReverso;
});

document.getElementById('btnCopiar').addEventListener('click', function() {
    var texto = document.getElementById('resultado').textContent;
    if (texto) {
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado al portapapeles');
        }, function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    } else {
        alert('No hay texto para copiar');
    }
});
