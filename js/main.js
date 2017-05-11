'use strict';

(function () {
  'use strict';

  var sections = document.querySelectorAll('.section');
  var navList = document.querySelector('#nav-list');
  var pointer = document.querySelector('.pointer');

  function getScroll() {
    sections.forEach(function (el) {
      var top = el.offsetTop - 300;
      var bottom = top + el.clientHeight;
      var scroll = window.pageYOffset;
      var id = el.getAttribute('id');
      if (scroll > top && scroll < bottom) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = navList.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            item.classList.remove('active');
            if (item.firstChild.getAttribute('href') == '#' + id) {
              item.classList.add('active');
              pointer.style.left = item.offsetLeft + item.offsetWidth / 2 + 'px';
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    });
  }

  window.addEventListener('scroll', getScroll);

  navList.addEventListener('click', function (e) {
    if (e.target.getAttribute('href') == '#' + id) {
      window.scrollTo(0, el.offsetTop - 150);
    }
  });

  sections.forEach(function (s) {
    s.style.height = window.innerHeight + 'px';
    s.style.minHeight = 800 + 'px';
  });
})();
