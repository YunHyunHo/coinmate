document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  const subMenuToggle = document.querySelector('.ast-menu-toggle');
  const subMenu = document.querySelector('.sub-menu');

  menuToggle.addEventListener('click', function () {
    mainMenu.classList.toggle('show');
  });

  mainMenu.firstElementChild.children[0].addEventListener('click', () => {
    subMenu.classList.toggle('show');
  })
  console.log(mainMenu.firstElementChild.children[0])
  subMenu.firstElementChild.children[0].addEventListener('click', () => {
    console.log(9032)
  })
});