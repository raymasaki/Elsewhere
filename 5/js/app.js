// HI, THIS IS REALLY SHITTY CODE. THANKS FOR LOOKING.

$(document).ready(function() {

    $('#menu').load('../menu.html');

    // preloads the images
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    };

    $.each(allChar, function(i, currArr) {
        $.each(currArr, function(j, currImg) {
         //   console.log(currImg);
            $.preloadImages('./images/' + currImg);
        });
    });

    window.setTimeout(function() {
      startTyping();
   }, 500);

    window.setTimeout(function() {
        $start.fadeOut(300, function() {
            $(this).remove();
        });
    }, 3000);

    window.setTimeout(function() {

        $(window).keydown(function(e) {

            if (e.which == 8 || e.which == 46) {
                e.preventDefault();
                console.log("delete");

                $('.char').last().remove();
            }
        });

        $(window).keypress(function(e) {
            var value = String.fromCharCode(e.keyCode).toLowerCase();
            console.log(value);

            if ((e.which < 65 || e.which > 90) && (e.which < 97 || e.which > 123) && (e.which > 190) && e.which != 32) {
                console.log("false");
            } else if (e.which === 32) {
                $space.append('<img class="char" src="images/' + spaceChar[Math.floor(Math.random() * spaceChar.length)] + '" />');
            } else {
                switch (value) {
                    case "a":
                        $space.append('<img class="char" src="images/' + aChar[Math.floor(Math.random() * aChar.length)] + '" />');
                        break;
                    case "b":
                        $space.append('<img class="char" src="images/' + bChar[Math.floor(Math.random() * bChar.length)] + '" />');
                        break;
                    case "c":
                        $space.append('<img class="char" src="images/' + cChar[Math.floor(Math.random() * cChar.length)] + '" />');
                        break;
                    case "d":
                        $space.append('<img class="char" src="images/' + dChar[Math.floor(Math.random() * dChar.length)] + '" />');
                        break;
                    case "e":
                        $space.append('<img class="char" src="images/' + eChar[Math.floor(Math.random() * eChar.length)] + '" />');
                        break;
                    case "f":
                        $space.append('<img class="char" src="images/' + fChar[Math.floor(Math.random() * fChar.length)] + '" />');
                        break;
                    case "g":
                        $space.append('<img class="char" src="images/' + gChar[Math.floor(Math.random() * gChar.length)] + '" />');
                        break;
                    case "h":
                        $space.append('<img class="char" src="images/' + hChar[Math.floor(Math.random() * hChar.length)] + '" />');
                        break;
                    case "i":
                        $space.append('<img class="char" src="images/' + iChar[Math.floor(Math.random() * iChar.length)] + '" />');
                        break;
                    case "j":
                        $space.append('<img class="char" src="images/' + jChar[Math.floor(Math.random() * jChar.length)] + '" />');
                        break;
                    case "k":
                        $space.append('<img class="char" src="images/' + kChar[Math.floor(Math.random() * kChar.length)] + '" />');
                        break;
                    case "l":
                        $space.append('<img class="char" src="images/' + lChar[Math.floor(Math.random() * lChar.length)] + '" />');
                        break;
                    case "m":
                        $space.append('<img class="char" src="images/' + mChar[Math.floor(Math.random() * mChar.length)] + '" />');
                        break;
                    case "n":
                        $space.append('<img class="char" src="images/' + nChar[Math.floor(Math.random() * nChar.length)] + '" />');
                        break;
                    case "o":
                        $space.append('<img class="char" src="images/' + oChar[Math.floor(Math.random() * oChar.length)] + '" />');
                        break;
                    case "p":
                        $space.append('<img class="char" src="images/' + pChar[Math.floor(Math.random() * pChar.length)] + '" />');
                        break;
                    case "q":
                        $space.append('<img class="char" src="images/' + qChar[Math.floor(Math.random() * qChar.length)] + '" />');
                        break;
                    case "r":
                        $space.append('<img class="char" src="images/' + rChar[Math.floor(Math.random() * rChar.length)] + '" />');
                        break;
                    case "s":
                        $space.append('<img class="char" src="images/' + sChar[Math.floor(Math.random() * sChar.length)] + '" />');
                        break;
                    case "t":
                        $space.append('<img class="char" src="images/' + tChar[Math.floor(Math.random() * tChar.length)] + '" />');
                        break;
                    case "u":
                        $space.append('<img class="char" src="images/' + uChar[Math.floor(Math.random() * uChar.length)] + '" />');
                        break;
                    case "v":
                        $space.append('<img class="char" src="images/' + vChar[Math.floor(Math.random() * vChar.length)] + '" />');
                        break;
                    case "w":
                        $space.append('<img class="char" src="images/' + wChar[Math.floor(Math.random() * wChar.length)] + '" />');
                        break;
                    case "x":
                        $space.append('<img class="char" src="images/' + xChar[Math.floor(Math.random() * xChar.length)] + '" />');
                        break;
                    case "y":
                        $space.append('<img class="char" src="images/' + yChar[Math.floor(Math.random() * yChar.length)] + '" />');
                        break;
                    case "z":
                        $space.append('<img class="char" src="images/' + zChar[Math.floor(Math.random() * zChar.length)] + '" />');
                        break;
                    case ".":
                        $space.append('<img class="char" src="images/' + periodChar[Math.floor(Math.random() * periodChar.length)] + '" />');
                        break;
                    default:
                }
            }
        });

    }, 3000);


    $('.space').click(function() {
        window.location.href = "../1/";
    });

});

var $space = $('.space');
var $start = $('.start');
var W = $(window).width();

function startTyping() {

    var time = 100;

    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + sChar[Math.floor(Math.random() * sChar.length)] + '" />');
    }, time * 0);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + tChar[Math.floor(Math.random() * tChar.length)] + '" />');
    }, time * 1);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + aChar[Math.floor(Math.random() * aChar.length)] + '" />');
    }, time * 2);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + rChar[Math.floor(Math.random() * rChar.length)] + '" />');
    }, time * 3);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + tChar[Math.floor(Math.random() * tChar.length)] + '" />');
    }, time * 4);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + spaceChar[Math.floor(Math.random() * spaceChar.length)] + '" />');
    }, time * 5);

    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + tChar[Math.floor(Math.random() * tChar.length)] + '" />');
    }, time * 6);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + yChar[Math.floor(Math.random() * yChar.length)] + '" />');
    }, time * 7);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + pChar[Math.floor(Math.random() * pChar.length)] + '" />');
    }, time * 8);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + iChar[Math.floor(Math.random() * iChar.length)] + '" />');
    }, time * 9);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + nChar[Math.floor(Math.random() * nChar.length)] + '" />');
    }, time * 10);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + gChar[Math.floor(Math.random() * gChar.length)] + '" />');
    }, time * 11);
    window.setTimeout(function() {
        $start.append('<img class="char start" src="images/' + periodChar[Math.floor(Math.random() * periodChar.length)] + '" />');
    }, time * 12);
}

var aChar = makeArr("a", 8);
var bChar = makeArr("b", 8);
var cChar = makeArr("c", 8);
var dChar = makeArr("d", 4);
var eChar = makeArr("e", 7);
var fChar = makeArr("f", 8);
var gChar = makeArr("g", 8);
var hChar = makeArr("h", 7);
var iChar = makeArr("i", 3);
var jChar = makeArr("j", 2);
var kChar = makeArr("k", 6);
var lChar = makeArr("l", 6);
var mChar = makeArr("m", 8);
var nChar = makeArr("n", 5);
var oChar = makeArr("o", 8);
var pChar = makeArr("p", 7);
var qChar = makeArr("q", 4);
var rChar = makeArr("r", 7);
var sChar = makeArr("s", 8);
var tChar = makeArr("t", 8);
var uChar = makeArr("u", 6);
var vChar = makeArr("v", 7);
var wChar = makeArr("w", 7);
var xChar = makeArr("x", 8);
var yChar = makeArr("y", 6);
var zChar = makeArr("z", 2);
var periodChar = makeArr("period", 5);
var spaceChar = makeArr("space", 4);

var allChar = [aChar, bChar, cChar, dChar, eChar, fChar, gChar, hChar, iChar, jChar, kChar, lChar, mChar, nChar, oChar, pChar, qChar, rChar, sChar, tChar, uChar, vChar, wChar, xChar, yChar, zChar, periodChar, spaceChar];

function makeArr(letter, num) {
    var charArr = [];

    for (var i = 0; i < num; i++) {
        charArr.push(letter + (i + 1) + ".jpg");
    }
    return charArr;
}
