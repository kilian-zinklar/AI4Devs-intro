// Select elements
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const reverseBtn = document.getElementById('reverseBtn');
const clearBtn = document.getElementById('clearBtn');
const reversedTextContainer = document.getElementById('reversedTextContainer');
const reversedText = document.getElementById('reversedText');
const clipboardBtn = document.getElementById('clipboardBtn');
const copyMessage = document.getElementById('copyMessage');

// Updates character counter and button states
function updateCharCount() {
  const textLength = textInput.value.length;
  charCount.textContent = `${textLength}/100`;
  const hasText = textLength > 0;
  reverseBtn.disabled = !hasText;
  clearBtn.disabled = !hasText;
  hideReversedText();
}

// Reverses the text in the input
function reverseText() {
  const text = textInput.value;
  const reversed = text.split('').reverse().join('');
  reversedText.textContent = reversed;
  reversedTextContainer.classList.remove('hidden');
}

// Clears the text from input and hides reversed text
function clearText() {
  textInput.value = '';
  updateCharCount();
}

// Copies reversed text to clipboard and shows confirmation message
function copyToClipboard() {
  navigator.clipboard.writeText(reversedText.textContent).then(() => {
    clipboardBtn.classList.add('hidden');
    copyMessage.classList.remove('hidden');
    setTimeout(() => {
      clipboardBtn.classList.remove('hidden');
      copyMessage.classList.add('hidden');
    }, 2000);
  });
}

// Hides the reversed text container and clipboard message
function hideReversedText() {
  reversedTextContainer.classList.add('hidden');
  copyMessage.classList.add('hidden');
}
