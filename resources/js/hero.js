//Responsive Navigation 

const menuButton = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menuButton.classList.toggle('is-active')
    menuLink.classList.toggle('active')
}

menuButton.addEventListener('click', mobileMenu);