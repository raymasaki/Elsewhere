$(document).ready(function() {

   $('#menu').load('../menu.html');

   // puts the focus on the input box
   var input = $('#word-input');
   input.focus();

   $('#word-input').keypress(function(e){

      // if enter is pressed
      if(e.which == 13) {
         // saves the input words
         words = $('#word-input').val();
         $('#word-input').hide();

         // starts the word paintbrush
         wordSnake();
      }
   });

   $('.space').click(function() {
      window.location.href = "../1/";
   });

});

var words = $('#word-input').val();
var fontSize = W / 16;
var W = $(window).width();

function wordSnake() {

   // splits the words into an array
   var wordArr = words.split(' ');

   var curr = 0;
   var currWord = null;

   // changes the word on an interval
   window.setInterval(function() {
      currWord = wordArr[curr % wordArr.length];
      curr++;
   }, 500);

   $(window).mousemove(function(e) {

      // creates a div with the current word
      var $word = $('<div class="word">');
      $word.html(currWord);

      // prints it out wherever the mouse is
      $word.css('top', e.pageY - W/32);
      $word.css('left', e.pageX - W/16);
      $word.css('font-size', fontSize);
      $('.space').append($word);

      // after the CSS animation it removes
      window.setTimeout(function() {
         $word.remove();
      }, 2000);

   });
}
