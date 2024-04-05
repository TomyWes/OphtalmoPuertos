function toggleMenu() {
    const menu = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.textContent = 'X';
        body.style.overflow = 'hidden';
    } else {
        hamburger.textContent = '☰';
        body.style.overflow = '';
    }
}

function scrollToNextSection() {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
}