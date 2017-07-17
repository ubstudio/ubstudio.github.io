if(null === navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){
	var keyvisBoxInterval = null;
	var keyvisBoxIntervalTime = 4000;
	var keyvisBoxIntervalIndex = 1;
	var keyvisBoxAnimationIn = 'easeOutSine';
	var keyvisBoxAnimationOut = 'easeOutSine';
	var keyvisBoxAnimationTime = 750;
	var keyvisBoxFlyoutHeight = 500;

	var debug = false;

	$(window).load(function(){
		keyvisBoxInterval = window.setInterval(keyvisBoxAni,keyvisBoxIntervalTime);
			$(".keyvisualBoxContainer:first-child").css('display','none');
			$(".keyvisualBoxSection").height($(".keyvisualBoxContainer:first-child").height());
			keyvisBoxAni();
	});

	function keyvisBoxAni(){
		var elements = $(".keyvisualBoxContainer").length;
		
		$(".keyvisualBoxContainer").each(function(i,val){
			$(this).stop();
			if(i == keyvisBoxIntervalIndex){
				$(this).css('display','block');
				$(this).css('top',0);
				$(this).animate({'top' : '+='+keyvisBoxFlyoutHeight},parseInt(keyvisBoxAnimationTime*0.75),keyvisBoxAnimationOut,function(){
					$(this).css('display','none');
					
					$(this).find(".innerContainer").jrumble();
					
					$(this).find(".innerContainer").trigger('stopRumble');
				});

			}
			if(i == (keyvisBoxIntervalIndex+1) || ((keyvisBoxIntervalIndex+1) >= elements && i == 0)){

				$(this).css('display','block');
				$(this).css('top',-(80+$(this).height())).delay(400);
				$(this).css('opacity',1);
				var newHeight = $(this).height();
				var oldHeight = $(".keyvisualBoxSection").height();

				$(this).find(".innerContainer").jrumble();
				
				$(this).find(".innerContainer").trigger('startRumble');
				
				$(this).animate({'top' : 0},keyvisBoxAnimationTime,keyvisBoxAnimationIn);
	            $(".keyvisualBoxSection").animate({'height' : newHeight},parseInt(keyvisBoxAnimationTime*0.75),keyvisBoxAnimationIn);

			}
		});
		if((keyvisBoxIntervalIndex+1) >= elements){
			keyvisBoxIntervalIndex = 0;
		}else{
			keyvisBoxIntervalIndex++;
		}
	}

	function refreshKeyvisualBox(){
		var elements = $(".keyvisualBoxContainer").length;
		
		$(".keyvisualBoxContainer").each(function(i,val){
			$(this).stop();
			$(this).removeAttr('style');
		});
		
		keyvisBoxIntervalIndex = 0;
		$(".keyvisualBoxContainer:first-child").css('display','block');
		$(".keyvisualBoxSection").height($(".keyvisualBoxContainer:first-child").height());
	}
}


if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){	
	$(document).ready(function() {
		$(".paratroopers .after").css('display', 'block');
	});
}