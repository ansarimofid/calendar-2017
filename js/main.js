/**
 * Created by ansarimofid on 12/01/17.
 */

$(document).ready(function () {

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
    .addIndicators()
    .addTo(controller);

});