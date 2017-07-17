$(document).ready(function(){    // Variablies
    var form1 = $('#form1');
    var form2 = $('#form2');
    var form3 = $('#form3');
    var form4 = $('#form4');
 
    $('input').click(function(event) {
       $(this).parent('.field_wrapper').removeClass('error');
    });
 
    // Validation form decoration functions
    // ПРи сложных формах на эти 2 функции можно вешать события при неверном или верном вводе, но у нас это не нужно потому что алерт просто будет // выдавать текс ошибки
    function form_valid() {
        $('.overlay').hide();
        $('#overlay-thx').fadeIn();

        setTimeout(function(){$('#overlay-thx').fadeOut();}, 6000);
    // valid form actions
    }
 
    function form_invalid(form_id) {
        // invalid form action
    }
 
    ///Validate phone number method
    $.validator.addMethod("custom_number", function(value, element) {
        return this.optional(element) || value === "NA" ||
            value.match(/^(((\+[\d]{1,4})|8)(\ |\-)?)?(\([\d\-\ ]{1,6}\))?[\d\-\ ]{4,18}(x[\d]{1,8})?$/);
    }, "Пожалуйста, укажите верный номер телефона");

    $.validator.addMethod("custom_name", function(value, element) {
        return this.optional(element) || value === "NA" ||
            value.match(/^((([а-яА-Я'ії]{2,30})|([a-zA-Z']{2,30}))\ ?){1,3}$/);
    }, "Пожалуйста, укажите верно Ваше имя");

    function check_form(form_id) {
        $(form_id).validate({
            onkeyup: true,
            onfocus: true,
            focusCleanup: true,
            focusInvalid: false,
            rules: {
                
                phone: {
                    required: true,
                    minlength: 6,
                    custom_number: true,
                }
            },

            messages: {
                
                phone: {
                    custom_number: "Пожалуйста, укажите верный номер телефона",
                    required: "Пожалуйста, укажите Ваш номер телефона",
                    minlength: "Пожалуйста, укажите верный номер телефона",
                }
            },
 
            errorPlacement: function(error, element) {
                if(!$(element).parent().hasClass('field_wrapper')) {
                    $(element).wrap( "<div class='field_wrapper'></div>" );
                }
                $(element).parent('.field_wrapper').addClass('error').attr('data-error', error.text());
                form_invalid();
            },
 
            submitHandler: function(form) {
                $(form_id).ajaxSubmit();
                form_valid();
                return false;
            }
        }); // End validation
    }
 
 
    // Cheking forms
    check_form(form1);
    check_form(form2);
    check_form(form3);
    check_form(form4);
     
    
});