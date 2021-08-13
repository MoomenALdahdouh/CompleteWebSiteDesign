/*
/!*Featured work shuffle*!/
$(function () {
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.shuffle-images .col-md').css('opacity',1);
        }else {
            $('.shuffle-images .col-md').css('opacity',0.08);
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
});
*/

$(function(){
    'use strict';
    //Featured Work Shuffle
    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if($(this).data('class')==='all'){
            //$('.shuffle-images .col-sm').css('opacity',1);
            $('.shuffle-images .col-sm').show();
        }else{
            /*$('.shuffle-images .col-sm').css('opacity','0.09');
            $($(this).data('class')).parent().css('opacity',1);*/
            $('.shuffle-images .col-sm').hide();
            $($(this).data('class')).parent().show();
        }
    });
});


