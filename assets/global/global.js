;(function(win, doc, loc) {
    /**
     * 修改 Content 容器的高度
     * 
     **/
    function getConHei() {
        var  conHei = $('.wrapper').height() - $('.navbar').height() - $('.bottom').height()
            ,conOriHei = $('.content').height()
            ;
        conHei = conHei > conOriHei ? conHei + 'px' : conOriHei + 'px';
        $('.content').css('height', conHei);
    }

    (function() {
        getConHei();
        
        // 一系列事件
        $(win).resize(getConHei);

        $('.main-menu>li').click(function() {
            var  submenu = $(this).data()
                ,rec = false;
                ;
            submenu = $(submenu.sub);
            if(submenu.css('display') == 'none') rec = true;
            $('.cus-submenu').hide();
            if(rec) { 
                $(submenu).show(); 
            }
        });
    })();
})(window, document, location);

