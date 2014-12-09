/*
 * PortfolioBox
 * 
 *
 * Copyright (c) 2014 Jannik Richter
 * Licensed under the MIT license.
 */

(function ($) {

  // Collection method.
    $.fn.portfoliobox = function () {     
        
        $('.tile-logo').css('width', $('#portfoliobox').width() / 3);
        $('.tile-logo').css('height', $('#portfoliobox').height() / 3);
        
        $('.tile-exit').click(
              function () {
                  hide();
              }
            );

        $('.tile-logo').click(
              function () {
                  show($(this));
              }
           );

        function show(elem) {           
            switch (parseInt(elem.parent().attr('id').substr(elem.parent().attr('id').length - 1))) {
                case 1:                   
                    $('#tile' + 2).css('display', 'none');
                    $('#tile' + 3).css('display', 'none');
                    break;
                case 2:
                    $('#tile' + 1).css('display', 'none');
                    $('#tile' + 3).css('display', 'none');
                    break;
                case 3:
                    $('#tile' + 1).css('display', 'none');
                    $('#tile' + 2).css('display', 'none');
                    break;
                case 4:
                    $('#tile' + 5).css('display', 'none');
                    $('#tile' + 6).css('display', 'none');
                    break;
                case 5:
                    $('#tile' + 4).css('display', 'none');
                    $('#tile' + 6).css('display', 'none');
                    break;
                case 6:
                    $('#tile' + 4).css('display', 'none');
                    $('#tile' + 5).css('display', 'none');
                    break;
                case 7:
                    $('#tile' + 8).css('display', 'none');
                    $('#tile' + 9).css('display', 'none');
                    break;
                case 8:
                    $('#tile' + 7).css('display', 'none');
                    $('#tile' + 9).css('display', 'none');
                    break;
                case 9:
                    $('#tile' + 7).css('display', 'none');
                    $('#tile' + 8).css('display', 'none');
                    break;               
            }
            elem.parent().css('width', $('#portfoliobox').width());
        }

        function hide() { 
            $('.tile').css('display', 'block');
            $('.tile').css('width', $('#portfoliobox').width() / 3);          
        }
  }; 

}(jQuery));
