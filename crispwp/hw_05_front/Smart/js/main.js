'use strict';

$(document).ready(function() {
  initChangeHeading();
  initHeaderSticky();
  initMainMenuPopup();
  initAnchorLinks();
  initTabServices();
  initTeamBlocksHover();
  initReviewsCarousel();
  initReviewQuotes();
  initPartnersCarousel();

  /**
   * Change heading first word
   */
  function initChangeHeading() {
    $('.heading').each(function() {
      var $p = $(this);
      $p.html(
        $p
          .html()
          .replace(/^(\w+)/, '<span class="heading-first-word">$1</span>')
      );
    });
  }

  /**
   * Header sticky
   */
  function initHeaderSticky() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $('.header').addClass('sticky-header');
        $('.main').css({ 'padding-top': $('.header').height() });
      } else {
        $('.header').removeClass('sticky-header');
        $('.main').css({ 'padding-top': '' });
      }
    });
  }

  /**
   * Main menu popup
   */
  function initMainMenuPopup() {
    $('.touch-menu-ico').magnificPopup({
      type: 'inline',
      src: '#main-menu',
      mainClass: 'main-menu-zoom-in',
      removalDelay: 150
    });
  }

  /**
   * Anchor links
   */
  function initAnchorLinks() {
    $('#main-menu').on('click', 'a', function(e) {
      e.preventDefault();

      var id = $(this).attr('href');
      var top;

      if ($('.sticky-header')) {
        top = $(id).offset().top - $('.header').height();
      } else {
        top = $(id).offset().top;
      }

      $('body,html').animate({ scrollTop: top }, 1000);

      $.magnificPopup.proto.close.call(this);
    });
  }

  /**
   * Tabs services block
   */
  function initTabServices() {
    $('.services-block').on('click', '.nav-tab-item', function() {
      var tabs = $('.services-block .nav-tab-item');
      var cont = $('.services-block .tab-item');

      tabs.removeClass('active');
      cont.removeClass('active');

      $(this).addClass('active');
      cont.eq($(this).index()).addClass('active');

      return false;
    });
  }

  /**
   * Team block hover
   */
  function initTeamBlocksHover() {
    $('.wr-img, .developer-short-descr').hover(
      function() {
        $(this)
          .parents('.team-item')
          .addClass('active');
      },
      function() {
        $(this)
          .parents('.team-item')
          .removeClass('active');
      }
    );
  }

  /**
   * Reviews block carousel
   */
  function initReviewsCarousel() {
    $('#reviews-carousel').owlCarousel({
      responsive: {
        320: {
          items: 1
        },
        860: {
          items: 2
        }
      },
      nav: true,
      dots: true,
      dotsEach: true,
      loop: true,
      navClass: ['owl-prev review-prev', 'owl-next review-next'],
      navText: [
        '<i class="icon-left-arrow"></i>',
        '<i class="icon-right-arrow"></i>'
      ],
      itemClass: 'owl-item review-item',
      navContainerClass: 'owl-nav review-nav',
      dotsClass: 'owl-dots review-dots',
      dotClass: 'owl-dot review-dot'
    });
  }

  /**
   * Added quotes to reviews content
   */
  function initReviewQuotes() {
    var openQuote = '<span class="reviews-open-quote">&#10077;</span>';
    $('.review-text')
      .find('> :first-child')
      .prepend(openQuote);

    var closeQuote = '<span class="reviews-close-quote">&#10078;</span>';
    $('.review-text')
      .find('> :last-child')
      .append(closeQuote);
  }

  /**
   * Partners section carousel
   */
  function carouselWidth() {
    var itemWidth = 0;
    $('.wr-partner-item').each(function() {
      itemWidth += $(this).width();
    });
    return itemWidth;
  }

  function resizeCarousel() {
    if ($(window).width() <= carouselWidth()) {
      $('#partners-carousel').owlCarousel({
        autoWidth: true
      });
    } else {
      $('#partners-carousel').trigger('destroy.owl.carousel');
    }
  }

  function initPartnersCarousel() {
    resizeCarousel();

    $(window).resize(function() {
      resizeCarousel();
    });
  }
});
