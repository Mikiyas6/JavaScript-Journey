'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const hidden = document.querySelector('.hidden');

const opensModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closesModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', opensModal);
}
closeModal.addEventListener('click', closesModal);

overlay.addEventListener('click', closesModal);

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closesModal();
  }
});
