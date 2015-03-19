$(function(){

  var numberSlides = $('.slide').size();
  var slideWidth = $('.slide').width();
  var scrollValue = 0;

  // set the width #tray
  $('#tray').width(numberSlides * slideWidth);

  $('#next').click(function(event){
    event.preventDefault();
    if (scrollValue < numberSlides - 1) {
      scrollValue += 1;
    } else {
      scrollValue = 0;
    }
    var position = scrollValue * slideWidth;
    $('#tray').animate({right: position}, 400);
  });

  $('#prev').click(function(event){
    event.preventDefault();
    if (scrollValue > 0) {
      scrollValue -= 1;
    } else {
      scrollValue = numberSlides - 1;
    }
    var position = scrollValue * slideWidth;
    $('#tray').animate({right: position}, 400);
  });


  $('#prev, #next').hide();

  $('#frame').hover(function(){
    $('#prev, #next').show();
  }, function(){
    $('#prev, #next').hide();
  });

});