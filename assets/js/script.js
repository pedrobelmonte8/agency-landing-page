const mobileMenu = document.querySelector('.hamburguer-icon');
const bottomHeader = document.querySelector('.bottom-header');
const menu = document.querySelector('.nav-mobile');
const menuCorner = document.querySelector('.container__corner-box');
mobileMenu.addEventListener('click', () => {
  
  menu.classList.toggle('open');
  menuCorner.classList.toggle('open');
  bottomHeader.classList.toggle('hidden');
});