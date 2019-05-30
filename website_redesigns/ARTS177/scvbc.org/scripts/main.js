// jQuery for detecting focus on skip button
$(window).keyup(function (e) {
  if ($('#skip_to_content:focus').length) {
      showSkipButton();
  }
});

// Function to show skip button
function showSkipButton() {
  document.getElementById("skip_to_content").style.left = "10px";
}

//---------------------------

// jQuery for detecting loss of focus on skip button
$(window).keyup(function (e) {
  if (!$('#skip_to_content:focus').length) {
      hideSkipButton();
  }
});

// Function to hide skip button
function hideSkipButton() {
  document.getElementById("skip_to_content").style.left = "-1000px";
}

//---------------------------

// jQuery/JS for increasing font size
var currentZoomLevel = 0;

function increaseFontSize() {
  if (currentZoomLevel == 2) {
    alert("Maximum page zoom has been reached.")
  }

  else {
    currentZoomLevel++;
    var elts = $('p,h1,h2,h3,h4,a');

    for (var i = 0; i < elts.length; i++) {
            var fontSize = parseInt(window.getComputedStyle(elts[i]).getPropertyValue('font-size'));
            fontSize = fontSize + 4 + "pt";
            elts[i].style.fontSize = fontSize;
    }

    var width = parseInt(window.getComputedStyle($('#navbar')[0]).getPropertyValue('width'));
    $('#navbar').css({'width': (width + 50 + 'px')});
  }
}
document.getElementById('resize_large').onclick = function() {increaseFontSize()};

//---------------------------

// jQuery/JS for decreasing font size
function decreaseFontSize() {
  if (currentZoomLevel == 0) {
  alert("Minimum page zoom has been reached.")
  }

  else {
    currentZoomLevel--;
    var elts = $('p,h1,h2,h3,h4,a');

    for (var i = 0; i < elts.length; i++) {
            var fontSize = parseInt(window.getComputedStyle(elts[i]).getPropertyValue('font-size'));
            fontSize = (fontSize - 4) + "pt";
            elts[i].style.fontSize = fontSize;
    }

    var width = parseInt(window.getComputedStyle($('#navbar')[0]).getPropertyValue('width'));
    $('#navbar').css({'width': (width - 50 + 'px')});
  }
}
document.getElementById('resize_medium').onclick = function() {decreaseFontSize()};
