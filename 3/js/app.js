$(document).ready(function() {

   // var words = $('#words').val();
   //
   // $('#words').keypress(function(e){
   //
   //    words = $('#words').val();
   //
   //    // if enter is pressed triggers search-button click event
   //    if(e.which == 13) {
   //       $('#words').hide();
   //    }
   // });

   var W = $(window).width();
   var fontSize = W / 16;


   var words = 'If Young Metro don\’t trust you I\’m gon\’ shoot you.';

   var wordArr = words.split(' ');

   var curr = 0;
   var currWord = null;
   // console.log(words);

   window.setInterval(function() {
      currWord = wordArr[curr % wordArr.length];
      curr++;
      // console.log(currWord);
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

});
