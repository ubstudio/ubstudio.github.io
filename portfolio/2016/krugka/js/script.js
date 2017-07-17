/*

	by GetLP.pro

*/



jas.hook_set('ready', function() {
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
					this.style.display = 'inline-block';
					this.innerHTML = 'Подождите, идёт отправка';
				});
			})
			.hook_set('process_end', function(t, s) {
				jas.set(this.element).find('._t1').html('Успешно отправлено! Спасибо!');
				document.getElementById('ccc').click();
				jas('.popup_thank').show();
			});
		}
	});
});

function show_popup(n) {
	var a = {
		1: {
			'title'		: 'Оставьте заявку чтобы получить бесплатную консультацию',
			'button'	: 'Получить консультацию',
			'source'	: 'Кнопка Получить консультацию в хедере',
			'goal'		: 'GOAL2'
		},
		2: {
			'title'		: 'Оставьте заявку чтобы получить подробный план открытия магазина',
			'button'	: 'Получить план открытия',
			'source'	: 'Кнопка Получить подробный план открытия магазина в Посмотрите на наш магазин',
			'goal'		: 'GOAL3'
		},
		3: {
			'title'		: 'Оставьте заявку чтобы узнать подробнее о нашей франшизе',
			'button'	: 'Оставить заявку',
			'source'	: 'Узнать подробнее в эконом',
			'goal'		: 'GOAL4'
		},
		4: {
			'title'		: 'Оставьте заявку чтобы узнать подробнее о нашей франшизе',
			'button'	: 'Оставить заявку',
			'source'	: 'Узнать подробнее в стандарт',
			'goal'		: 'GOAL5'
		},
		5: {
			'title'		: 'Оставьте заявку чтобы узнать подробнее о нашей франшизе',
			'button'	: 'Оставить заявку',
			'source'	: 'Узнать подробнее в премиум',
			'goal'		: 'GOAL6'
		}
	}
	jas.find('.popup_call .t1').html(a[n]['title']);
	jas.find('.popup_call .btn span').html(a[n]['button']);
	jas('.popup_call form').source = a[n]['source'];
	jas.find('.popup_call form').attr_set('onsubmit', 'yaCounter40366270.reachGoal(' + '"' + a[n]['goal'] + '"' + ');');
	jas('.popup_call').show();
}
