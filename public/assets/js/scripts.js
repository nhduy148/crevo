$(function () {
  'use strict';

  $(function () {
    var equalWidth = $('.clients-sa .item').outerWidth();

    $('.clients-sa .item').css({
      height: equalWidth,
    });
  });

  var testim = new Swiper('.testimonials-sa .testim-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: '.testimonials-sa .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

// jquery document ready
$(document).ready(function () {
  const navLink = $('.nav-link');

  navLink.each(function () {
    const href = $(this).attr('href').replace('/', '');
    const isHomePage = href === '' && window.location.pathname === '/';
    if (window.location.pathname.includes(href)) {
      navLink.removeClass('active');
      if (isHomePage) {
        $('.nav-link[href="/"]').addClass('active');
      } else {
        $(this).addClass('active');
      }
    }
  });

  navLink.click(function () {
    navLink.removeClass('active');
    $(this).addClass('active');
  });
});

// jquery wait for all assets loaded
$(window).on('load', function () {
  setTimeout(() => {
    var width = $(window).width();
    if (width > 991) {
      gsap.registerPlugin(ScrollTrigger);
      let cards = gsap.utils.toArray('.cards .card-item');

      console.log({ cards });

      let stickDistance = 0;

      let lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'bottom bottom',
      });

      cards.forEach((card, index) => {
        var scale = 1 - (cards.length - index) * 0.025;
        let scaleDown = gsap.to(card, {
          scale: scale,
          'transform-origin':
            '"50% ' + (lastCardST.start + stickDistance) + '"',
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'center center',
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: 'none',
          animation: scaleDown,
          toggleActions: 'restart none none reverse',
        });
      });
    }
  }, 1000);
});
