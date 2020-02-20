const setYear = (selector) => {
  const year = new Date().getFullYear();
  const element = document.querySelector(selector);
  element.innerText = year;
};

export default setYear;