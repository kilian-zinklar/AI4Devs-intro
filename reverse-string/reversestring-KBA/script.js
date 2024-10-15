// Seleccionar elementos del DOM
const inputText = document.getElementById("inputText");
const invertButton = document.getElementById("invertButton");
const resultDiv = document.getElementById("result");

// Función para invertir el texto
function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}

// Evento click para el botón
invertButton.addEventListener("click", () => {
  const texto = inputText.value;
  const textoInvertido = invertirTexto(texto);
  resultDiv.textContent = textoInvertido;
});
