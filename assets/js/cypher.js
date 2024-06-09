document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('cypherText');
    let text = target.textContent.trim(); // Read text content from the HTML element
    let randomText = '';
    let intervalId;
    let step = 0;

    // Generate a random character from the ASCII range
    function getRandomChar() {
        return String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
    }

    // Initialize random text with the same length as the target text
    function initRandomText() {
        for (let i = 0; i < text.length; i++) {
            randomText += getRandomChar();
        }
        target.textContent = randomText;
    }

    // Update the text to slowly reveal the true message
    function revealText() {
        randomText = randomText.split('').map((char, idx) => {
            // Gradually fix each character to reveal the truth
            return step > idx ? text.charAt(idx) : getRandomChar();
        }).join('');
        
        target.textContent = randomText;
        step++; // Move one step further in the reveal

        if (step > text.length) {
            clearInterval(intervalId); // Stop when the entire text is revealed
        }
    }

    initRandomText();
    intervalId = setInterval(revealText, 80); // Increase interval for slower deciphering
});
