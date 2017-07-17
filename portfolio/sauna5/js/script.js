$(document).ready(function(){
    $('.scrollto').click(function(event){
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var fix = 0;
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;
        var scrTop = $(window).scrollTop();
        if(target_top != scrTop){ $('html, body').animate({scrollTop:target_top}, 500);}
    });
    $(window).on({
      scroll: function(){
          winS = $(window).scrollTop();
          if ( winS >= 90 ) $('.menu').addClass('fixed');
          else $('.menu').removeClass('fixed');
      }
    });
    
    $('.popup').fancybox({
        scrolling: 'visible'
    });

    $('.flexslider').flexslider({
        animation: "slide",
        prevText: " ", 
        nextText: " ",
        controlNav: false
    });
    
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 171,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });    
    $('#carousel1').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 171,
        asNavFor: '#slider1'
    });

    $('#slider1').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel1"
    });    
    
    
    

    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map("map", {
            center: [55.7029,37.5949],
            zoom: 14,
            controls: []
        });
        var myPlacemark1 = new ymaps.Placemark([55.7030,37.5914]);      
        
        myMap.behaviors.disable(['scrollZoom']);
        myMap.controls.add('zoomControl', { left: 5, top: 5 })
        myMap.geoObjects
            .add(myPlacemark1);
    }

    
    
});



var submitForm = function(form) {
	$.post(
		'./php/form.php',
		$('#' + form).serialize(),
		function( response ) {
			var data = $.parseJSON(response);
			if ( data.result == 'ok' ){
                $('#' + form)[0].reset();
                $.fancybox( {href : '#win_success'});
                window.onload = function() {
                    yaCounterCOUNTER_ID.reachGoal('call_back')
                };
            }
            else{
                $('#' + form +' .error').addClass('active');
                var top;
                var left;
                if(data.message == 'phone'){
                    if(form == 'form3') {top = '191px';left = '40px';}
                    if(form == 'form1') {top = '62px';left = '300px';}
                    if(form == 'form2') {top = '106px';left = '0px';}
                }
                $('.error').css('left', left);$('.error').css('top', top);
            }
        }
	)
	return false;
};


