let buttonBefore = document.querySelector('.example__button--before');
let buttonAfter = document.querySelector('.example__button--after');
let pictureBefore = document.querySelector('.example__picture-fat');
let pictureAfter = document.querySelector('.example__picture-lean');
let indicatorMobile = document.querySelector('.example__toggle-indicator');
let range = document.querySelector('.example__range');

range.addEventListener('input', function () {
  pictureBefore.style.width = (100 - range.value) + '%';
  pictureAfter.style.width = range.value + '%';
});

buttonBefore.addEventListener('click', function () {
  pictureBefore.style.width = '100%';
  pictureAfter.style.width = '0';
  indicatorMobile.style.marginLeft = '0';
  range.value = 0;
});
buttonAfter.addEventListener('click', function () {
  pictureBefore.style.width = '0';
  pictureAfter.style.width = '100%';
  indicatorMobile.style.marginLeft = 'auto';
  range.value = 100;
});