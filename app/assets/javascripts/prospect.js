$( document ).ready(function() {

  $('div.fade-form').fadeTo('slow',0.35);

  $('div.fade-form').mouseenter(function(){
    $(this).fadeTo('fast',1);
  });

  $('div.fade-form').mouseleave(function(){
    $(this).fadeTo('fast',0.5);
  });

  $('.glyphicon-question-sign').click(function(){
    $('.wrapper').css('background-color','rgb(0,158,157)');
  });
    
});