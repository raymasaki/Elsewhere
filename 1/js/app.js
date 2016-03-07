$(document).ready(function() {

   $('#menu').load('../menu.html');

   createCells();

   $('.cell').velocity({
      opacity: [1, 0]
   }, {
      duration: 500,
      delay: 500
   });

   window.setTimeout(function() {
      $(window).mousemove(function(e) {

         // turns off transition when mouse is in window
         $('.cell').css('transition', 'none');

         for (var i = 0; i < numTotal; i++) {
            var X = cellPos[i].x - (e.pageX);
            var Y = cellPos[i].y - (e.pageY / 1.4);
            var angle = Math.atan(Y / X) * 180 / Math.PI;

            $('div[num=' + i + ']').css('transform', 'rotate(' + angle + 'deg)');
         }

      });
   }, 1200);

   // if mouse is outside of window make it reset angle
   $(document).mouseleave(function() {
      $('.cell').css('transition', 'all 300ms');

      $('.cell').css('transform', 'rotate(0deg)');
   });

   $('.space').click(function() {
      window.location.href = "../2/";
   });

   // $( window ).resize(createCells);

});

// number of cells per row and columns
var numX = 5;

// window Width & Height
var W = 0;
var H = 0;

$('.space').width(W);

// object width & height
var oW = 0;
var oH = 0;

var numY = 0;

// total number of cells
var numTotal = numX * numY;

// collects all the cell positions
var cellPos = [];

function createCells() {

   $('.space').empty();

   // window Width & Height
   W = $(window).width();
   H = $(window).height();

   $('.space').width(W);

   // if smaller than 1000 && 700
   if (W < 1000 && W > 700) {
      numX = 4;
   } else if (W <= 700) {
      numX = 3;
   }

   // object width & height
   oW = W / numX;
   oH = oW * 0.1367;

   numY = Math.floor(H / oH);

   // total number of cells
   numTotal = numX * numY;

   cellPos = [];

   // creates all the cells
   for (var i = 0; i < numTotal; i++) {

      var $cell = $('<div class="cell">');
      $cell.attr('num', i);
      $cell.css('width', oW);
      $cell.append('<img src="images/elsewhere.svg">');

      $('.space').append($cell);
      var pos = {
         x: $cell.position().left + oW / 2,
         y: $cell.position().top - oH / 2
      };

      cellPos.push(pos);
   }
}
