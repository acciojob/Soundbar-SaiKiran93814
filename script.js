//your JS code here. If required.
const buttonsContainer = document.getElementById('buttons');
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio
    const soundFile = button.getAttribute('data-sound');
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
