/**
 * Created by roman_000 on 15.07.2016.
 */
$(window).load(function(){
    $('.open').click(function (event) {
        event.preventDefault();
        $('.fixedMenu').addClass('active');
        $('.overlay').fadeIn();
        $('.open').css({display: 'none'});
        $('.close').css({display: 'block'});
    });

    $('.overlay').click(function (event) {
        if ($('.fixedMenu').hasClass('active')) {
            $('.fixedMenu').removeClass('active');
        }
        $('.overlay').fadeOut();
        $('.open').css({display: 'block'});
        $('.close').css({display: 'none'});
    });

    $('.fixedMenu').swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $('.fixedMenu').removeClass('active');
            $('.overlay').fadeOut();
            $('.open').css({display: 'block'});
            $('.close').css({display: 'none'});
        },
        threshold: 0
    });

    $('.close').click(function (event) {
        if ($('.fixedMenu').hasClass('active')) {
            $('.fixedMenu').removeClass('active');
        }
        $('.overlay').fadeOut();
        $('.open').css({display: 'block'});
        $('.close').css({display: 'none'});
    });

    $('.fancybox-modal').fancybox({padding: 0});

   

$("input[name=phone]").mask("+7 (999) 999-99-99");

    var options = {
        delegation: true,
        clearForm: true,
        resetForm: true,
        type: 'post',
        beforeSubmit: function () {
            $.fancybox.close();
        },
        success: function () {
            $.fancybox({href: "#popupThanks", type: 'inline'});
        },
        error: function () {
            $.fancybox({href: "#popupError", type: 'inline'});
        }
    }
    $('#popup1Form').ajaxForm(options);
});
$("#popup1Form").validate({
    rules: {
        name: {required: true, maxlength: 100,},
        email: {required: true, maxlength: 100, email: true,},
        phone: {required: true, minlength: 10, maxlength: 25,},


    },
    messages: {
        name: {required: "", maxlength: "",},
        email: {required: "", maxlength: "",},
        phone: {required: "", minlength: "", maxlength: "",},
    }
});

 function scrollToElement(element, offset) {
  $(element).click(function(e) {
    var elementClick = $(this).attr("href");
    var destination  = $(elementClick).offset().top;
    if(destination < 0) {destination = 0;}
    $('html, body').animate({scrollTop: destination - offset}, "slow");
    $("img.close")[0].click()
    e.preventDefault();
  });
}
scrollToElement("a[href='#f0']",80);
scrollToElement("a[href='#f1']", 120);
scrollToElement("a[href='#f2']", 120);
scrollToElement("a[href='#f3']", 0);
