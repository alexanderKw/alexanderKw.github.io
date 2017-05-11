(function() {
  'use strict';
  const sections = document.querySelectorAll('.section');
  const navList = document.querySelector('#nav-list');
  const pointer = document.querySelector('.pointer');

  function getScroll() {
    sections.forEach(el => {
      let top = el.offsetTop - 300;
      let bottom = top + el.clientHeight;
      let scroll = window.pageYOffset;
      let id = el.getAttribute('id');
      if (scroll > top && scroll < bottom) {
        for (let item of navList.children) {
          item.classList.remove('active');
          if (item.firstChild.getAttribute('href') == `#${id}`) {
            item.classList.add('active');
            pointer.style.left = item.offsetLeft + item.offsetWidth / 2 + 'px';
          }
        }
      }
    });
  }

  window.addEventListener('scroll', getScroll);

  navList.addEventListener('click', e => {
    if (e.target.getAttribute('href') == `#${id}`) {
      window.scrollTo(0, el.offsetTop - 150);
    }
  });

  sections.forEach(s => {
    s.style.height = window.innerHeight + 'px';
    s.style.minHeight = 800 + 'px';
  });
})();
