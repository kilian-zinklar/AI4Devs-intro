document.getElementById('invertButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const invertedText = textInput.split('').reverse().join('');
    document.getElementById('invertedText').textContent = invertedText;
  });