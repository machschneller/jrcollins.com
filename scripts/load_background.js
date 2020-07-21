$(function () {
     var img = new Image();

     img.setAttribute('src', './resources/background.jpg');

     img.onload = function () {

          $('html')

          .removeClass('loading')

          .css({
               'background': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./resources/background.jpg") no-repeat center center fixed;'
          })

          .addClass('loaded');

     };

});