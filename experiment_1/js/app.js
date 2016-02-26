$(document).ready(function() {

   // window Width & Height
   var W = $(window).width();
   var H = $(window).height();

   // object width & height
   var oW = W / 6;
   var oH = oW * 0.1367;

   // number of cells per row and columns
   var numX = 6;
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
      var pos = {x : $cell.position().left, y : $cell.position().top};

      cellPos.push(pos);
   }


   // $(window).mousemove(function(e) {
   //    var X = cW - e.pageX;
   //    var Y = cH - e.pageY;
   //    var angle = Math.atan(Y/X) * 180/Math.PI;
   //
   //    console.log(angle);
   //    $('.cell').css('transform', 'rotate(' + angle + 'deg)');
   //
   // });

   // $(window).resize(function() {
   //    cellPos = [];
   //
   //    $('.cell').each(function() {
   //       var pos = {x : $cell.position().left, y : $cell.position().top};
   //
   //       cellPos.push(pos);
   //    });
   // });

   $(window).mousemove(function(e) {

      for (var i = 0; i < numTotal; i++) {
         var X = cellPos[i].x - (e.pageX + 110);
         var Y = cellPos[i].y - (e.pageY - 150);
         var angle = Math.atan(Y/X) * 180/Math.PI;

         $( 'div[num=' + i +']' ).css('transform', 'rotate(' + angle + 'deg)');

      }

   });

});
