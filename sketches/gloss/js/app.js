$(document).ready(function() {

   // $('#menu').load('../menu.html');

   // $('.space').click(function() {
   //    window.location.href = "../1/";
   // });

   // window Width & Height
   var W = $(window).width();
   var H = $(window).height();

   var fontSize = W/6;
   var $word = $('.word, .inner-shadow, .drop-shadow');
   $word.css('font-size', fontSize);

   // window center
   var cX = W / 2;
   var cY = H / 2;
});
