

function countYears() {

    var k = 0,
        n = 0;
    var timeout;

    var count = function() {
        k++;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (k < n) {

            $('#countYear').text(k);
            timeout = setTimeout(count, 150);
        }
    };

    count();

    $(function(){

        var counter = $('#countYear').text();
        counter = 10;

        n = counter+1;

        count();

    })

}



function countClients() {

    var k = 0,
        n = 0;
    var timeout;

    var count = function() {
        k++;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (k < n) {

            $('#clients').text(k);
            timeout = setTimeout(count, 10);
        }
    };

    count();

    $(function(){

        var counter = $('#clients').text();
        counter = 100;

        n = counter+1;

        count();

    })

}

function countMoney() {


    var k = 0,
        n = 0;
    var timeout;

    var count = function() {
        k++;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (k < n) {

            $('#countMoney').text(k);
            timeout = setTimeout(count, 100);
        }
    };

    count();

    $(function(){

        var counter = $('#countMoney').text();
        counter = 30;

        n = counter+1;

        count();

    })

}

function countRange() {


    $(function() {

        $('.countRange').css({display: 'block'});

    })



    var k = 0,
        n = 0;
    var timeout;

    var count = function() {
        k++;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (k < n) {

            $('#countRange').text(k);
            timeout = setTimeout(count, 300);
        }
    };

    count();

    $(function(){

        var counter = $('#countRange').text();
        counter = 7;

        n = counter+1;

        count();

    })

}



$(function () {
//
//    $("body").css("overflow", "hidden");
//    var $preloader = $('#page-preloader'),
//        $spinner   = $preloader.find('.spinner');
//
//    $preloader.delay(300).fadeOut('slow');
//
//   setTimeout('$("body").css("overflow", "visible")', 4000)
//




$('#countYear').text('0');
$('#clients').text('0');
$('#countMoney').text('0');
$('#countRange').text('0');
$('.countMoney').css({display: 'none'});
$('.countRange').css({display: 'none'});


//fly
//
//function fly() {

//    $("#samolet1").css({top: "690px", left: "-650px"});
//    $("#samolet1").animate({
//
//            left: "1920px",
//            top: "-900px"

//    }, 8000 , "linear");
//
//

//}
//setInterval(function() {

//    fly();

//}, 12000)



});




function hidemodal() {
   $("#page-order-ok").fadeOut();
   $("#message").fadeOut();
}

function hidemodal_error() {
   $("#page-order-ok").fadeOut();
   $("#message_error").fadeOut();
}


jQuery(function($){

    $("#f1_phone").mask("+7(999) 999-99-99");

});


$(document).ready(

  function() {

    $("html").niceScroll({scrollspeed: 100, mousescrollstep: 70, smoothscroll: true});

  }

);
