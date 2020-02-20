export default class Preloader {
  constructor(selector) {
    this.name = selector.replace(/[\.,\#]/g, '');
    this.preloader = document.querySelector(selector);
    this.addEvent();
  }

  addEvent() {
    window.addEventListener('load', this.close.bind(this));
  }

  close() {
    this.preloader.classList.add(`${this.name}_animation`);
    setTimeout(() => {
      this.preloader.classList.add(`${this.name}_hide`);
    }, 1000);
  }
}