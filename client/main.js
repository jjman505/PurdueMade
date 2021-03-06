/* PAGE NAVIGATION */
function initNav() {
  var scrollSpeed = 750;
  var scrollOffset = 50;
  var easing = 'swing';

  $('ul.nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: scrollSpeed,
    scrollOffset: scrollOffset,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: easing
  });

  $('.nav-external').click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $($(this).attr("href")).offset().top - scrollOffset
    }, scrollSpeed, easing);
  });
}

/* SORTING PORTFOLIO */
function initPortfolio() {
  var portfolio = $('#gallery');
  var items = $('.items', portfolio);
  var filters = $('.filters li a', portfolio);

  items.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    transitionDuration: '0.7s'
  });

  filters.click(function(){
    var el = $(this);
    filters.removeClass('active');
    el.addClass('active');
    var selector = el.attr('data-filter');
    items.isotope({ filter: selector });
    return false;
  });
}

/* POPUP GALLERY */
function initPopup() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Ryan McGuire</small>';
      }
    }
  });
}

/* SCROLL TO TOP */
function initScrollTop() {
  var offset = 100;
  var duration = 500;
  jQuery(window).scroll(function() {
    if(jQuery(this).scrollTop() > offset) {
      jQuery('.scroll-to-top').fadeIn(duration);
    } else {
      jQuery('.scroll-to-top').fadeOut(duration);
    }
  });
  jQuery('.scroll-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  });
}

Template.layout.rendered = function () {
  "use strict";

  initNav();
  initPortfolio();
  initPopup();
  initScrollTop();
  $('.main').attr('hidden', false);
};
