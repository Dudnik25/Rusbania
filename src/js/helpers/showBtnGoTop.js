const showBtnGoTop = selector => {
  const className = selector.replace(/[.#]/, '');
  const btn = document.querySelector(selector);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight / 2) {
      btn.classList.add(`${className}_show`);
    } else {
      btn.classList.remove(`${className}_show`);
    }
  });
};

export default showBtnGoTop;
