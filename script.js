document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("heroVideo");
    video.playbackRate = 0.8;
});


const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mobileNav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    toggle.querySelector('i').classList.toggle('fa-chevron-down');
    toggle.querySelector('i').classList.toggle('fa-chevron-up');
});

