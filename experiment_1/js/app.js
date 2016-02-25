$( document ).ready(function() {

   var W = $( window ).width();
   var H = $( window ).height();

   var oW = 100/8;
   var oH = W / oW * 0.1367;

   var numX = 8;
   var numY = Math.floor(H / oH);

   var numTotal = numX * numY;

   for (var i = 0; i < numTotal; i++) {

      var $cell = $('<div class="cell">');
      $cell.attr('num', i);
      $cell.css('width', oW + '%');
      $cell.append('<img src="images/elsewhere.svg">');

      $( '.space' ).append( $cell );

   }

   $( window ).mousemove(function(e) {

   });

});
