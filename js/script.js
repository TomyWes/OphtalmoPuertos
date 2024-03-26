function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var overlay = document.querySelector(".overlay");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    var navLinks = document.getElementById("navLinks");
    var overlay = document.querySelector(".overlay");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
}

