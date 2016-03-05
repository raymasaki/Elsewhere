$(document).ready(function() {

   var input = $('#word-input');
   input.focus();

   $('#word-input').keypress(function(e){

      // if enter is pressed triggers search-button click event
      if(e.which == 13) {
         words = $('#word-input').val();
         $('#word-input').hide();

         console.log(words);

         wordSnake();
      }
   });

});

var words = $('#word-input').val();
var fontSize = W / 16;

function wordSnake() {
   var W = $(window).width();

   // var words = prompt("Enter some words");
   // var words = 'If Young Metro don\’t trust you I\’m gon\’ shoot you.';

   var wordArr = words.split(' ');

   var curr = 0;
   var currWord = null;

   window.setInterval(function() {
      currWord = wordArr[curr % wordArr.length];
      curr++;
   }, 500);

   $(window).mousemove(function(e) {

      // console.log(e.pageX, e.pageY);
      // $('.space').append($cell);

      var $word = $('<div class="word">');
      $word.html(currWord);

      // console.log($word);

      $word.css('top', e.pageY - W/32);
      $word.css('left', e.pageX - W/16);
      $word.css('font-size', fontSize);
      $('.space').append($word);

      window.setTimeout(function() {
         $word.remove();
      }, 2000);

   });
}
