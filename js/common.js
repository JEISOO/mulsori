setTimeout(function(){
    $("body").addClass('on')
}, 10)
$("#main p").delay(1500).animate({opacity: 1});
$("#main h2").delay(2000).animate({opacity: 1});



$(document).ready(function(){

    const img = $(".inimg").height();

    $(window).scroll(function(){ 
    const rollIt = $(this).scrollTop() >= img; 
        

    if(rollIt ){ 
            $("#introduction .inimg").show().css({opacity: 1});
        }
        else{
            $("#introduction .inimg").hide();
        }
    });
    
});
