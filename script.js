// document.getElementById('hamburger').addEventListener('click', function() {
//     document.getElementById('nav-links').classList.toggle('active');
// });

  // JavaScript to hide the text box on scroll and show it when scrolled back to the top
  window.addEventListener('scroll', function() {
    const textBox = document.getElementById('hero-text');
    if (window.scrollY > 0) {
        textBox.style.opacity = '0';
        textBox.style.visibility = 'hidden';
    } else {
        textBox.style.opacity = '1';
        textBox.style.visibility = 'visible';
    }
});

// Add JavaScript to Toggle the Menu and Icon

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the active class on both hamburger and nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Change the icon between hamburger and cross
    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '&#10005;'; // Cross (✖)
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger (☰)
    }
}

// Add JavaScript for Scroll Detection


document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Adjust the scrollY value based on when you want the color to change
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// Add JavaScript for Brevo - replace later

    

