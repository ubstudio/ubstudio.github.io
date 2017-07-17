

$(document).ready(function(){
 
 $('.fancybox1').fancybox({padding: 0});
 var options = {
    delegation: true,
    clearForm: true,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      $.fancybox.close();
    },
    success: function() {
      $.fancybox({href: "#thk", type: 'inline'});
    },
    error: function() {
      $.fancybox({href: "#popupError", type: 'inline'});
    }
  }
 $('#form1').ajaxForm(options);
 $('#form2').ajaxForm(options);
 $('#popup1Form').ajaxForm(options);
});

   
$("#form1").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,}


  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",}
  }
});

$("#form2").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100,},


  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
  }
});

$("#popup1Form").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,}


  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",}
  }
});
function scrollToElement(element, offset) {
  $(element).click(function(e) {
    var elementClick = $(this).attr("href");
    var destination  = $(elementClick).offset().top;
    if(destination < 0) {destination = 0;}
    $('html, body').animate({scrollTop: destination - offset}, "slow");
    e.preventDefault();
  });
}
scrollToElement("a[href='#f0']",20);
scrollToElement("a[href='#tpp']", 0);
scrollToElement("a[href='#tdj']",  0);
scrollToElement("a[href='#tpp']", 0);
scrollToElement("a[href='#rev']",  0);
scrollToElement("a[href='#cont']", 0);
scrollToElement("a[href='#f6']", 0);
scrollToElement("a[href='#f7']", 0);
scrollToElement("a[href='#f8']", 0);
scrollToElement("a[href='#close_open']",80);