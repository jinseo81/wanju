var myBtn = document.getElementById('openGNB'),
    myNav = document.querySelector('#nav'),
    headerGNB = document.querySelector('#header .gnbWrap');

    myNav.addEventListener('mouseover',function(){
        $(this).addClass('active');
    });

    myNav.addEventListener('mouseout',function(){
        $(this).removeClass('active');
    });

    myBtn.addEventListener('click',function(){
        myNav.classList.toggle('active');
    });

	$(document).ready(function(){
        $("#nav .depth1 li a").click(function(){
        $(this).parent("li").toggleClass("view");
        });
    });

    //관련사이트
	$(document).ready(function(){
		$(".linkList > h3 > button").bind("click",function()
		{
            $(this).parent().parent().removeClass("on");
			if( $(this).parent().parent().attr("class") != null && $(this).parent().parent().attr("class").indexOf("on") >= 0  )
			{
				$(this).parent().parent().removeClass("on");
			}else
			{
				$(this).parent().parent().addClass("on");
			}
			//return false;
		});

		$(".btn_x").bind("click",function(){
			$(this).parent().parent().parent().removeClass("on");
			return false;
		});
    });

    //탭메뉴
    function fnIng(num){
		$('.tabCon').removeClass('active');
		$('.tabTitle').removeClass('on');
		$('.tabH'+num).addClass('on');
		if(num == 1){
			$('.newsCon').css('display', 'block');
			$('.reportCon').css('display', 'none');
		}else{
			$('.newsCon').css('display', 'none');
			$('.reportCon').css('display', 'block');
		}
	};

    //to Top
    $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.btn_top').fadeIn();
          } else {
            $('.btn_top').fadeOut();
          }
        });
        $('.btn_top').click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 400);
          return false;
        });
      });

//슬라이드 
$(document).ready(function(){   
    //메인게시물  
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

    //인포존
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
});
        
$(document).on("click",".popCtrl > .play",function(){
    $(this).attr('class','pause');
        $('.popWrap').slick('slickPlay');
        return false;
});

$(document).on("click",".popCtrl > .pause",function(){
    $(this).attr('class','play');
    $('.popWrap').slick('slickPause');
    return false;
});

$(document).ready(function(){
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
});

$(document).on("click",".ban_ctrl > .play",function(){
    $(this).attr('class','pause');
        $('.ban_list').slick('slickPlay');
        return false;
});

$(document).on("click",".ban_ctrl > .pause",function(){
    $(this).attr('class','play');
    $('.ban_list').slick('slickPause');
    return false;
});
