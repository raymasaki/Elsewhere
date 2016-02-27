$(document).ready(function() {

   // window Width & Height
   var W = $(window).width();
   var H = $(window).height();

   $('.space').width(W);

   // number of cells per row and columns
   var numX = 6;

   // if smaller than 1000 && 700
   if (W < 1000 && W > 700) {
      numX = 4;
   } else if (W <= 700) {
      numX = 3;
   }

   // object width & height
   var oW = W / numX;
   var oH = oW * 0.1367;

   var numY = Math.floor(H / oH);

   // total number of cells
   var numTotal = numX * numY;

   // window center
   var cW = W / 2;
   var cH = H / 2;

   // collects all the cell positions
   var cellPos = [];

   // creates all the cells
   for (var i = 0; i < numTotal; i++) {

      var $cell = $('<div class="cell">');
      $cell.attr('num', i);
      $cell.css('width', oW);
      $cell.append('<img src="images/elsewhere.svg">');

      $('.space').append($cell);
      var pos = {x : $cell.position().left + oW/2, y : $cell.position().top + oH/2};

      cellPos.push(pos);
   }

   $(window).mousemove(function(e) {

      // turns off transition when mouse is in window
      $('.cell').css('transition', 'none');

      for (var i = 0; i < numTotal; i++) {
         var X = cellPos[i].x - (e.pageX);
         var Y = cellPos[i].y - (e.pageY - 200);
         var angle = Math.atan(Y/X) * 180/Math.PI;

         $( 'div[num=' + i +']' ).css('transform', 'rotate(' + angle + 'deg)');
      }

   });

   // if mouse is outside of window make it reset angle
   $(document).mouseleave(function() {
      $('.cell').css('transition', 'all 250ms');

      $('.cell').css('transform', 'rotate(0deg)');
   });

});
