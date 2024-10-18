// Main Navigation Toggle
const button = document.getElementById('hamMenu');
const links = document.getElementById('nav-buttons');

button.addEventListener('click', function() {
    links.classList.toggle('toggled');
}  );

