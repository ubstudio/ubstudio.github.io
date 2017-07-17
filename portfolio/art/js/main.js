$(function(){

 $("#main-carousel").owlCarousel({
 	singleItem: true,
 	navigation : false,
 	mouseDrag : false,
    touchDrag : false,
    autoPlay : 3000
 });

  $("#visual-carousel").owlCarousel({
 	singleItem: true,
 	navigation : false,
 	mouseDrag : false,
    touchDrag : false,
    autoPlay : 2000
 });



 $(".fancybox").fancybox();


$('header a, .footer-logo').click(function(){
    var el = $(this).attr('href');
    $('html, body').animate({
    scrollTop: ($(el).offset().top-90)}, 1000);
    return false; 
});

$("img").lazyload({ threshold : 200 }); 

$('input[type="file"]').change(function() {
    $(this).parents('.filetype').find('.fileformlabel').html('Файл загружен');
});

var reviews = [
["Георгий 27.01.2015 17:09", "Поставили сегодня фартук менее чем за час, установка была немного затруднена тем, что между столешницей и стеной была довольно большая щель, но установке это не помешало. Получилось очень здорово, ребята монтажники работали слаженно и быстро. Цены очень хорошие. Потребовалась небольшая доработка рисунка - бесплатно делается только совсем базовая доработка, что-то более-менее сложное – доплата. Сроки выполнения соблюдены, отношение к клиентам хорошее. В целом буду рекомендовать эту фирму знакомым."],
["Ольга 18. 03. 2015 13:20", "Очень долго подбирали скинали на кухню: то размеров не было для нашей кухни, то картинки были слишком простоватые, то ждать неизвестно сколько. Но сотрудничество с организацией «Арт- объект» сразу решило все эти вопросы. Быстрый выезд, быстрый замер, быстрый подбор нужного изображения, быстрая и качественная доставка и монтаж. Приятный персонал. Чистая и аккуратная работа. Ребята без лишних слов снимают уличную обувь и убирают за собой весь мусор и грязь (столкнувшись с ситуацией, когда положительные эмоции от нового приобретения перекрываются многочасовой уборкой и выносом мусора, начинаешь поистине ценить даже такие, казалось незначительные мелочи). Честная цена, без скрытых доплат, договорные и гарантийные обязательства. Буду советовать знакомым. Спасибо."],
["Алексей 23.03.2015 22:31", "Добрый, день! Хочу поблагодарить всю команду «Арт- объект» за качественную и своевременную работу. Начиная с замера и заканчивая монтажом нашей скинали, все было сделано надежно, быстро и профессионально. Так же отмечу, что цена на порядок ниже чем у конкурентов. Всем буду вас рекомендовать!!!"],
["Анна 15.02.2015 12:50", "Сегодня закончили установку стеклянного фартука для кухни. Стеклянный фартук просто восхитителен. В реальности фартук оказался лучше, чем при разработке дизайнером, рисунок получился четкий, цвета яркие. Хочу выразить благодарность за отлично слаженную работу сотрудников компании «Арт- объект», все сделали быстро и качественно. Спасибо Вам большое! И еще, за установку фартука мы получили чудесную картину на холсте в подарок!"],
["Наталья 28.01.2015 10:50", "Хочу выразить огромную благодарность команде «Арт- объект» за проделанную работу. У меня были кривоватые стены, но мне не отказали в этой красоте. Большое спасибо замерщику за профессионализм, дизайнеру за терпение при работе с рисунком и монтажникам за «творческую» сборку. Процветания вашей компании и что бы от клиентов не было отбоя. Большое вам спасибо!"],
["Елена 27.01.2015 12:09", "Огромное спасибо за вашу работу! Теперь моя кухня стала, неповторима. Отношение в этой компании, к клиентам доброжелательное. Во время работы с рисунком, дизайнер прислушалась к моим желаниям и постаралась собрать рисунок как я хотела. Выполнили все в срок, как и было сказано. Монтажники все аккуратно и быстро установили. Я обязательно буду советовать друзьям вашу компанию."],
["Дмитрий и Анастасия 13.02.2015 18:39", "Хотим выразить благодарность всей команде «Арт- объект»! Мы остались очень довольны, тем, что обратились именно в эту компанию, ведь с момента обращения, до момента появления прекрасной фотопанели в нашей ванной прошло менее двух недель. Низкая стоимость, вежливые сотрудники, высокое качество исполнения, строгое соблюдение сроков... Думаю, что даже самые требовательные клиенты оценят по достоинству высокое качество предоставляемых услуг!!! Рекомендуем всем!!! Огромное спасибо!!!!"],
["Светлана 28.03.2015 15:37", "Добрый день. Выражаем всему коллективу огромную благодарность за воплощение нашей мечты. Дизайнеру Анастасии огромное спасибо за помощь в выборе панно и его создании. Все сработали очень хорошо. Монтаж сделали быстро. Буду рекомендовать Вас всем знакомым. Удачи Вам!!!"]
]

//Всплывающие окна

function closemodal() {
  $(".bg").hide();
  $(".popup").hide();
  $(".thanks").hide();
  $(".popup-cat img").remove();
  $(".popup-review img").remove();
  $(".popup-cat").hide();
  $(".popup-review").hide();
  $('.popup-title, .popup button').empty();
  $(".popup input").val('');
  $(".popup input[name='mail']").show();
  $('form').find('input[name="name"]').val('');
  $('form').find('input[name="phone"]').val('');
  $('form').find('input[name="mail"]').val('');
}


$('.bg, .close').click(function(){
  closemodal();
})

$('.to-call').click(function(){
  $('.popup-title, .popup button').text('Заказать звонок');
  $(".popup input[type='hidden']").val('Заказать звонок');
  $(".popup input[name='mail']").hide();
  $(".bg").fadeIn();
  $(".popup").fadeIn();
})

$('.to-request').click(function(){
  $('.popup-title, .popup button').text('Отправить заявку');
  $(".popup input[type='hidden']").val('Блок: Заказывая фотопанели у нас, Вы получаете БЕСПЛАТНО');
  $(".bg").fadeIn();
  $(".popup").fadeIn();
})

$('.to-measure').click(function(){
  $('.popup-title').text('Заказать замерщика');
  $('.popup button').text('Отправить заявку');
  $(".popup input[type='hidden']").val('Блок: Типы и цены');
  $(".bg").fadeIn();
  $(".popup").fadeIn();
})

$('.to-connect').click(function(){
  $('.popup-title').text('Связаться с менеджером');
  $('.popup button').text('Подтвердить');
  $(".popup input[type='hidden']").val('Блок: Связаться с менеджером');
  $(".popup input[name='mail']").hide();
  $(".bg").fadeIn();
  $(".popup").fadeIn();
})

$('.to-review').click(function(){
  $(".bg").fadeIn();
  var atr_img = $(this).find('img').attr('src');
  var atr_num = $(this).data('numrev');
  console.log(atr_num);
  $('.popup-title').text(reviews[(atr_num - 1)][0]);
  $('.popup-text').text(reviews[(atr_num - 1)][1]);
  $('.popup-review').prepend("<img src='" + atr_img + "'>");
  $(".popup-review").fadeIn();
})

$.ajax({
  type: 'POST',
  url: './func.php',
  success: function(data){
    document.CATALOGITEM = JSON.parse(data);
    $('.first').trigger('click');
  }
});

$(document).ajaxComplete(function() {

 $('.catalog').on("click", ".btn-cat", function(){
  $(".bg").fadeIn();
  var atr_img = $(this).parents('.catalog-item').find('img').attr('src');
  var atr_num = $(this).parents('.catalog-item').find('.catnum').html();
  $(".popup-cat input[name='place']").val("Заказать " + atr_num + " из каталога");
  $(".popup-cat input[name='number']").val(atr_num);
  $('.popup-cat .popup-cat-img').html("<img src='" + atr_img + "'>");
  $('.popup-cat').fadeIn();

});





});


function drawElements(category) {

  var car = [];
  var arr =  document.CATALOGITEM[category];
 for (var i = 0; i < arr.length; i++) {
            car[car.length] = "<div class='catalog-item'><div class='catalog-hover'><div class='catnum'> № " + arr[i].substring(arr[i].indexOf(".jpg") + 4) + "</div><button class='btn-orange btn-160 btn-cat'>Выбрать</button></div><img class='img_cat' src='" + arr[i].substring(0, arr[i].indexOf(".jpg") + 4) + "' alt='cat'></div>";
        }

  $(".catalog-wrap").empty();
  var content = "<div class='carousel1'>";
  var i = 0; var carousel_size = 1;

  $(car).each(function(index, el) {
    i++;
    content += el;

    if (i == 16) {
      carousel_size++;
      content += "</div><div class='carousel" + carousel_size + "'>";
      i = 0;
    }
  });

  content += "</div>";
  $(".catalog-wrap").append(content);

  //Initialize Plugin
  $("#carousel-wrap").owlCarousel()

  //get carousel instance data and store it in variable owl
  var owl = $("#carousel-wrap").data('owlCarousel');

  owl.reinit({
    items: 1,
    navigation : true,
    mouseDrag : false,
    pagination: false,
    paginationSpeed: 0,
    touchDrag : false,
    rewindNav: false,
    navigationText : ["предыдущие","следующие"]
   });

}

$('.select').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  drawElements($(this).data('category'));
})

//маска для вводе телефонного номера
$('input[name^="phone"]').mask('+7 (999) 999-99-99', {placeholder: '_'});

});

var CATALOGITEM;