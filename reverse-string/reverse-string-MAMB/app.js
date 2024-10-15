document.getElementById('generateBtn').addEventListener('click', function() {
  // Obtener el valor del input
  const inputText = document.getElementById('inputText').value;

  // Invertir la cadena
  const reversedText = reverseString(inputText);

  // Mostrar el resultado en el span
  document.getElementById('resultText').innerText = reversedText;
});

function reverseString(str) {
  return str.split('').reverse().join('');
}
