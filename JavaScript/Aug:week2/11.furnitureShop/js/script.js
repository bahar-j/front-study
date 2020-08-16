$('#popup-trigger').on('click',showAlert);
$('#close-btn').on('click', closeAlert);
$(document).keydown(function(e) {
    if(e.keyCode === 27){
        closeAlert();
    }
})

function showAlert(){
    $('#popup').fadeIn(1000);
}

function closeAlert(){
    $('#popup').fadeOut(1000);
}