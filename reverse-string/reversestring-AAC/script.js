function invertirTexto() {
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        alert('Por favor, escribe algo para invertir.');
        return;
    }

    const textoInvertido = inputText.split('').reverse().join('');
    const resultado = document.getElementById('textoInvertido');

    resultado.textContent = textoInvertido;

    // Aplicar una animación sencilla al texto invertido
    resultado.style.transition = 'transform 0.5s';
    resultado.style.transform = 'rotateY(360deg)';
}

function limpiarTexto() {
    document.getElementById('inputText').value = '';
    document.getElementById('textoInvertido').textContent = '';
    document.getElementById('contador').textContent = '0';
}

function contarCaracteres() {
    const inputLength = document.getElementById('inputText').value.length;
    document.getElementById('contador').textContent = inputLength;
}
