document.getElementById("reverseBtn").addEventListener("click", function () {
  const textInput = document.getElementById("textInput").value
  const reversedText = textInput.split("").reverse().join("")

  document.getElementById("resultText").innerText = reversedText
  document.getElementById("resultContainer").classList.remove("hidden")
})

document.getElementById("copyBtn").addEventListener("click", function () {
  const resultText = document.getElementById("resultText").innerText
  navigator.clipboard.writeText(resultText).then(function () {
    alert("Texto copiado al portapapeles")
  })
})
