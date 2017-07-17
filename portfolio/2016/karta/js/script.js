/*

	by LetMeCode.ru
	skype: letmecode.ru
	phone: +7 (938) 500-4-700

*/



jas.hook_set('ready', function() {
	time();
	new WOW().init();
	$("[name=phone]").mask("+7 (999) 999-99-99");
	jas.find('form').each(function() {
		var j = jas(this);
		if (j !== null) {
			j.hook_set('process_begin', function(t, s) {
				this.disable();
				var s = jas.set(this.element);
				s.find('.jas_form_submit').each(function() {
					this.style.display = 'none';
				});
				s.find('._t1').each(function() {
					this.style.display = 'block';
					this.innerHTML = 'Подождите, идёт отправка';
				});
			})
			.hook_set('process_end', function(t, s) {
				jas.set(this.element).find('._t1').html('Успешно отправлено! Спасибо!');
				$('.popup .close').click();
				jas('.popup_thanks').show();
			});
		}
	});
});


timeend = new Date();
timeend = new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%46; today=Math.floor(today/24);
    jas.find('#thours').html(thour);
    jas.find('#tminutes').html(tmin);
    jas.find('#tseconds').html(tsec);
    window.setTimeout("time()",1000);
}
