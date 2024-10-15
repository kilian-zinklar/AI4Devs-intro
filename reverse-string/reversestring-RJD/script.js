document.getElementById('invertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    const reversedText = textInput.split('').reverse().join('');
    document.getElementById('reversedText').textContent = reversedText;
});