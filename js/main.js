$('.trigger').click(function(){
    $(this).toggleClass('on');
    $('nav').slideToggle(00);
});

$(window).resize(function(){
    let winW = $(window).width();
    //브라우저의 가로길이를 재서 변수에 넣음
    console.log('브라우저의 가로길이 : ', winW);

    if( winW >= 768 && $('nav').is(':hidden')){
        console.log('nav가 안보여');
        $('nav').removeAttr('style');
    };
});