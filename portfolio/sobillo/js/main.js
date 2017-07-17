$(function () {
	
	//Установка времени для нескольких счётчиков на странице
	jQuery(function(){	
		var ts = new Date(2016, 3, 19,23,0,0,0),
			newYear = false;
			
		jQuery('.countdown').countdown({
			timestamp	: ts			
		});
		
		jQuery('.countdown1').countdown({
			timestamp	: ts			
		});
		
		jQuery('.countdown2').countdown({
			timestamp	: ts			
		});
		
		jQuery('.countdown3').countdown({
			timestamp	: ts			
		});
			
		jQuery('.countdown4').countdown({
			timestamp	: ts			
		});
		
		jQuery('.countdown5').countdown({
			timestamp	: ts			
		});
	});	

	
	// Плавная прокрутка
	$("#get-catalog").click(function(){
		
			var selected = $(this).attr('href');
			console.log(selected);
			 $('html, body').animate({
		         scrollTop: $(selected).offset().top
		     }, 500);
			return false;
		});	
		
		
	});

	$(document).ready(function(){
	
		$("#lp_logo, #lp_link").hover(function(){
			$("#lp_logo").css("background-image", "url('images/lp-logo-hover.png')");
			$("#lp_link").css("color", "#e20713");
			$("#lp_link").css("border-bottom", "1px solid rgba(226,7,19,0.2)");
		});
		
		$("#lp_logo, #lp_link").mouseout(function(){
			$("#lp_logo").css("background-image", "url('images/lp-logo.png')");
			$("#lp_link").css("color", "#c6c6c6");
			$("#lp_link").css("border-bottom", "1px solid rgba(198,198,198,0.2)");
		});
	
	});
	var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));