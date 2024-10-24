// Main Navigation Toggle
const button = document.getElementById('hamMenu');
const links = document.getElementById('nav-buttons');

button.addEventListener('click', function() {
    links.classList.toggle('toggled');
}  );

// Attractions Page Pop Up

// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.popup-btn');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-btn');
  
    // Show the corresponding pop-up when a button is clicked
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const popupId = button.dataset.popup;
        document.getElementById(popupId).style.display = 'block';
      });
    });
  
    // Close the pop-up when the close button is clicked
    closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        closeButton.closest('.popup').style.display = 'none';
      });
    });
  
    // Close the pop-up when clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
      }
    });
  });
  
  
