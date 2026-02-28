document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const button = document.getElementById('music-toggle');
    if (!audio || !button) return; // nothing to do if elements are missing

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => console.warn('Playback failed:', err));
            button.textContent = '⏸ Keskeytä kokemus';
        } else {
            audio.pause();
            button.textContent = '▶ Uppoudu äänimaailmaan';
        }
    });
});
