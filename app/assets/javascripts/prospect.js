$( document ).ready(function() {

  //Form Fade

  $('div.fade-form-first').fadeTo(1000,0.4);
  
  $('div.fade-form').mouseenter(function(){
    $(this).fadeTo('fast',1);
  });

  $('div.fade-form').mouseleave(function(){
    $(this).fadeTo('fast',0.4);
  });

  //Menu Open

  $('.glyphicon-question-sign').click(function(){
    $('.wrapper').css('background-color','rgb(0,158,157)');
  });
    
});