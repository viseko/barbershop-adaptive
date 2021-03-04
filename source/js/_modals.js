const loginBtn = document.querySelector('.user-list__login');
const modalCloseBtn = document.querySelectorAll('.modal__close');
const modalWrapper = document.querySelector('.modal__wrapper');
const modalLogin = document.querySelector('.modal__login');

if (loginBtn) loginBtn.addEventListener("click", function(e) {
  e.preventDefault();

  openModalLogin();
});

for (let i = 0; i < modalCloseBtn.length; i++) {
  modalCloseBtn[i].addEventListener("click", closeModal);
}

modalWrapper.addEventListener("click", closeModal);

function closeModal() {
  let modals = document.querySelectorAll('.modal--open');
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('modal--open');
  }
}

function openModal(modal) {
  modalWrapper.classList.add('modal--open');
  modal.classList.add('modal--open');
}

function openModalLogin() {
  openModal(modalLogin);
}