document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menuNav = document.querySelector('.header-menu');

  burgerMenu.addEventListener('click', function (event) {
    menuNav.classList.toggle('show');
  
  });
  
});
