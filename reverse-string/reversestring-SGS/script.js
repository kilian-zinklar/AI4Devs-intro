function reverseString() {
  // Obtener el valor del input
  const input = document.getElementById("input").value;

  // Invertir la cadena
  const reversed = input.split("").reverse().join("");

  // Mostrar el resultado
  document.getElementById("output").textContent = reversed;
}

