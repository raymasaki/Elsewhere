$(document).ready(function() {

   // window Width & Height
   var W = $(window).width();
   var H = $(window).height();

   // number per row
   var numX = 10;

   // object width
   var oW = 100 / numX;

   // number per column
   var numY = Math.floor(H / (W / numX));

   var numTotal = numX * numY;

   // window center
   var cX = W / 2;
   var cY = H / 2;

   // collects all the cell positions
   var cellPos = [];

   for (var i = 0; i < numTotal; i++) {

      var letter = ['E', 'L', 'S', 'E', 'W', 'H', 'E', 'R', 'E'];
      var $cell = $('<div class="cell">');

      $cell.css('width', oW + '%');
      $cell.css('height', W / numX + 'px');
      $cell.attr('num', i);
      $cell.html('<div class="box"><p>' + letter[i % letter.length] + '</p></div>');

      $('.space').append($cell);

      var pos = {
         x: $cell.position().left + oW / 2,
         y: $cell.position().top + (W / numX) / 2
      };

      cellPos.push(pos);

      // debugger;
   }

   $(window).mousemove(function(e) {


      // the further mouseXY is from cXY the lighter the shadow
      var diff = 5;

      for (var i = 0; i < numTotal; i++) {

         var dX = cellPos[i].x - e.pageX;
         var dY = cellPos[i].y - e.pageY;

         $('div[num=' + i + '] > .box > p').css('text-shadow', dX/10 + 'px ' + dY/10 + 'px ' + Math.abs(dX/10) + 'px rgba(75, 75, 75, ' + diff + ')');

         // debugger;
      }

   });

});
