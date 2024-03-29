function toggleMenu() {
    const menu = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    const servicesDropdown = document.querySelector(".services-dropdown");

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.textContent = '✖'; 
    } else {
        hamburger.textContent = '☰'; 
    }

    if (servicesDropdown.classList.contains('active')) {
        servicesDropdown.classList.remove('active');
    }
}

function scrollToNextSection() {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
}
