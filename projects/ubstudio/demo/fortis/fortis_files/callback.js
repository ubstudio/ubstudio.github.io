
jQuery(function($){
     
    $(".masked").mask("+7(999) 999-99-99");
    
});





// MODAL CALLBACK END 



function formCheck(name, phone) {


    
    //Проверка всех условий на заполненные поля
    if (name == '' || name.length < 2 || phone == '' || phone.length < 17) {
                
                
                
                //Проверка поля имени
                if (name == '' || name.length < 2 ) {
    
                // $(".inp.one").css({"background": "url(\'../img/icon1.png\') 10px center no-repeat"});
                // $(".inp.one").css({"background": "rgba(255,0,0,0.5)"});
                 
                                             
//                        setTimeout(function() {
//                        
//                          $(".inp.one").css({"background": "url(\'../img/icon1.png\') 10px center no-repeat"});
//                          $(".inp.one").css({"background-color": "#d8d9d8"});

//                        
//                        }, 4000);
                        
                        
                    
                }
                
                //Проверка поля телефон
                if (phone == '' || phone.length < 17) {
    
                    
              //   $(".inp.two").css({"background": "url(\'../img/icon2.png\') 10px center no-repeat"});
              //   $(".inp.two").css({"background": "rgba(255,0,0,0.5)"});
                 
                                             
//                        setTimeout(function() {
//                        
//                          $(".inp.two").css({"background": "url(\'../img/icon2.png\') 10px center no-repeat"});
//                          $(".inp.two").css({"background-color": "#d8d9d8"});

//                        
//                        }, 4000);
                    
                }

                 
    }
    
    else {
               
    
                $.ajax({

                type: "POST",
                url: "/index.php?act=send3",
                data: "name="+ name+"&phone="+ phone,

                
                // Выводим то что вернул PHP

                success: function(html) {

    
                       $("input").val('');
                       
                       $(".form_modal").fadeOut();
                       
                       $(".modal_shadow").fadeIn();
                       $("body").append('<div class="message"><div class="close"><img src="/img/close.png" alt="close" onclick="hidemessage();" /></div>Спасибо, Ваш заказ принят.<br /> Наш менеджер свяжется с Вами в ближайшее время.<br /> <p>С Уважением, администрация сайта.</p></div>');
                       $(".message").fadeIn();

                       
                
                }                    
                 
                });
    }
    


   
    
    
}