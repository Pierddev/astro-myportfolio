// Responsive Burger Menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBurger = document.getElementById('closeBurger');

burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        burger.classList.toggle('hidden');
});

closeBurger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        burger.classList.toggle('hidden');
});