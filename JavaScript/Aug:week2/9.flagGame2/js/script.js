$('#btn1').on('click', blueFlagDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', blueDottedFlagDown);

function blueFlagDown() {
  $('.blue').css('transform', 'rotate(30deg)');
  setTimeout(allFlagUp, 1000);
}

function whiteFlagDown() {
  $('.white').css('transform', 'rotate(30deg)');
  setTimeout(allFlagUp, 1000);
}

function blueDottedFlagDown() {
  $('.blue.dot').css('transform', 'rotate(30deg)');
  setTimeout(allFlagUp, 1000);
}

function allFlagUp() {
  $('.flag').css('transform', 'rotate(0deg)');
}

