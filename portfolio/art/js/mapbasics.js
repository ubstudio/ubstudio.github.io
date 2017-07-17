// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("yamap", {
            center: [57.674094, 39.825285],
            zoom: 15.5,
            controls: ["fullscreenControl"]
        });

    myMap.controls
    .add("zoomControl", {
        float: "none",
        position: {
            top: 200,
            right: 10
        }
    })

    myPlacemark = new ymaps.Placemark([57.6739274,39.8210581], { 
            hintContent: 'Crystal Clear', 
            balloonContent: 'Crystal Clear' 
        });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom'); // Отключаем Zoom при прокрутке мыши

}