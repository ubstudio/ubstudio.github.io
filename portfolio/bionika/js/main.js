$(document).ready(function() {

// Переключение между категориями продукции

$('.tab-nav').click(function(event) {
  var id = $(this).data('target');
  $('.tab-nav').removeClass('active');
  $(this).addClass('active');
  $('.tab').fadeOut();
  $('#' + 'tab' + id).fadeIn();
});

// Подключение и настройки WOW animate

 wow = new WOW({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       50          // default
  })
wow.init(); 



// Подключение и настройки Owl-carousel


$(".owl-carousel").owlCarousel({

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],

    navigation : true,
    navigationText : ["",""],
    rewindNav : true,
    scrollPerPage : false,
 
    pagination : false


});



// Появление модальных окон


function closeModal() {
    $('.modal-win').fadeOut();
    $('.bg').fadeOut();
    $('form').find('input[name^="phone"').val('');
    $('form').find('input[name^="name"').val('');
    $('form').find('input[name^="mail"').val('');
}

$('.bg, .close, .btn-ok').click(function(event) {
    closeModal();
});

$('.to-call').click(function(event) {
    $('.bg').fadeIn();
    $('.modal-call').fadeIn();
});

$('.to-get').click(function(event) {
    $('.bg').fadeIn();
    $('.modal-get').fadeIn();
});

$('.to-proj').click(function(event) {
    $('.bg').fadeIn();
    $('.modal-proj').fadeIn();
});

$('.to-cons').click(function(event) {
    $('.bg').fadeIn();
    $('.modal-cons').fadeIn();
});

$('.to-part').click(function(event) {
    $('.bg').fadeIn();
    $('.modal-part').fadeIn();
});


$('.more').click(function(event) {
  var id = $(this).data('target');
  $('.bg').fadeIn();
  $('.modal-' +  id).fadeIn();
});

$('.prod').click(function(event) {
  var id = $(this).data('product');
  $('.modal-prod .prod-h').html( id );
  $('.modal-win').fadeOut();
  $('.bg').fadeIn();
  $('.modal-prod').fadeIn();
});

 $('input[name^="phone"]').mask('+7 (999) 999-99-99', {placeholder: '_'});
 $('input[name^="field_phones"]').mask('+7 (999) 999-99-99', {placeholder: '_'});

});
