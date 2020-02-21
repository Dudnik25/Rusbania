export default class Header {
  constructor(selector) {
    this.name = selector.replace(/[.#]/g, '');
    this.header = document.querySelector(selector);
    this.changeBackground();
    this.addEvent();
  }

  addEvent() {
    window.addEventListener('scroll', this.changeBackground.bind(this));
  }

  changeBackground() {
    if (window.pageYOffset > 0) {
      this.header.classList.add(`${this.name}_black`);
    } else {
      this.header.classList.remove(`${this.name}_black`);
    }
  }
}
