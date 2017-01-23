/**
 * Created by ansarimofid on 12/01/17.
 */

$(document).ready(function () {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();


  var introPage = new ScrollMagic.Scene({
    triggerElement:'#id_intro',
    duration:'30%',
    triggerHook:0
  })
    .setPin('#id_intro',{pushFollowers:false})
    .addTo(controller);

  var introPage2 = new ScrollMagic.Scene({
    triggerElement:'#id_page1',
    triggerHook:0.35
  })
    .setPin('#id_intro',{pushFollowers:false})
    .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    triggerElement:'#id_page1 h1',
    duration:'50%',
    triggerHook:0.75
  })
    .setClassToggle('#id_page1','effect')
    .addTo(controller);
  
  $('.month:not(:last-child)').each(function () {
    var monthScene = new ScrollMagic.Scene({
      triggerElement:this,
      duration:'67%',
      triggerHook:-0.3
    })
      .setPin(this,{pushFollowers:false})
      .addTo(controller);
  });

  $('.month').each(function () {

    var monthScene = new ScrollMagic.Scene({
      triggerElement:this,
      duration:'147%',
      triggerHook:0.65
    })
      .setClassToggle(this,'in-view-effect')
      .addTo(controller);
  });


  $('.nav-icon-wrapper').click(function (e) {
    var $this = $(this);

    e.preventDefault();
    $this.toggleClass('nav-clicked');
    $this.parent().toggleClass('nav--show')
  });

  $('.share-btn').click(function (e) {
    e.preventDefault();
    $(this).closest('.main-wrapper').addClass('share-page--show');
  });

  $('.share-page .close-icon').click(function (e) {
    e.preventDefault();
    $(this).closest('.main-wrapper').removeClass('share-page--show');
  })

});