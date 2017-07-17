ymaps.ready(function(){
			var PMstart = [53.20722, 50.179892];
			var PMcoords1 = [53.209163, 50.174239];//московское/революционная
			var PMcoords2 = [53.205536, 50.178134];//революционная/дыбенко
			var PMcoords3 = [53.205764, 50.189617];//дыбенко/авроры
			var PMcoords4 = [53.212512, 50.189037];//авроры/гаражная
			var myMap = new ymaps.Map("map", {
				center: [53.20722, 50.178892] ,
				zoom: 16,
			});
			myPlacemark = new ymaps.Placemark(PMstart, {}, {
				iconLayout: 'default#image',
				iconImageHref: 'inc/images/placemark.png',
				iconImageSize: [60, 76],
				iconImageOffset: [-30, -76]
			});
			myMap.geoObjects.add(myPlacemark);
			ymaps.route([PMcoords2, PMstart], {
				mapStateAutoApply: false
			}).then(function (route) {
				route.getPaths().options.set({
					// в балуне выводим только информацию о времени движения с учетом пробок
					balloonContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.humanJamsTime }}'),
					// можно выставить настройки графики маршруту
					strokeColor: '006000',
					opacity: 0.9
				});
				var points = route.getWayPoints();
				points.get(0).options.set('visible', false);
				points.get(1).options.set('visible', false);
				myMap.geoObjects.add(route);
			});
			ymaps.route([PMcoords1, PMstart], {
				mapStateAutoApply: false
			}).then(function (route) {
				route.getPaths().options.set({
					// в балуне выводим только информацию о времени движения с учетом пробок
					balloonContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.humanJamsTime }}'),
					// можно выставить настройки графики маршруту
					strokeColor: '006000',
					opacity: 0.9
				});
				var points = route.getWayPoints();
				points.get(0).options.set('visible', false);
				points.get(1).options.set('visible', false);
				myMap.geoObjects.add(route);
			});
			ymaps.route([PMcoords3, PMstart], {
				mapStateAutoApply: false
			}).then(function (route) {
				route.getPaths().options.set({
					// в балуне выводим только информацию о времени движения с учетом пробок
					balloonContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.humanJamsTime }}'),
					// можно выставить настройки графики маршруту
					strokeColor: '006000',
					opacity: 0.9
				});
				var points = route.getWayPoints();
				points.get(0).options.set('visible', false);
				points.get(1).options.set('visible', false);
				myMap.geoObjects.add(route);
			});
			ymaps.route([PMcoords4, PMstart], {
				mapStateAutoApply: false
			}).then(function (route) {
				route.getPaths().options.set({
					// в балуне выводим только информацию о времени движения с учетом пробок
					balloonContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.humanJamsTime }}'),
					// можно выставить настройки графики маршруту
					strokeColor: '006000',
					opacity: 0.9
				});
				var points = route.getWayPoints();
				points.get(0).options.set('visible', false);
				points.get(1).options.set('visible', false);
				// добавляем маршрут на карту
				myMap.geoObjects.add(route);
			});
});