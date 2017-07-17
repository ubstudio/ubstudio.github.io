$(document).ready(function() {

    // Variablies
var form1 = $('#form1');
var form2 = $('#form2');
var form3 = $('#form3');
var form4 = $('#form4');
var form5 = $('#form5');
var form6 = $('#form6');
var form7 = $('#form7');
var form8 = $('#form8');
var form9 = $('#form9');


 
function form_valid() {
    $('.modal-win').fadeOut();
    $('.modal-ok').fadeIn();
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
                    required: true,
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
 
 
check_form(form2);
check_form(form4);
check_form(form6);
check_form(form7);
check_form(form8);
check_form(form9);

       
});