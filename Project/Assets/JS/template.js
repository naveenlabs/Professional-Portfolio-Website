// Inject Header and Footer Content
// -------------------------------

// Define header content
const headerContent = `
<header>
    <a href="index.html" class="logo"> <img src="Assets/Images/logo.png" alt="Logo"> </a>

    <ul class="menulist">
        <a href="index.html">Home</a>
        <a href="about.html">About Me</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
    </ul>

    <div class="menu-right">
        <a href="contact.html" class="menu-btn">
            <span>Let's Talk</span>
            <i class="ri-message-2-line" aria-label="Contact Icon"></i>
        </a>
        <div class="bx bx-menu" id="menu-icon" aria-label="Menu Toggle Icon"></div>
    </div>
</header>
`;

// Define footer content
const footerContent = `
<footer>
    <div class="social-icons">
 <a href="https://dribbble.com" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
    <i class="ri-dribbble-line"></i>
</a>
<a href="https://x.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
    <i class="ri-twitter-x-fill"></i>
</a>
<a href="https://www.instagram.com/accounts/login/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <i class="ri-instagram-line"></i>
</a>
<a href="https://en-gb.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <i class="ri-facebook-fill"></i>
</a>
<a href="https://www.pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
    <i class="ri-pinterest-fill"></i>
</a>

    </div>

    <ul class="menulist-footer">
        <a href="index.html">Home</a>
        <a href="about.html">About Me</a>
        <a href="services.html">Services</a>
        <a href="projects.html">Projects</a>
    </ul>
    
    <p>Leo Das © 2024 | All Rights Reserved</p>
</footer>
`;

// Inject the header and footer content into the placeholders
document.getElementById("header-placeholder").innerHTML = headerContent;
document.getElementById("footer-placeholder").innerHTML = footerContent;

// Menu Toggle Functionality
// -------------------------

// Select the header, menu icon, and menu list elements
const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon"); // Corrected selector
let menulist = document.querySelector(".menulist");

// Toggle menu icon and list visibility on click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menulist.classList.toggle("open");
};

// Close menu when the window is scrolled
window.onscroll = () => {
  // Ensures menu is closed to avoid overlap or visibility issues on scroll
  menu.classList.remove("bx-x");
  menulist.classList.remove("open");
};
