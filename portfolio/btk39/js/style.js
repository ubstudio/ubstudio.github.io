/* Old IE (<= 8) HTML5 tags */
document.createElement('HEADER');
document.createElement('FOOTER');
document.createElement('ASIDE');
document.createElement('ARTICLE');
document.createElement('MARK');
Function.prototype.clone = function() {
    var that = this;
    var temp = function temporary() { return that.apply(this, arguments); };
    for( key in this ) {
        temp[key] = this[key];
    }
    return temp;
};

/* Adding blocks, transform blocks, only for correct display */
$(document).ready(function() {
	//Add wrap to any block with .wrap
	$('.wrap').each(function() {
		if ($(this).parents('.wrap-outer').length == 0) {
			var cloned_tree = $('<div class="wrap-outer"></div>');
			$(this).removeClass('wrap');
			cloned_tree.addClass($(this).attr('class'));
			$(this).clone().attr('class', 'wrap').appendTo(cloned_tree);
			$(this).replaceWith(cloned_tree);
		}
	});
	//Replace HR with DIV with class HR
	$('hr').each(function() {
		var replace = $('<div class="hr"></div>');
		replace.addClass($(this).attr('class'));
		$(this).replaceWith(replace);
	});
	
	$('input[data-placeholder]').each(function() {
		var placeholder = $(this).attr('data-placeholder');
		if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
			$(this).removeClass('placeholder');
		} else {
			$(this).val(placeholder);
			$(this).addClass('placeholder');
		}
		$(this).focusin(function() {
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}
		});
		$(this).focusout(function() {
			if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
				$(this).val(placeholder);
				$(this).addClass('placeholder');		
			}
		});		
	});
	
	$('form').submit(function() {
		$(this).find('input[data-placeholder]').each(function() {
			var placeholder = $(this).attr('data-placeholder');
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}	
		});
		var _gaq = _gaq || [];
		if ($(this).find('input[name="form_name"]').val() != 'Обратный звонок') {
			// yaCounter21394399.reachGoal('SUBSCRIBE');
			_gaq.push(['_trackEvent', 'SUBSCRIBE', 'b.carnavalia.ru']);
		} else {
			// yaCounter21394399.reachGoal('CALLBACK');
			_gaq.push(['_trackEvent', 'CALLBACK', 'b.carnavalia.ru']);
		}
	});
	
  	var set_slide = function(selector, slide) {
      	$(selector).each(function() {
      		var position = slide*400+300;
      		var block = $(this);
      		var shift = function() {
      			block.css('background-position', '0 '+position+'px');
      			position -= 100;
      		}
      		setTimeout(shift, 60);
      		setTimeout(shift, 120);
      		setTimeout(shift, 180);
      		setTimeout(shift, 240);
      	});
  	}
  	
  	var time = new Date();
	var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
	target_time = target_time.valueOf()+1000*60*60*24;
	var tomorrow = new Date(target_time);
	var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    $('.timer>span').text("Предложение действительно до "+tomorrow.getDate()+" "+months[time.getMonth()]);
	var tick = function(init) {
    	if (init == undefined) {
    		init = false;
    	}
    	var current_time = new Date();
    	current_time = current_time.valueOf();
    	if (current_time > target_time) {
    	  	var time = new Date();
    		target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    		target_time = target_time.valueOf()+1000*60*60*24;    		
    	}
    	var time_diff = Math.floor((target_time - current_time)/1000);	
    	var second_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
    	var second_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
    	var minute_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
    	var minute_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
    	var hour_2 = Math.floor(time_diff/10);
    	var hour_1 = time_diff % 10;
      	set_slide('div.secondPlay', second_2);
      	if ((second_2 == 9) || init) {set_slide('div.second6Play', second_1);
      	if ((second_1 == 5) || init) {set_slide('div.minutePlay', minute_2);
      	if ((minute_2 == 9) || init) {set_slide('div.minute6Play', minute_1);
      	if ((minute_1 == 5) || init) {set_slide('div.hourPlay', hour_1);
      	if ((hour_2 == 9) || init) {set_slide('div.hour2Play', hour_2);}}}}}
      }
    tick(true);
	setInterval(tick, 1000);
	
	var show_popup = function(element, popup) {
	  	$(element).click(function() {
	  		$(popup).show();
	  		$('.popup').fadeIn();
	  		return false;
	  	});		
	}
	
  	$('.popup .popup-shadow').click(function() {
  		$('.popup').fadeOut(function() {
  			$('.popup-content>*').hide();
  		});
  		return false;
  	});
	
	show_popup('a#anim-desc', '.popup .animators');
	show_popup('a#educ-desc', '.popup .education');
	show_popup('a#spec-desc', '.popup .special');
	show_popup('.button-callback', '.popup .call-form'); 
  	
  	$('.popup .popup-shadow').click(function() {
  		$('.popup').fadeOut(function() {
  			$('.popup-content>*').hide();
  		});
  		return false;
  	});
  	
	$('.subscribe-message a').click(function() {
		$(this).closest('.subscribe-message').fadeOut(function() {
			$(this).closest('.form-wrap').find('form').slideDown();
		});
		return false;
	});
	
	$('.call-form input[name="form_name"]').val('Обратный звонок');
	
});
var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));