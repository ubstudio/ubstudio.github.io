$(document).ready(function(){
  $("#owl1").owlCarousel({
    items : 1,
    autoplay : true,
    smartSpeed: 1000,
    paginationSpeed : 50,
    nav: false,
    dots: true,
    autoWidth : false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    center: true,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    freeDrag: false,
    loop: true,
    // autoplay: true,
    slideSpeed: 5000,
  });


$('.fancybox-modal').fancybox({padding: 0});

$(window).scroll(function() {
        if ($(this).scrollTop() > 606){
            $(".scrollimage").addClass( "pos1" );
            $(".scrollimage").removeClass( "pos2" );
            $(".scrollimage").removeClass( "pos3" );
          }
          else{}
      });
$(window).scroll(function() {
        if ($(this).scrollTop() > 806){
            $(".scrollimage").addClass( "pos2" );
            $(".scrollimage").removeClass( "pos1" );
            $(".scrollimage").removeClass( "pos3" );
          }
          else{}
      });
$(window).scroll(function() {
        if ($(this).scrollTop() > 1256){
            $(".scrollimage").addClass( "pos3" );
            $(".scrollimage").removeClass( "pos2" );
            $(".scrollimage").removeClass( "pos1" );
          }
          else{}
      });

  var options = {
    delegation: true,
    clearForm: true,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      $.fancybox.close();
    },
    success: function() {
      $.fancybox({href: "#popupThanks", type: 'inline', padding: 0});
    },
    error: function() {
      $.fancybox({href: "#popupError", type: 'inline', padding: 0});
    }
  }
  $('#form1').ajaxForm(options);
  $('#form2').ajaxForm(options);
  $('#form5').ajaxForm(options);
  $('#form6').ajaxForm(options);
  $('#form7').ajaxForm(options);
  $('#form8').ajaxForm(options);
  $('#form9').ajaxForm(options);
  $('#form10').ajaxForm(options);
  $('#form11').ajaxForm(options);
  $('#form12').ajaxForm(options);

  
$("input[name=phone]").mask("+7 (999) 999-99-99");
});

$("#form1").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form2").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});

$("#form5").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form6").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form7").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form8").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form9").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
    mess:{required: true, maxlength: 500,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    mess:{required: "", maxlength: "",},
  }
});
$("#form10").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form11").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form12").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});

function scrollToElement(element, offset) {
  $(element).click(function(e) {
    var elementClick = $(this).attr("href");
    var destination  = $(elementClick).offset().top;
    if(destination < 0) {destination = 0;}
    $('html, body').animate({scrollTop: destination - offset}, "slow");
    e.preventDefault();
  });
}
scrollToElement("a[href='#f0']", 50);
scrollToElement("a[href='#f1']", 90);
scrollToElement("a[href='#f2']", 72);
scrollToElement("a[href='#f3']", 100);


$( ".content1" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content1" ).toggleClass('active');
});
$( ".content2" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content2" ).toggleClass('active');
});
$( ".content3" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content3" ).toggleClass('active');
});
$( ".content4" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content4" ).toggleClass('active');
});
$( ".content5" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content5" ).toggleClass('active');
});
$( ".content6" ).click(function( e ) {
  $( ".cntblck" ).removeClass('active');
  $( ".content6" ).toggleClass('active');
});
$( ".opencontent1" ).click(function( e ) {
  $( ".cnt1" ).addClass('active');
  $( ".opencontent1" ).addClass('active');
  e.preventDefault();
});
$( ".opencontent2" ).click(function( e ) {
  $( ".cnt2" ).addClass('active');
  $( ".opencontent2" ).addClass('active');
  e.preventDefault();
});
$( ".opencontent3" ).click(function( e ) {
  $( ".cnt3" ).addClass('active');
  $( ".opencontent3" ).addClass('active');
  e.preventDefault();
});
