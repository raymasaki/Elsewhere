$(document).ready(function() {

   $('#menu').load('../menu.html');

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

   $('.cell').velocity({
      opacity: [1, 0]
   }, {
      duration: 500,
      delay: 500
   });


   $(window).mousemove(function(e) {


      // the further mouseXY is from cXY the lighter the shadow
      // var diff = 5;

      for (var i = 0; i < numTotal; i++) {

         var dX = cellPos[i].x - e.clientX;
         var dY = cellPos[i].y - e.clientY;
         var diff = (Math.abs(dX) + Math.abs(dY)) / 1000;
         var blur = Math.sqrt( Math.pow(dX, 2) + Math.pow(dY,2) );

         $('div[num=' + i + '] > .box > p').css({
            'text-shadow': dX/10 + 'px ' + dY/10 + 'px ' + blur/25 + 'px rgba(50, 50, 50, ' + diff * 1.5 + ')'
         });

      }

   });

   $('.space').click(function() {
      window.location.href = "../3/";
   });

});
