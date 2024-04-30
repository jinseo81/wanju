$(document).ready(function() {
    // GNB
    $('#nav .depth1').on('mouseover', function() {
        $("#nav").addClass('active');
    }).on('mouseout', function() {
        $(this).removeClass('active');
    });

    $("#openGNB").click(function() {
        $("#nav").toggleClass("active");
        return false;
    });

    $("#nav .depth1 li a").each(function() {
        $(this).on('click', function() {
            $(this).parent().toggleClass("view");
        });
    });

    // 관련사이트
    $(".linkList > h3 > button").click(function() {
        $(this).parent().parent().toggleClass("on");
        return false;
    });

    $(".btn_x").bind("click",function(){
        $(this).parent().parent().parent().removeClass("on");
        return false;
    });

    // Go2Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });

    $('.btn_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });

    // 슬라이드 설정
    initSlickSliders();
    handleSlickControls();
});

function initSlickSliders() {
    // 메인게시물
    $(".edu-list-wrap").slick({
        autoplay:false,
        autoplaySpeed:3000,
        speed:400,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnDotsHover:true,
        arrows: false,
        dots: false,
        pauseOnHover:true,
        draggable:false,
        infinite: false,
        variableWidth: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint:820,
            settings: {
                dots:true,
                slidesToShow:2,
                slidesToScroll:1,
                draggable:true,
                infinite:true
            }
          }
        ]
    });

    // 인포존
    $(".popWrap").slick({
        autoplay:true,
        autoplaySpeed: 3000,
        speed:500,
        slidesToShow:2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        pauseOnHover:true,
        draggable:true,
        variableWidth: true,
        cssEase: 'linear',
        prevArrow:$('.prev.popBtn'), 
        nextArrow:$('.next.popBtn')
});

    // 배너모음
    $(".ban_list").slick({
        autoplay:true,
        autoplaySpeed: 1200,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed:400,
        draggable:true,
        prevArrow:$('.ban_ctrl .pre'),
        nextArrow:$('.ban_ctrl .next'),
        variableWidth: true,
        focusOnSelect: true
    });
}

function handleSlickControls() {
    // Slick 컨트롤러 이벤트 핸들러
    $(document).on("click", ".popCtrl > .play, .ban_ctrl > .play", function() {
        $(this).attr('class', 'pause');
        $(this).closest('.slick-initialized').slick('slickPlay');
        return false;
    });

    $(document).on("click", ".popCtrl > .pause, .ban_ctrl > .pause", function() {
        $(this).attr('class', 'play');
        $(this).closest('.slick-initialized').slick('slickPause');
        return false;
    });
}