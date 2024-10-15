document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button
    document.getElementById('invertirButton').addEventListener('click', function() {
        // Get the input text and invert it
        const inputText = document.getElementById('inputText').value;
        const invertedText = invertirTexto(inputText);
        
        // Display the inverted text in the UI
        document.getElementById('textoInvertido').textContent = invertedText;
    });
});

/**
 * Function to reverse a given string
 * @param {string} text - The text to reverse
 * @returns {string} - The reversed text
 */
function invertirTexto(text) {
    return text.split('').reverse().join('');
}
