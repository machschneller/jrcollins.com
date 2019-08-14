$(function () {
     var img = new Image();

     $(img).load(function () {
          $('html').css({
               'background': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../Resources/background.jpg") no-repeat center center fixed;'
          });
     })

     .attr('src', '../Resources/background.jpg');
});