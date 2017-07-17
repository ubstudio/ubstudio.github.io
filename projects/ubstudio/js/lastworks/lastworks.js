
$(function() {



    //Перебираем все элементы
    $('.gallery ul li').each(function(){
         var $obj = $(this); // Назначаем объект

            // При наведении caption display: block;
            $obj.stop(true,false).hover(function(){



                var width = $obj.width();
                var height = $obj.height();
                var padding = 0;


                $(this).find(".caption").css({width: "0", height: "0"});
                $(this).find(".caption").css({display: "block"});
                $(this).find(".caption").stop(true,true).animate({width: width + padding + 'px', height: height + padding + 'px'}, {duration: 300});

            },  //Иначе caption display: none
                function() {

                $(this).find(".caption").fadeOut();

            });

     });

});
