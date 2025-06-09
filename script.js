//your JS code here. If required.

  const soundNames = ['clap', 'boom', 'hihat']; // Add or remove as needed
  const buttonsContainer = document.getElementById('buttons');
  let currentAudio = null;

  soundNames.forEach(sound => {
    const btn = document.createElement('button');
    btn.innerText = sound;
    btn.classList.add('btn');
    btn.addEventListener('click', () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const audio = new Audio(`sounds/${sound}.wav`);
      audio.addEventListener('error', (e) => {
        console.error(`Failed to load sound: sounds/${sound}.wav`, e);
      });

      // Optional: mute during test to avoid autoplay policy issues
      // audio.muted = true;

      audio.play().catch((err) => {
        console.error('Playback failed:', err);
      });

      currentAudio = audio;
    });
    buttonsContainer.appendChild(btn);
  });

  document.querySelector('.stop').addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  });
