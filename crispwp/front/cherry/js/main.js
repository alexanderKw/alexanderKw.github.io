var touchMenu = document.querySelector('.touch-menu');
var menuLinks = document.querySelectorAll('.header-navigation');
var searchBlock = document.querySelector('.search-block');

touchMenu.onclick = function() {
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.toggle('show-menu');
    searchBlock.classList.toggle('show-search');
  }
};
