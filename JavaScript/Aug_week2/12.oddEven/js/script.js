$('#even-btn').on('click', findEven);
$('#odd-btn').on('click', findOdd);

function findEven(){
    $('.card').each(function(){
        if (parseInt($(this).text())%2 === 0){
            $(this).addClass('selected');
        }
        else {
            $(this).removeClass('selected');
        }
    });
}

function findOdd(){
    $('.card').each(function(){
        if (parseInt($(this).text())%2 === 1){
            $(this).addClass('selected');
        }
        else {
            $(this).removeClass('selected');
        }
    });
}