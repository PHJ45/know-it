$( document ).ready(function() {
  $('.push-info').hide();

  $('span#income').click(function(){
    $('.push-info').hide();
    $('div#income').show();
  });

  $('span#savings').click(function(){
    $('.push-info').hide();
    $('div#savings').show();
  });

  $('span#retirement').click(function(){
    $('.push-info').hide();
    $('div#retirement').show();
  });

});