export default class FullHeightFix {
  constructor(selector) {
    this.section = document.querySelector(selector);
    this.screenHeight = window.innerHeight;
    this.sectionHeight = this.section.offsetHeight;
    this.addEvent();
    this.resize();
  }

  addEvent() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  fixHeight() {
    this.section.style.height = `${window.innerHeight}px`;
  }

  resize() {
    this.screenHeight = window.innerHeight;
    this.sectionHeight = this.section.offsetHeight;
    if (this.screenHeight !== this.sectionHeight) {
      this.fixHeight();
    }
  }
}