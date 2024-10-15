document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const invertButton = document.getElementById('invertButton');
    const resultText = document.getElementById('textoInvertido');

    invertButton.addEventListener('click', () => {
        const texto = inputText.value.trim();
        if (!texto) {
            resultText.textContent = 'Por favor, ingresa un texto válido.';
            return;
        }
        const textoInvertido = invertirTexto(texto);
        resultText.textContent = textoInvertido;
    });
});

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}
