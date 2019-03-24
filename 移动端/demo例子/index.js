var iNow = 1;
$(document).on('swipeUp',function(){
    // console.log(1111111);
    $('.page-'+iNow).attr('class','page-'+iNow+' moveToTop');

    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom"  );
 
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        // 滑出的中的小图片 隐藏
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    },600)
})

$(document).on('swipeDown',function(){
    $('.page-'+iNow).attr('class','page-'+iNow+" moveToBottom");
    $('.page-'+(iNow-1)).attr('class','page-'+(iNow-1)+" moveFromTop");
    setTimeout(function(){
        $('.page-'+(iNow-1)).children().removeClass('hide');
        // 下滑的时候 让出去的小图都隐藏
        $('.page-'+iNow).children().addClass('hide');
        iNow--;
    }, 600);
})