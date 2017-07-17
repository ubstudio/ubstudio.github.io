function countPrice(price, delay) {


    var k = 0,
        n = 0;
    
    var timeout;
    
    var count = function() {
        k++;
        
        if (timeout) {
            clearTimeout(timeout);
        }
        
        if (k < n) {
        
            $('#countPrice').text(k);  
            timeout = setTimeout(count, delay);
        }
    };
    

    $(function(){ 
    
        var counter = $('#countPrice').text();
        counter = price;

        n = counter+1;
        
        $('#anchor_game').animatescroll({scrollSpeed:300});
        count();

               
    })
    
     
    
}

function DelcountPrice(price) {


var k = price, 
    n = 0;
    
    var timeout;
    
    var count = function() {
        k--;
        
        if (timeout) {
            clearTimeout(timeout);
        }
        
        if (k > -1) {
        
            $('#countPrice').text(k);  
            timeout = setTimeout(count, 2);
        }
    };
    

    $(function(){ 
    
        var counter = $('#countPrice').text();
        counter = price;

        n = counter;
        
        count();
               
    }) 
    
}


 

$(function() {
    //$('#draggable').draggableTouch();   
   
   $('#draggable').draggable({
        containment: "parent"
    });
    
    $('#draggable img').mousedown(function(){
    
        $(this).css({width: "86px", height: "70px"});
        $('.gamehelp').fadeOut();
        yaCounter22075093.reachGoal('fishka');
    
    });
    
    $('#draggable img').mouseup(function(){
    
        $(this).css({width: "65px", height: "51px"});
    
    });
    
    
    
    $(".blackContainer").css({top: "151px"});
    
    function animateMoney(height) {
    
        $(".blackContainer").animate({top:height+"px"}, 800);
    
    }
    
    
    
    
      
    
        $('.gamePoint.type1').droppable({
        
            drop: function() {
            
                $('.gamePoint.type1').css({border: "4px solid #f0c201", background: "#fffa7e"});
                countPrice(50,5);
                animateMoney(61);
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type1").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
               yaCounter22075093.reachGoal('fishka_gp1'); 
                
       
            },
            
            out: function() {
            
                $('.gamePoint.type1').css({border: "4px solid #d3d3d3", background: "#fff"})
                DelcountPrice(50);
                animateMoney(151);
                
            }
        });
        
        
        $('.gamePoint.type2').droppable({
        
            drop: function() {
            
                $('.gamePoint.type2').css({border: "4px solid #f0c201", background: "#fffa7e"})
                countPrice(30,5);
                animateMoney(99);
                
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type2").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
               yaCounter22075093.reachGoal('fishka_gp2'); 
                
            },
            
            out: function() {
            
                $('.gamePoint.type2').css({border: "4px solid #d3d3d3", background: "#fff"})
                DelcountPrice(30);
                animateMoney(151);
            }
        });
    
        $('.gamePoint.type3').droppable({
        
            drop: function() {
            
                $('.gamePoint.type3').css({border: "4px solid #f0c201", background: "#fffa7e"})
                countPrice(60,5);
                animateMoney(5);
                
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type3").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
                    
            yaCounter22075093.reachGoal('fishka_gp3');
            
            },
            
            out: function() {
            
                $('.gamePoint.type3').css({border: "4px solid #d3d3d3", background: "#fff"})
                DelcountPrice(60);
                animateMoney(151);
            }
        });    
    

        $('.gamePoint.type4').droppable({
        
            drop: function() {
            
                $('.gamePoint.type4').css({border: "4px solid #f0c201", background: "#fffa7e"})
                countPrice(5,150);
                animateMoney(126);
                
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type4").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
               
               yaCounter22075093.reachGoal('fishka_gp4');
                
            },
            
            out: function() {
            
                $('.gamePoint.type4').css({border: "4px solid #d3d3d3" , background: "#fff"})
                DelcountPrice(5);
                animateMoney(151);

                
            }
        });


        $('.gamePoint.type5').droppable({
        
            drop: function() {
            
                $('.gamePoint.type5').css({border: "4px solid #f0c201" , background: "#fffa7e"})
                countPrice(5,150);
                animateMoney(126);
                
                                
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type5").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
               
               yaCounter22075093.reachGoal('fishka_gp5'); 
                
            },
            
            out: function() {
            
                $('.gamePoint.type5').css({border: "4px solid #d3d3d3" , background: "#fff"})
                DelcountPrice(5);
                animateMoney(151);
            }
        });
    

        $('.gamePoint.type6').droppable({
        
            drop: function() {
            
                $('.gamePoint.type6').css({border: "4px solid #f0c201", background: "#fffa7e"})
                countPrice(15,150);
                animateMoney(115);
                
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(800);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type6").fadeIn(800);
                        
                        }, 800)
                            
                    
                    });
              yaCounter22075093.reachGoal('fishka_gp6');  
                
            },
            
            out: function() {
            
                $('.gamePoint.type6').css({border: "4px solid #d3d3d3", background: "#fff"})
                DelcountPrice(15);
                animateMoney(151);
            }
        });
        
        $('.gamePoint_service').droppable({
        
            drop: function() {
            
                $('.gamePoint_service').css({border: "4px solid #f0c201", background: "#fffa7e"});
                
                    $(function(){
                            
                        $(".lightLayer").fadeIn(700);
                        
                        setTimeout(function() {
                            
                            $(".gameModal.type_service").fadeIn(700);
                        
                        }, 500)
                            
                    
                    });
                
                   yaCounter22075093.reachGoal('fishka_gp7');
            },
            
            out: function() {
            
                $('.gamePoint_service').css({border: "4px solid #d3d3d3", background: "#fff"})
            }
        });
        
        
        
$('.gamePoint.type1').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type1").fadeIn(800);
    yaCounter22075093.reachGoal('gp1');

})

$('.gamePoint.type2').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type2").fadeIn(800);
    yaCounter22075093.reachGoal('gp2');
})        

$('.gamePoint.type3').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type3").fadeIn(800);
    yaCounter22075093.reachGoal('gp3');
}) 

$('.gamePoint.type4').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type4").fadeIn(800);
    yaCounter22075093.reachGoal('gp4');
}) 


$('.gamePoint.type5').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type5").fadeIn(800);
    yaCounter22075093.reachGoal('gp5');
}) 


$('.gamePoint.type6').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type6").fadeIn(800);
    yaCounter22075093.reachGoal('gp6');
})

$('.gamePoint_service').click(function() {

    $(".lightLayer").fadeIn(800);
    $(".gameModal.type_service").fadeIn(800);
    yaCounter22075093.reachGoal('gp7');
})



    
});

function hidegameModal() {

    $(function(){
    
        $(".gameModal").fadeOut(700);
        
        setTimeout(function() {
            
            $(".lightLayer").fadeOut(700);
        
        }, 500)
            
    
    });

}




   
                
