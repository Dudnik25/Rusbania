export default class Menu {
  constructor(selector) {
    this.menuOpen = false;
    this.burgerList = document.querySelector(`${selector}__list`);
    this.burgerBtn = document.querySelector(`${selector}__burger-button`);
    this.links = document.querySelectorAll(`a[href*="#"]`);
    this.addEvent();
  }

  addEvent() {
    this.burgerBtn.addEventListener('click', this.toggle.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    for (let link of this.links) {
      link.addEventListener('click', this.close.bind(this));
    }
  }

  close() {
    if (this.menuOpen) {
      this.toggle();
    }
  }

  toggle() {
    this.burgerBtn.classList.toggle('burger-button_active');
    this.burgerList.classList.toggle(`nav-list_active`);
    this.menuOpen = this.menuOpen ? false : true;
  }

  resize(e) {
    if (e.target.innerWidth > 1024 && this.menuOpen) {
      this.toggle();
    }
  }
}