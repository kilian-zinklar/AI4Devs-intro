document.addEventListener('DOMContentLoaded', () => {
    const inputString = document.getElementById('inputString');
    const reverseBtn = document.getElementById('reverseBtn');
    const outputString = document.getElementById('outputString');

    reverseBtn.addEventListener('click', () => {
        const input = inputString.value;
        const reversed = reverseString(input);
        outputString.textContent = reversed;
    });

    inputString.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            reverseBtn.click();
        }
    });

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
});
