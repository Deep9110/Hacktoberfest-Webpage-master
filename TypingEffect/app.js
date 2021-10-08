const texts = [
    'websites',
    'desktop apps',
    'android apps',
    'programs'
];

let charIndex = 0;
let textIndex = 0;
let currentText = "";
let letters = "";

(function typingEffect() {
    currentText = texts[textIndex]
    letters = currentText.slice(0, ++charIndex)
 
    document.querySelector(".typing").textContent = letters;
    if (letters.length == currentText.length) {
        textIndex = (1 + textIndex) % texts.length
        charIndex = 0
    }
    let timeout = 2500/currentText.length
    setTimeout(typingEffect,timeout)
}());
