function reverseString() {
    // Get the input text value
    let text = document.getElementById("inputText").value;
    
    // Reverse the string
    let reversedText = text.split('').reverse().join('');
    
    // Display the reversed string
    document.getElementById("result").innerText = "Reversed string: " + reversedText;

    // Enable the copy button if there's text to copy
    if (reversedText) {
        document.getElementById("copyButton").disabled = false;
    }
}

function copyToClipboard() {
    // Get the reversed string from the result paragraph
    let resultText = document.getElementById("result").innerText.replace("Reversed string: ", "");
    
    // Copy the text to the clipboard
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Reversed string copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
