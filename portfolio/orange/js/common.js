$(document).ready(function() {
	
	var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       false,
    live:         true,
    callback:     function(box) {
    },
    scrollContainer: null
  }
);
wow.init();
	
	$("body").on("click","a", function (event) {  
        var id  = $(this).attr('href'),
            top = $(id).offset().top -50;
        $('body,html').animate({scrollTop: top}, 1500);
    });


	$('#download').magnificPopup({
		items: {
		src: '#modal',
  		type:'inline',
		}
	});
	$('.btn_header').magnificPopup({
		items: {
		src: '#modal',
  		type:'inline',
		}
	});
	$('#callback').magnificPopup({
		items: {
		src: '#modal_call',
  		type:'inline',
		}
	});
	$('#soopd').magnificPopup({
		items: {
		src: '#sogl',
  		type:'inline',
		}
	});
	$('#vsogl').magnificPopup({
		items: {
		src: '#modal_call',
  		type:'inline',
		}
	});

	$('#ham').click(function(){
		$(".togle_mnu ul").addClass("fadeInRight animated");
		$(".togle_mnu").addClass("fadeIn animated");
		$('.togle_mnu').css("display", "block");
	});
	$('.close_btn').click(function(){
		$(".togle_mnu ul").addClass("fadeInRight animated");
		$(".togle_mnu").addClass("fadeIn animated");
		$(".togle_mnu").fadeOut(100);
	//	$('.togle_mnu').css("display", "none");
	});
	/*$('#cls_btn_tgl').click(function(){
		$(".togle_mnu ul").addClass("fadeInRight animated");
		$(".togle_mnu").addClass("fadeIn animated");
		$(".togle_mnu").fadeOut(100);
	});*/
	
	$(window).load(function() {
    	$('.flexslider').flexslider({
    		itemWidth: 500,
    		minItems: 1,
    		maxItems: 2,
    		directionNav: false, 
    		move: 1,
    		animation: "slide",
    		slideshow: true,
    		itemMargin: 20,
    		pauseOnHover: true,

    	});
 	});

	function heightDetect() {
		$(".main_head").css("height", $(document).height());
		$(".home").css("height", $(document).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	function hover() {
		$(".arw").onMouseOver(function(){
		$("#a_h").removeClass(".no_active");
		})
	};


});


	function call() {
     	var msg   = $('#sender_1').serialize();
        $.ajax({
          type: 'POST',
          url: 'sender.php',
          data: msg,
          success: function(data) {
      		$.magnificPopup.open({
  				items: {
    			src: '#thx', // can be a HTML string, jQuery object, or CSS selector
    			type: 'inline'
  				}
				});
          },
          error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
		};

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".logo_box img").addClass('animated fadeInDown');
	$(".heading h1").addClass('animated fadeInUp');
	$('.heading h2').addClass('animated fadeInUp');
	$('.btn_part').addClass('animated bounce');
	$('.btn_ych').addClass('animated bounce');
});
/*$("h1").animated("fadeInUp", "");
$(".home .heading_container p").animated("fadeInDown", "");
$(".home .h_img img").animated("fadeInLeft", "");
$(".home .h_img_p img").animated("fadeInLeft", "");
$(".home .about ul").animated("fadeInRight", "");
$("#econom .econom .e_img").animated("fadeInLeft", "");
$(".econom .e_descr").animated("fadeInRight", "");
$(".econom .e_dl").animated("fadeInRight", "");
$(".econom .e_descr2").animated("fadeInRight", "");
$(".gift .col-md-4").animated("fadeInLeft", "");
$(".install .col-md-4").animated("fadeInLeft", "");
$(".install .apple").animated("fadeInLeft", "");
$(".install .android").animated("fadeInRight", "");
$(".opros .item").animated("fadeIn", "");
$(".mistake .row").animated("fadeInRight", "");
$(".partners .col-md-4").animated("fadeInLeft", "");
$(".partner .up").animated("fadeInDown", "");
$(".partner .down").animated("fadeInUp", "");*/

$(function(){

$('.ans').hide();
$('#ans-1').show();
$('#ques-1').addClass('openQuestion');

// Скрытие и появление элементов блока "Ответы на вопросы"
$('.question').click(function(){
  if ( $(this).hasClass('openQuestion') ) {
    $(this).parents('.answer').find('.ans').hide();
    $(this).removeClass('openQuestion');
	$('.ans').removeClass('fadeInDown animated');
	$('.ans').addClass('fadeInUp animated');
  } else {
    $('.question').removeClass('openQuestion');
    $('.ans').hide();
    $(this).parents('.answer').find('.ans').show();
	$('.ans').removeClass('fadeInUp animated');
    $(this).addClass('openQuestion fadeInDown animated');
	$('.ans').addClass('fadeInDown animated');
  }
});

	

});
