$(document).ready(function() {

   // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
 });

// parallax efeitos
 $(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',-(scrolled*0.0315)+'rem');
  $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.hero > h1').css('opacity',1-(scrolled*.00175));
};

/*$(window).scroll(function(){
	  if($(this).scrollTop() > 400){
	    $('.hero > h1').css('opacity',0);
    } else {
      $('.hero > h1').css('opacity',1);
    }
	});*/
 

 