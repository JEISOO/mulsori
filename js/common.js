


$("#main p").delay(50).animate({opacity: 1}, 1000);
$("#main h2").delay(1000).animate({opacity: 1}, 1000);

// introduction 이미지 나타날때

const img = $(".inimg").offset().top- 350;
console.log(img)
$(window).scroll(function(){ 
    if ( $(window).scrollTop() >= img) { 
        $("#introduction .inimg").animate({opacity: 1}, 1000);
    }
});




