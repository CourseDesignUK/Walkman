const playBtn = document.getElementById('play-btn');
const led = document.createElement('div');
led.className = 'led';
document.querySelector('.walkman-body').appendChild(led);

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        led.classList.add('active');
        // Start spinning logic here...
    } else {
        audio.pause();
        led.classList.remove('active');
        // Stop spinning logic here...
    }
});
