(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__toggle'),
    closeMenuBtn: document.querySelector('.mobile-menu__button-close'),
    menu: document.querySelector('.backdrop'),
    menuItem: document.querySelector('.mobile-menu_container')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
  function removeMenu(e) {
    if (e.target === refs.menu) {
      refs.menu.classList.add('is-hidden');
    }
  }
})();