//slideshow
//Initialize slick
$(document).ready(function() {
  $('.socialMedia').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true
  });
});

//Changes height of bar to circle height plus 50 every .1s
function barHeight() {
$( "#bar" ).each(function() {
  $( "#bar" ).height($("#c1").height() + 50);
  });
  window.setTimeout(barHeight, 100);
}

barHeight();

//Reveal info on load
$( "#bar" ).hover(function() {
  $( "#barInfo" ).fadeIn( "slow" );
});

//Reveal info when circle is hovered over
$("#c1inner").hover(function() {
  $( "#c1info" ).fadeIn( "slow" );
});

$("#c2inner").hover(function() {
  $( "#c2info" ).fadeIn( "slow" );
});

$("#c3inner").hover(function() {
  $( "#c3info" ).fadeIn( "slow" );
});
