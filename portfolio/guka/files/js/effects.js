	$(function(){
		 if ($(window).scrollTop()=="0") $(".title").css("position","relative").css("top","auto").css("opacity","1")
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="1" ) $(".title").css("position","fixed").css("top","57px").css("opacity","0.9")
		  else $(".title").css("position","relative").css("top","auto").css("opacity","1")
		 });
	});
	$(function(){
		//������ ���� ��� ���������
		$(".catalog a").append("<span></span>");
		$(".catalog a").hover(function(){
		$(this).children("span").fadeIn(600);
		},function(){
		$(this).children("span").fadeOut(200);
		});

		$(".honors a").append("<span></span>");
		$(".honors a").hover(function(){
		$(this).children("span").fadeIn(600);
		},function(){
		$(this).children("span").fadeOut(200);
		});
		
		 if ($(window).scrollTop()=="0") $(".top").css("position","relative").css("top","auto").css("opacity","1")
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="1" ) $(".top").css("position","fixed").css("top","0").css("opacity","0.9")
		  else $(".top").css("position","relative").css("top","auto").css("opacity","1")
		 });
		 
	//�������� ������ ����
		 if ($(window).scrollTop()=="0") $("#ancor10").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="500" ) $("#ancor10").css("borderBottom","0px solid #FEB300")
 			else if ($(window).scrollTop()<="0") $("#ancor10").css("borderBottom","0px solid #FEB300")
		  else $("#ancor10").css("borderBottom","2px solid #FEB300")
		 });
		
		 if ($(window).scrollTop()=="450") $("#ancor20").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="1300" ) $("#ancor20").css("borderBottom","0px solid #FEB300");
 			else if ($(window).scrollTop()<="450") $("#ancor20").css("borderBottom","0px solid #FEB300");
		  else $("#ancor20").css("borderBottom","2px solid #FEB300");
		 });
		
		 if ($(window).scrollTop()=="3000") $("#ancor30").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="3800" ) $("#ancor30").css("borderBottom","0px solid #FEB300");
 			else if ($(window).scrollTop()<="3000") $("#ancor30").css("borderBottom","0px solid #FEB300");
		  else $("#ancor30").css("borderBottom","2px solid #FEB300");
		 });
		
		 if ($(window).scrollTop()=="3800") $("#ancor40").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="4000" ) $("#ancor40").css("borderBottom","0px solid #FEB300");
 			else if ($(window).scrollTop()<="3700") $("#ancor40").css("borderBottom","0px solid #FEB300");
		  else $("#ancor40").css("borderBottom","2px solid #FEB300");
		 });
		
		 if ($(window).scrollTop()=="4000") $("#ancor50").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="5000" ) $("#ancor50").css("borderBottom","0px solid #FEB300");
 			else if ($(window).scrollTop()<="4000") $("#ancor50").css("borderBottom","0px solid #FEB300");
		  else $("#ancor50").css("borderBottom","2px solid #FEB300");
		 });
		
		 if ($(window).scrollTop()=="6200") $("#ancor6").css("borderBottom","2px solid #FEB300");
		 $(window).scroll(function(){
		  if ($(window).scrollTop()>="7200" ) $("#ancor6").css("borderBottom","0px solid #FEB300");
 			else if ($(window).scrollTop()<="6200") $("#ancor6").css("borderBottom","0px solid #FEB300");
		  else $("#ancor6").css("borderBottom","2px solid #FEB300");
		 });
		
	 //���������
		jQuery('#ancor1').click(function() {
	        jQuery.scrollTo('#ancor01',1000);
	    }); 
		jQuery('#ancor2').click(function() {
	        jQuery.scrollTo('#ancor02',1000);
	    }); 
		jQuery('#ancor3').click(function() {
	        jQuery.scrollTo('#ancor03',1000);
	    }); 		 
		jQuery('#ancor4').click(function() {
	        jQuery.scrollTo('#ancor04',1000);
	    }); 		 
		jQuery('#ancor5').click(function() {
	        jQuery.scrollTo('#ancor05',1000);
	    }); 		 
		jQuery('#ancor6').click(function() {
	        jQuery.scrollTo('#ancor06',1000);
	    }); 
	    
	//�������
		$("#content div").hide(); // �������� ����������
		$("#tabs li:first").attr("id","current"); // ���������� ������ ��������
		$("#content div:first").fadeIn(); // ������� ����������
	    
	    $('#tabs a').click(function(e) {
	        e.preventDefault();        
	        $("#content div").hide(); //������ ��� ����������
	        $("#tabs li").attr("id",""); //����� ID
	        $(this).parent().attr("id","current"); // ���������� ��������
	        $('#' + $(this).attr('title')).fadeIn(); // ������� ���������� ������� ��������
	    });	  
	//������������� �������� ���������	
      $("#btn01").click(function(){
      $("#PopUp01").show("fade",500);
   }); 

	//������������� �������� ���������	
      $(".callx01").click(function(){
      $("#PopUp01").hide("fade",500);
   });				

   	     
	//�������� ��������� ������ ���� ���� 		 


		$("#PopUp01").click(function(){
			$("#PopUp01").hide("fade",{},500);
		});//�������� ���������
		$(".PopUpCont01").click(function(event){
		  event.stopPropagation();
		});//������ �� �������� 
	

	});
	
