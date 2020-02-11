$(document).ready(function(){
    $("#menuActivate").on("click", function(){
      $("#arrow").toggleClass("rotate");
      $(".nav-menu").toggle();
    });   
});