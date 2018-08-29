import $ from 'jquery';
import slick from 'slick-carousel';
import magnificPopup from 'magnific-popup';
import Headhesive from 'headhesive';

$(function() {
  const header = new Headhesive('.header', {
    offset: 700
  });

  const heroSlider = $('.hero__slider');

  $('.menu-btn').on('click', function() {
    $('.nav').addClass('nav--active');
    $('.headhessive').hide();
  })

  $('.nav__close').on('click', function() {
    $('.nav').removeClass('nav--active');
    $('.headhessive').show();
  })

  if (heroSlider.length) {
    heroSlider.slick({
      arrows: false,
      dots: true,
    });
  }

  const storyBtn = $('.story__btn');
  if (storyBtn.length) {
    storyBtn.magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  const gallery = $('.works');

  if (gallery.length) {
    gallery.magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
    
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
  }

});
