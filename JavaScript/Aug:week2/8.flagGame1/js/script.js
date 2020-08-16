$('#btn1').on('click', blueFlagDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', blueDottedFlagDown);

function blueFlagDown() {
  $('.blue').css('transform', 'rotate(30deg)');
}

function whiteFlagDown() {
  $('.white').css('transform', 'rotate(30deg)');
}

function blueDottedFlagDown() {
  $('.blue.dot').css('transform', 'rotate(30deg)');
}

