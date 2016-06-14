//JQUERY Function for smooth scrolling
$(document).ready(function(){
  $('.navbar a').on('click',function(e){
    e.preventDefault();
    $("#about-section").css("margin-top","80px");
    $('#portfolio-section').css('margin-top',"80px");
    $('#contact-section').css('padding-top',"60px");

    var hash=this.hash;
    
    $('html, body').animate({ 
      scrollTop:  $(hash).offset().top }, 1000);
  });
});