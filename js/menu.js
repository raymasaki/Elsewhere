$(document).ready(function() {

   // $('#menu').load('menu.html');

   var menuH = $('.menu').height();

   $('.menu').css('transform', 'translateY(-' + menuH + 'px)');

   $('.menu-link').mouseover(function() {
      $('.menu-link').velocity({
         translateY: '-24px'
      },{
         duration: 250
      });

      $('.menu').velocity({
         translateY: [0, -menuH]
      },{
         duration: 300
      });
   });

   $('.menu').mouseleave(function() {
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
   });

   var curr = index + 1;

   $('.ex_link').each(function(index) {
      // debugger;

      $(this).mouseover(function() {
         $('.preview').css('background-image', 'url(../thumb/' + curr + '.jpg)');
      });

      $(this).mouseleave(function() {
         $('.preview').css('background-image', 'none');
      });
   });

});
