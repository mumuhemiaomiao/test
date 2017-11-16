$(function(){	
	var num=0;
	var timer=null;
	$('.screen1').removeClass('no');
	
	$('.gps li').click(function(e) {
		var index=$(this).index();
        $(this).addClass('current').siblings().removeClass();
		$('.doc').stop().animate({ top:-index*100+'%' },500);
		num=index;
		$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
    });
	
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(function(){
			num-=d;
			if( num>6 ){ num=6 }
			if( num<0 ){ num=0 }
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass();
			$('.doc').stop().animate({ top:-num*100+'%' },500);
			$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
		},300)
		
	});
	
	$('.music').click(function(event) {
		$(this).toggleClass('play')
		if($(this).hasClass('play')){
			$('audio').get(0).play();
		}else{
			$('audio').get(0).pause();
		}
	});

})