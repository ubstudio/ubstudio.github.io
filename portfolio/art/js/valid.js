$(document).ready(function() {

    // Variablies
var form1 = $('#form1');
var form2 = $('#form2');
var form3 = $('#form3');
var form4 = $('#form4');
var form5 = $('#form5');

function form_valid() {

    $('.popup, .popup-review, .popup-cat').hide();
    $('.bg').fadeIn();
    $('.thanks').fadeIn();
}

function form_invalid() {
    setTimeout(function() {
    $('.error').removeClass('error');
    }, 5000);
}

    function check_form(form_id) {
        $(form_id).validate({
            onkeyup: true,
            onfocus: true,
            focusCleanup: true,
            focusInvalid: false,
            rules: {
                phone: {
                    required: true
                },
            },
 
            errorPlacement: function(error, element) {
                form_invalid();
            },
 
            submitHandler: function(form) { 
                $(form_id).ajaxSubmit();
                form_valid();
                return false;
            }
        }); 
    }

 
check_form(form1);
check_form(form2);
check_form(form3);
check_form(form4);
check_form(form5);


});



                