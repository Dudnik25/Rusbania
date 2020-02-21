export default class FullHeightFix {
  constructor(selector) {
    this.section = document.querySelector(selector);
    this.addEvent();
  }

  addEvent() {
    window.addEventListener('load', this.resize.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  fixHeight() {
    this.section.style.height = `${window.innerHeight}px`;
  }

  resize() {
    if (window.innerHeight !== this.section.offsetHeight) {
      this.fixHeight();
    }
  }
}
