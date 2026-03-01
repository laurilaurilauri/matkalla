// script is loaded at the end of the body, so the elements already exist
const audio = document.getElementById('background-music');
const button = document.getElementById('music-toggle');
if (audio && button) {
    let pulseInterval = null;

    function createPulse() {
        const ripple = document.querySelector('.story-image .ripple');
        if (!ripple) return;
        const pulse = document.createElement('div');
        pulse.className = 'pulse';
        // random position inside the container
        pulse.style.left = Math.random() * 100 + '%';
        pulse.style.top = Math.random() * 100 + '%';
        ripple.appendChild(pulse);
        pulse.addEventListener('animationend', () => pulse.remove());
    }

    button.addEventListener('click', () => {
        console.log('music button clicked');
        const imageContainer = document.querySelector('.story-image');
        if (audio.paused) {
            audio.play().catch(err => console.warn('Playback failed:', err));
            button.textContent = 'Keskeytä kokemus';
            if (imageContainer) imageContainer.classList.add('playing');
            // start generating pulses every 200ms
            pulseInterval = setInterval(createPulse, 200);
        } else {
            audio.pause();
            button.textContent = 'Uppoudu äänimaailmaan';
            if (imageContainer) imageContainer.classList.remove('playing');
            if (pulseInterval) {
                clearInterval(pulseInterval);
                pulseInterval = null;
            }
        }
    });
} else {
    console.warn('audio or button element not found');
}

/* Fix for clunky page load out */
/* Back link functionality: only go back if there's a valid history entry and the referrer is from the same site.*/
const backLink = document.querySelector('.back-link');
if (backLink) {
    backLink.addEventListener('click', (e) => {
        if (window.history.length > 1 && document.referrer.includes(window.location.host)) {
            e.preventDefault();
            window.history.back();
        }
    });
}
