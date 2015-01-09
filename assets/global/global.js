var  conHei = $('.wrapper').height() - $('.navbar').height() - $('.bottom').height()
    ,conOriHei = $('.content').height()
    ;
    conHei = conHei > conOriHei ? conHei + 'px' : conOriHei + 'px';

    $('.content').css('height', conHei);

    $(window).resize(function() {
        var  conHei = $('.wrapper').height() - $('.navbar').height() - $('.bottom').height()
        ,conOriHei = $('.content').height()
        ;
        conHei = conHei > conOriHei ? conHei + 'px' : conOriHei + 'px';
        $('.content').css('height', conHei);
    });
