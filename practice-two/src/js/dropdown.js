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


// const questionOpen = document.querySelector('.question__btn--open');
// const questionClose = document.querySelector('.question__btn--close');
// const question = document.querySelector('.question');
// const answer = document.querySelector('.answer');

// console.log(questionOpen)

// questionOpen.addEventListener('click', function () {
//   questionOpen.classList.toggle('q-un-active');
//   questionClose.classList.toggle('q-active');
//   question.classList.toggle('text--primary');
//   question.classList.toggle('text--bold');
//   answer.classList.toggle('a-active')
// });

// questionClose.addEventListener('click', function () {
//   questionOpen.classList.remove('q-un-active');
//   questionClose.classList.remove('q-active');
//   question.classList.remove('text--primary');
//   question.classList.remove('text--bold');
//   answer.classList.remove('a-active')
// });
