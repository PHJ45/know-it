$( document ).ready(function() {

    $("#recomendation-text").click(function(){
      $(".call-to").fadeOut(500, function(){
        $(".call-to").fadeIn(1000);
      });
    }); 

});