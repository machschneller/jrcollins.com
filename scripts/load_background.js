$(function () {
     var img = new Image();

     img.setAttribute('src', './Resources/background.jpg');

     img.onload = function () {

          $('html')

          .removeClass('loading')

          .css({
               'background': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./Resources/background.jpg") no-repeat center center fixed;'
          })

          .addClass('loaded');

     };

});