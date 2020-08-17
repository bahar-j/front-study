const playlist = document.querySelectorAll(".playlist");
//처음 scroll하기 전에도 한 번 검토
showPlaylist();
//scroll 할 때마다 확인해서 보여줌
$(window).on('scroll', showPlaylist);
$(window).on('scroll', showButton);

function showPlaylist() {   
    playlist.forEach( box => { 
        // element의 visible height 구하기
        var scrollTop = $(window).scrollTop(),
            scrollBot = scrollTop + $(window).height(),
            elTop = $(box).offset().top,
            elBottom = elTop + $(box).outerHeight(),
            visibleTop = elTop < scrollTop ? scrollTop : elTop,
            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
        // visible height가 실제 height의 절반 이상이면 투명도 1로
        if ((visibleBottom - visibleTop) >= (elBottom - elTop)/2){
            $(box).animate({opacity: 1}, 1000);
        }
    });
}

function showButton() {
    if($(this).scrollTop() + $(this).height() === $(document).height()) {
        $('.to-top-btn').fadeIn();
    }
    else{
        $('.to-top-btn').fadeOut();
    }
}