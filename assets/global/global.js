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
            $('.itemAc').removeClass('itemAc');
            if(rec) { 
                $(this).addClass('itemAc');
                $(submenu).show(300); 
            }
        });
        $('.cus-submenu').delegate("li", "click", function() {
            $('.cus-submenu li').removeClass('itemSubAc');
            $(this).addClass('itemSubAc');
        });
    })();
})(window, document, location);

