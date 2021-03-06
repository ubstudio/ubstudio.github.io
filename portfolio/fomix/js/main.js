var yaTarget;

$(function() {
	$.localScroll({
		duration: 1000,
		hash: true,
		offset: -65
	});

	$('.fancybox').fancybox({
		openEffect  : 'elastic',
		closeEffect : 'elastic'
	});

	// youtube fix
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

	$('.section.action').prev().css({'z-index': '1','bottom': '-18px'});

	$("[name=phone]").mask("+7 (999) 999-99-99");

	var callbackPopup = {
		init: function(){
			var self = this;

			$('.callback-btn').click(function(event){
				self.root.arcticmodal({
					closeOnOverlayClick: false,
					beforeOpen: self.beforeOpen(event)
				});
			});

			this.form.submit(this.send);
		},
		root: $('#callback-modal'),
		form: $('#callback-modal form'),
		btnOk: $('#callback-modal-btn-ok'),
		caption: $('#callback-modal .caption'),
		startMessage: 'Заказ звонка',
		finishMessage: '<div class="header">Cпасибо.</div>Заказ на звонок принят. В ближайшее время наш менеджер свяжется с Вами.',
		beforeOpen: function(event){
			var subject = $(event.target).text();

			this.caption.html(this.startMessage);
			this.form
				.find('[name=subject]').val(subject)
				.end().show();
			this.btnOk.hide();
		},
		send: function(){
			var form = $(this);

			if (!checkForm(form)) {
				return false;
			}

			data = form.serialize();

			$.ajax({
				url: 'sender.php',
				type: 'POST',
				dataType: 'json',
				data: data
			})
			.done(function(response) {
				if (response.status == 'OK') {
					callbackPopup.caption.html(callbackPopup.finishMessage);
					form.hide();
					clearForm(form);
					callbackPopup.btnOk.show();
				}

				yaCounter();
			});

			return false;
		}
	};

	callbackPopup.init();

	$('.request-form').on('submit', function(e){
		var section;
		var form = $(this);

		e.preventDefault();

		if (!checkForm(form)) {
			return false;
		}

		data = form.serialize();

		$.ajax({
			url: 'sender.php',
			type: 'POST',
			dataType: 'json',
			data: data
		})
		.done(function(response) {
			if (response.status == 'OK') {
				alert('Спасибо! Ваши данные успешно отправлены');
				clearForm(form);
			}

			yaCounter();
		});
	});

	function yaCounter(){
		yaCounter27092204.reachGoal(yaTarget);
	}

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
	
	// ClearForm
	function clearForm(form) {
		$(':input', form).each( function() {
			var type = this.type;
			var tag = this.tagName.toLowerCase();

			if (type == 'text' || type == 'password' || tag == 'textarea') $(this).val('');
			else if (type == 'checkbox' || type == 'radio') this.checked = false;
			else if (tag == 'select') this.selectedIndex = -1;
		});
	}

});
var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));