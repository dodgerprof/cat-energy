'use strict'; 

let menu = document.querySelector('.menu');
let toggle = document.querySelector('.header__toggle');

menu.classList.remove('menu--no-js');

toggle.addEventListener('click', function () {
  menu.classList.toggle('menu--closed');
  toggle.classList.toggle('menu-toggle--open');
});