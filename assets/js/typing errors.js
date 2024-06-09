document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('typing');
    const text = "Pratham Nagar";
    let index = 0;
    let currentText = "";
    let typingTimeout;

    function type() {
        clearTimeout(typingTimeout);

        if (index >= text.length) {
            setTimeout(reset, 2000); // Reset after the complete name is typed
            return;
        }

        if (Math.random() < 0.1) { // 10% chance to make an error
            introduceError();
        } else {
            typeCorrectCharacter();
        }
    }

    function introduceError() {
        let errorChar = getNearbyCharacter(text.charAt(index));
        currentText += errorChar;
        target.textContent = currentText;
        setTimeout(() => correctError(), 500); // Correct the error quickly
    }

    function correctError() {
        currentText = currentText.slice(0, -1); // Remove the error character
        target.textContent = currentText;
        typeCorrectCharacter(); // Immediately type the correct character
    }

    function typeCorrectCharacter() {
        currentText += text.charAt(index);
        target.textContent = currentText;
        index++;
        typingTimeout = setTimeout(type, 500); // Continue with the next character
    }

    function getNearbyCharacter(correctChar) {
        let offset = Math.random() < 0.5 ? 1 : -1;
        return String.fromCharCode(correctChar.charCodeAt(0) + offset);
    }

    function reset() {
        index = 0;
        currentText = "";
        target.textContent = "";
        setTimeout(type, 1000); // Wait a bit before starting over
    }

    type(); // Start the typing process
});
