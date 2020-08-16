$('#send').on('click', sendMessage);


function sendMessage(){

    let msg = $('textarea').val();

    if(msg){
        $('.chatbox').append('<div class="my-bubble bubble"></div>');
        $('.my-bubble:last-child').html(msg);
        $('textarea').val('');
    }

}