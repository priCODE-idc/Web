const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const close = document.getElementById('close');

burger.addEventListener('click', () => {
    navLinks.style.right = '0';
    navLinks.style.backgroundColor = '#262626';

});

close.addEventListener('click', () => {
    navLinks.style.right = '-100%';
    
});
