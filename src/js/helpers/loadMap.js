const loadMap = function () {
  const map = document.querySelector('.map__iframe');
  let mapTop = map.getBoundingClientRect().top;

  const load = () => {
    mapTop = map.getBoundingClientRect().top - window.innerHeight;

    if (mapTop < 200) {
      map.src = 'https://www.google.com/maps/d/u/0/embed?mid=1lFS-Rb9TiVyT6ShIZqxrCmhBnLanemD9';
      window.removeEventListener('scroll', load);
      window.removeEventListener('resize', load);
    }
  };

  load();
  window.addEventListener('scroll', load);
  window.addEventListener('resize', load);
};

export default loadMap;