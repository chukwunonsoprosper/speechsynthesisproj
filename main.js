const startSpeechSynthesis = document.querySelector('button');


startSpeechSynthesis.addEventListener('click', () => {
    const word = document.querySelector('input').value;
    const speakText = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(speakText)

})