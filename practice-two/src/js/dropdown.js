
//Dropdown Navbar
const icon = document.querySelector('.navbar__icon');
const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('.navbar__btn');

icon.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

navbarBtn.addEventListener('click', function () {
  navbar.classList.remove('active');
});


//Dropdown answer
const questionOpen = document.querySelector('.question__btn--open')
const questionClose = document.querySelector('.question__btn--close')
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

questionOpen.addEventListener('click', function () {
  question.classList.toggle('show');
  answer.classList.toggle('show');
  questionOpen.classList.toggle('hide');
  questionClose.classList.toggle('show')
})

questionClose.addEventListener('click', function () {
  question.classList.remove('show');
  answer.classList.remove('show');
  questionOpen.classList.remove('hide');
  questionClose.classList.remove('show');
})


