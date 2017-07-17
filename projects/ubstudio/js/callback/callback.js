


    function showmodal(type) {

        $(function() {

            jQuery(function($){

                $(".masked").mask("+7(999) 999-99-99");

            });

            if (type == 'free_consultant') {

                $(".gameModal").css({display: "none"});
                $(".lightLayer").fadeOut();
                $("body").append('<div class="modal_shadow"></div>');
                $("body").append('<div class="form_modal"><div class="close" onclick="hidemodal();"></div><div class="form-container"><div class="name"><span class="font-36 green">Оставьте заявку</span><br /><span class="font-26">и мы перезвоним вам</span><br /><span class="font-22 green">в течение <span class="font-30">60</span> секунд</span></div><form><div class="inp one"><input id="f1_name" type="text" placeholder="Ваше имя" /></div><div class="inp two"><input id="f1_phone" class="masked" type="text" placeholder="Ваш телефон" /></div><div class="inp three"><input id="f1_email" type="text" placeholder="Ваш Email" /></div><a class="button_send" href="javascript:void(0)" onclick="formCheck(document.getElementById(\'f1_name\').value,document.getElementById(\'f1_phone\').value,document.getElementById(\'f1_email\').value,\'free_consultant\');">Отправить</a></form></div></div>');
                $(".modal_shadow").fadeIn();
                $(".form_modal").fadeIn();

            }


            if (type == 'sale') {


                $("body").append('<div class="modal_shadow"></div>');
                $("body").append('<div class="form_modal"><div class="close" onclick="hidemodal();"></div><div class="form-container"><div class="name"><span class="font-36 green"><span class="font-24 lineHeight-20">Подпишитесь<br /> на нашу группу <a class="default" href="http://vk.com/it_service174" target="_blank">vk.com/it_service174</a></span><br /><br />и получите 5% скидку</span></div><form><div class="inp one"><input id="f1_name" type="text" placeholder="Ваше имя" /></div><div class="inp two"><input id="f1_phone" class="masked" type="text" placeholder="Ваш телефон" /></div><div class="inp three"><input id="f1_email" type="text" placeholder="Ваш Email" /></div><a class="button_send" href="javascript:void(0)" onclick="formCheck(document.getElementById(\'f1_name\').value,document.getElementById(\'f1_phone\').value,document.getElementById(\'f1_email\').value,\'order\');">Отправить</a></form></div></div>');
                $(".modal_shadow").fadeIn();
                $(".form_modal").fadeIn();

            }

            if (type == 'order') {

                $(".gameModal").css({display: "none"});
                $(".lightLayer").fadeOut();
                $("body").append('<div class="modal_shadow"></div>');
                $("body").append('<div class="form_modal"><div class="close" onclick="hidemodal();"></div><div class="form-container"><br /><div class="name"><span class="font-36 green"><span class="font-24 lineHeight-20">Пожалуйста<br /> заполните поля и получите</span><br /><span class="font-26 lineHeight-28">коммерческое предложение</span><br /></span></div><form><div class="inp one"><input id="f1_name" type="text" placeholder="Ваше имя" /></div><div class="inp two"><input id="f1_phone" class="masked" type="text" placeholder="Ваш телефон" /></div><div class="inp three"><input id="f1_email" type="text" placeholder="Ваш Email" /></div><a class="button_send" href="javascript:void(0)" onclick="formCheck(document.getElementById(\'f1_name\').value,document.getElementById(\'f1_phone\').value,document.getElementById(\'f1_email\').value,\'order\');">Отправить</a></form></div></div>');
                $(".modal_shadow").fadeIn();
                $(".form_modal").fadeIn();

            }

        });


    }



    function hidemodal() {

        $(function() {

            $(".form_modal").fadeOut();

                setTimeout(function(){

                    $(".modal_shadow").fadeOut(500);

                },500);

                setTimeout(function(){

                    $(".modal_shadow").remove();
                    $(".form_modal").remove();

                },1000);


        });

    }

    function hidemessage() {

        $(function() {

            $(".message").fadeOut();
            $(".modal_shadow").fadeOut();
            $(".modal_shadow").remove();
            $(".form_modal").remove();
        });

    }


// MODAL CALLBACK END

function formCheck(name, phone, mail, type) {



    //Проверка всех условий на заполненные поля

                function isValidEmailAddress(mail) {
                    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                    return pattern.test(mail);
                }


    if (name == '' || name.length < 2 || phone == '' || phone.length < 17 || !isValidEmailAddress(mail)) {



                //Проверка поля имени
                if (name == '' || name.length < 2 ) {


                        $(".inp.one").append('<div class="error">Заполните поле</div>');
                        $(".error").fadeIn();


                        setTimeout(function() {

                        $(".error").fadeOut();
                        $(".error").remove();



                        }, 4000);



                }

                //Проверка поля телефон
                if (phone == '' || phone.length < 17) {


                        $(".inp.two").append('<div class="error">Заполните поле</div>');
                        $(".error").fadeIn();


                        setTimeout(function() {

                        $(".error").fadeOut();
                        $(".error").remove();



                        }, 4000);

                }

                //Проверка Email

                if (mail == '' || !isValidEmailAddress(mail)) {


                        $(".inp.three").append('<div class="error">Заполните поле</div>');
                        $(".error").fadeIn();


                        setTimeout(function() {

                        $(".error").fadeOut();
                        $(".error").remove();



                        }, 4000);

                }

    }

    else {


             if (type == 'free_consultant') {


                       $(".form_modal").append('<div class="message">Спасибо, Ваша заявка принята.<br /> Наш менеджер свяжется с Вами через.<br /><br /><br /><span id="seconds" class="font-80 bold-700 lineHeight-30">60</span><br />ceкунд<p>С Уважением, команда UB Studio.</p></div>');
                       $(".form-container").fadeOut();

                        setTimeout(function() {

                            $(".message").fadeIn();


                                    function countSeconds() {

                                        var k = 60,
                                            n = 0;

                                            var timeout;

                                            var count = function() {
                                                k--;

                                                if (timeout) {
                                                    clearTimeout(timeout);
                                                }

                                                if (k > -1) {

                                                    $('#seconds').text(k);
                                                    timeout = setTimeout(count, 1000);
                                                }


                                                if (k == '1') {

                                                    hidemodal();

                                                }

                                            };




                                            $(function(){

                                                var counter = $('#seconds').text();
                                                counter = 60;

                                                n = counter;

                                                count();

                                            })


                                    }



                                    countSeconds();



                            }, 700);

              }




              if (type == 'contacts_slide') {


                       $(".form.slide5").append('<div class="message">Спасибо, что выбрали нас!<br /><a href="/brif.doc" target="_blank">Ссылка на бриф</a><br /><br /><span class="font-20">С Уважением, команда UB Studio.</span></div>');
                       $(".form.slide5 form").fadeOut();

                        setTimeout(function() {

                            $(".message").fadeIn();

                        }, 700);

              }



              if (type == 'order') {


                       $(".form_modal").append('<div class="message">Спасибо, Ваша заявка принята.<br /> Наш менеджер свяжется с Вами<br /> в ближайнее время<p>С Уважением, команда UB Studio.</p></div>');
                       $(".form-container").fadeOut();

                        setTimeout(function() {

                            $(".message").fadeIn();

                            }, 700);

              }









                $.ajax({

                type: "POST",
                url: "/index.php?act=send3",
                data: "name="+ name+"&phone="+ phone+"&email="+ mail+"&type"+ type,


                // Выводим то что вернул PHP

                success: function(html) {


                       $(function() {

                                $("form").trigger("reset");
//                                $(".gameModal table").css({display: "block"});
//                                $(".gameModal p").css({display: "block"});
//                                $(".gameModal a").css({display: "block"});
//                                $(".gameModal .form-container").remove();

                       });


                }

                });
    }


}

            jQuery(function($){

                $(".masked2").mask("+7(999) 999-99-99");

            });
