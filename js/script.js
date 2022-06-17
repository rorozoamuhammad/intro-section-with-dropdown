$('.feadrop li').on('click', () => {
    $('.feadrop .drop').toggleClass('muncul');
    if($('.feadrop .drop').hasClass('muncul')) {
        $('.feadrop #upFea').css('display', 'block');
        $('.feadrop #downFea').css('display', 'none');
    } else {
        $('.feadrop #downFea').css('display', 'block');
        $('.feadrop #upFea').css('display', 'none');
    }
});
$('.comdrop li').on('click', () => {
    $('.comdrop .drop').toggleClass('tampil');
    if($('.comdrop .drop').hasClass('tampil')) {
        $('.comdrop #upCom').css('display', 'block');
        $('.comdrop #downCom').css('display', 'none');
    } else {
        $('.comdrop #downCom').css('display', 'block');
        $('.comdrop #upCom').css('display', 'none');
    }
});
$('#iconMenu').on('click', () => {
    $('#iconMenu').css('display', 'none');
    $('#closeMenu').css('display', 'block');
    
    // tampilkan full
    $('#full').css('display', 'block');
    $('#slide').toggleClass('samping');

    // tampilan sub pilihan
    $('#slide .feadrop li').on('click', () => {
        $('#slide .feadrop .drop').toggleClass('feadp');
    });
    $('#slide .comdrop li').on('click', () => {
        $('#slide .comdrop .drop').toggle();
    });

    // hapus tampilan full
    $('#closeMenu').on('click', () => {
        $('#closeMenu').css('display', 'none');
        $('#iconMenu').css('display', 'block');
        $('#full').css('display', 'none');
        if($('#slide').hasClass('samping')) {
            $('#slide').removeClass('samping')
        }
    });
});