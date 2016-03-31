$(document).ready(function() {

   $('#menu').load('../menu.html');

   // puts the focus on the input box
   var input = $('#input');
   input.focus();

   $('#input').bind('focusout', function(e) {
      e.preventDefault();
      $(this).focus();
   });

   $('#input').keypress(function(event) {
      $('.start').addClass('fade');
   });

   $('#input').keyup(function(event) {

      if (moveF === true && placement < 9) {
         placement++;
      } else if (placement === 9) {
         moveF = false;
         placement--;
         // console.log(moveF);
      } else if (moveF === false && placement > 0) {
         placement--;
      } else if (placement === 0) {
         moveF = true;
         placement++;
         // console.log(moveF);
      }

      // console.log(placement, (placement % 10 * 10) + '%');

      createLetter();
   });

});

var W = $(window).width();
var fontSize = W / 16;
var placement = 0;
var moveF = true;

function createLetter() {

   var $space = $('.space');

   for (var i = 0; i < 15; i++) {
      var $letter = $('<div class="letter">');
      var shading = -5 - i * 1.5;
      var gray = 255 - (i * 17);
      var z = 15 - i;

      $letter.css({
         'font-size': fontSize,
         'left': (placement * 10) + '%',
         'top': shading + '%',
         'color': 'rgb(' + gray + ',' + gray + ',' + gray + ')',
         'z-index': z
      });

      if ($('#input').val().length > 1) {
         $letter.append($('#input').val()[0]);
      } else {
         $letter.append($('#input').val());
      }

      $space.append($letter);

      $letter.velocity({
         translateY: ['140vh', '-5%']
      }, {
         duration: 900,
         easing: 'easeInSine'
      });
   }

   $('#input').val('');
}
