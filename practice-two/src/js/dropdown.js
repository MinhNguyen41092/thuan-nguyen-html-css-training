const icon = document.querySelector('.navbar__icon');
const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('.navbar__btn');

icon.addEventListener('click', function () {
  navbar.classList.remove('non-active');
  navbar.classList.toggle('active');
});

navbarBtn.addEventListener('click', function () {
  navbar.classList.remove('active');
});
