$(document).ready(function() {

   $('#menu').load('../menu.html');

   // puts the focus on the input box
   var input = $('#input');
   input.focus();

   // keeps focus on input box
   $('#input').bind('focusout', function(e) {
      e.preventDefault();
      $(this).focus();
   });

   // when first key is pressed hard start text
   $('#input').keypress(function(event) {
      $('.start').addClass('fade');
   });

   $('#input').keyup(function(event) {

      // each letter moves across the screen
      if (moveF === true && placement < 9) {
         placement++;
      } else if (placement === 9) {
         moveF = false;
         placement--;
      } else if (moveF === false && placement > 0) {
         placement--;
      } else if (placement === 0) {
         moveF = true;
         placement++;
      }

      createLetter();
   });

   $('.space').click(function() {
      window.location.href = "../1/";
   });

});

var W = $(window).width();
var fontSize = W / 16;
var placement = 0;
var moveF = true;

function createLetter() {

   var $space = $('.space');

   var repeat = 15;

   for (var i = 0; i < repeat; i++) {
      var $letter = $('<div class="letter">');
      var shading = -5 - i * 1.5;
      var gray = 255 - (i * 255/repeat);
      var z = repeat - i;

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
         translateY: ['140vh', '-5vh']
      }, {
         duration: 1000,
         easing: 'easeInSine',
         complete: function(elements) { $(this).remove(); }
      });
   }

   $('#input').val('');
}
