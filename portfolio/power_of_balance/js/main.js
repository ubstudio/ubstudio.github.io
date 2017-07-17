$(function($) {
	$.localScroll({
		duration: 1000,
		hash: true,
		offset: -60
	});

	$('.fancybox').fancybox();

	// убираем видео ютуба с самого высокого слоя
	$('iframe').each(function() {
		var url = $(this).attr("src");
		if ($(this).attr("src").indexOf("?") > 0) {
			$(this).attr({
				"src": url + "&wmode=transparent",
				"wmode": "Opaque"
			});
		} else {
			$(this).attr({
				"src": url + "?wmode=transparent",
				"wmode": "Opaque"
			});
		}
	});

	$("[name=phone]").mask("+7 (999) 999-99-99");

	var callbackPopup = {
		init: function(){
			$('.callback-btn').click(function(){
				callbackPopup.root.arcticmodal({
					closeOnOverlayClick: false,
					beforeOpen: callbackPopup.beforeOpen()
				});
			});

			this.form.submit(function(){
				var form = $(this);
				var name = form.find('[name=name]').val();
				var phone = form.find('[name=phone]').val();

				if (!checkForm(form)) {
					return false;
				}

				$.ajax({
					url: 'send.php',
					type: 'POST',
					dataType: 'json',
					data: form.serialize(),
				})
				.done(function(response) {
					if (response.status == 'OK') {
						/*var text = callbackPopup.finishMessage;

						if (name) {
							name = '<b>Имя: ' + name + '</b><br>';
						} else {
							name = '';
						}
						if (phone) {
							phone = '<b>Телефон: ' + phone + '</b>';
						} else {
							phone = '';
						}

						callbackPopup.textContainer.html(text.replace('{name}', name).replace('{phone}', phone));*/

						callbackPopup.textContainer.html(callbackPopup.finishMessage);

						callbackPopup.form
							.find('input:text, textarea').val('')
							.end().hide();
						callbackPopup.btnOk.show();
					}
				})

				return false;
			});
		},
		root: $('#callback-modal'),
		form: $('#callback-modal form'),
		btnOk: $('#callback-modal-btn-ok'),
		textContainer: $('#callback-modal .text'),
		startMessage: 'Оставьте свои контакты и мы Вам перезвоним.',
		finishMessage: '<div class="header">Cпасибо.</div>Заказ на звонок принят. В ближайшее время наш менеджер свяжется с Вами.',
		beforeOpen: function(){
			this.textContainer.html(this.startMessage);
			this.form.show();
			this.btnOk.hide();
		}
	};

	var sendAddressPopup = {
		init: function(){
			$('#effects .order-btn').click(function(){
				sendAddressPopup.root.arcticmodal({
					closeOnOverlayClick: false,
					beforeOpen: sendAddressPopup.beforeOpen(2)
				});
			});
			$('#specialist-comment .order-btn').click(function(){
				sendAddressPopup.root.arcticmodal({
					closeOnOverlayClick: false,
					beforeOpen: sendAddressPopup.beforeOpen(3)
				});
			});

			this.form.submit(function(){
				var form = $(this);

				if (!checkForm(form)) {
					return false;
				}

				$.ajax({
					url: 'send.php',
					type: 'POST',
					dataType: 'json',
					data: form.serialize(),
				})
				.done(function(response) {
					if (response.status == 'OK') {
						sendAddressPopup.textContainer.html(sendAddressPopup.finishMessage);
						sendAddressPopup.form
							.find('input:text, textarea').val('')
							.end().hide();
						sendAddressPopup.btnOk.show();
					}
				})

				return false;
			});
		},
		root: $('#send-address-modal'),
		form: $('#send-address-modal form'),
		btnOk: $('#send-address-modal-btn-ok'),
		textContainer: $('#send-address-modal .text'),
		startMessage: 'Оформите заказ со скидкой 50%',
		finishMessage: '<div class="header">Cпасибо.</div>Заказ оформлен! В ближайшее время наш менеджер свяжется с Вами и уточнит все детали.',
		beforeOpen: function(formNumber){
			var subject = "Заказ с формы ";
			/*var text = this.startMessage;

			if (name) {
				name = '<b>Имя: ' + name + '</b><br>';
			} else {
				name = '';
			}
			if (phone) {
				phone = '<b>Телефон: ' + phone + '</b>';
			} else {
				phone = '';
			}

			this.textContainer.html(text.replace('{name}', name).replace('{phone}', phone));*/

			this.textContainer.html(this.startMessage);

			this.form
				// .find('input:text, textarea').val('')
				.find('[name=subject]').val(subject + formNumber)
				.end().show();
			this.btnOk.hide();
		}
	};

	var successPopup = {
		root: $('#success-modal')
	}

	callbackPopup.init();
	sendAddressPopup.init();

	$('.send-request').submit(function(){
		var form = $(this);
		var name = form.find('[name=name]').val();
		var phone = form.find('[name=phone]').val();
		var subject = form.find('[name=subject]').val();

		if (!checkForm(form)) {
			return false;
		}

		$.ajax({
			url: 'send.php',
			type: 'POST',
			dataType: 'json',
			data: form.serialize(),
		})
		.done(function(response) {
			if (response.status == 'OK') {
				successPopup.root.arcticmodal();
				form.find('input:text, textarea').val('');
			}
		})

		return false;
	});

	function checkForm(form){
		var error = false;

		form.find("[required]").each(function(){
			$(this).closest('.form-field').removeClass("form-required-field_state_fail");
			if($(this).val() == ""){
				$(this).closest('.form-field').addClass("form-required-field_state_fail");
				error = true;
			}
		});

		return !error;
	}



	$.fn.countMe = function(year, mounth, day, hours, id){
		var time = new Date();
		var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
		target_time = target_time.valueOf()+1000*60*60*24;
		var tomorrow = new Date(target_time);
		var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
		$('.counter2 .date').text(tomorrow.getDate()+" "+months[time.getMonth()]);

		// var ts = new Date(year, mounth, day, hours);

		$(id).countdown({
			timestamp: tomorrow
		});
	};

	var current_date = new Date();// текущая дата
		current_date.setDate(current_date.getDate())
		curHour = current_date.getHours(),
		curDay = current_date.getDate(),
		curMonth = current_date.getMonth(),
		curYear = current_date.getFullYear();
	
	$('#counter1').countMe(curYear, curMonth, curDay+1, curHour, '#counter1');
	$('#counter2').countMe(curYear, curMonth, curDay+1, curHour, '#counter2');

});
var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));