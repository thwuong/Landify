const openMenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.header__menu');
const closeMenu = document.querySelector(' .mobile-close ');
function start(){
    fadeMenu();
}
function fadeMenu(){
    openMenu.addEventListener('click',function(){
        menu.classList.toggle('open');
        // menu.style.animation =  `fade ${0.4}s ease-in-out`;
    })
    closeMenu.addEventListener('click',function(){
        menu.classList.toggle('open')
    })
    
}

start();