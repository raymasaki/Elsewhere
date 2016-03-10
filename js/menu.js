$(document).ready(function() {

   resetMenu();

   // moves the menu outside the viewport
   $('.menu').css('transform', 'translateY(-' + menuH + 'px)');

   $('.menu-link').mouseover(function() {
      resetMenu();

      $('.menu-link').css('point-events', 'none');

      // moves the info link outside viewport
      $('.menu-link').velocity({
         translateY: '-24px'
      },{
         duration: 250
      });

      // moves menu into viewport
      $('.menu').velocity({
         translateY: [0, -menuH]
      },{
         duration: 300
      });
   });

   $('.menu').mouseleave(function() {
      resetMenu();

      $('.menu-link').velocity({
         translateY: [0, '-24px']
      },{
         duration: 250,
         easing: 'easeOut',
         delay: 150
      });

      $('.menu').velocity({
         translateY: [-menuH, 0]
      },{
         duration: 250
      });

      $('.menu-link').css('point-events', 'all');
   });

   // preloads the menu images
   $.preloadImages = function() {
      for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr("src", arguments[i]);
      }
   };

   $('.ex_link').each(function(index) {

      var curr = index + 1;

      // preload current link image
      $.preloadImages('../thumb/' + curr + '.jpg');

      // grabs the correct image on mouseover
      $(this).mouseover(function() {
         $('.preview').css('background-image', 'url(../thumb/' + curr + '.jpg)');
      });

      $(this).mouseleave(function() {
         $('.preview').css('background-image', 'none');
      });
   });

   // on window resize reset menu values
   $( window ).resize(resetMenu);

});

var menuH = $('.menu').height();

function resetMenu() {
   menuH = $('.menu').height();
   $('.menu').css('transform', 'translateY(-' + menuH + 'px)');
}
