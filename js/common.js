// 메인첫화면 로드
// setTimeout(function(){
//     $("body").addClass('on')
// }, 10)
$("#main p").delay(50).animate({opacity: 1}, 1000);
$("#main h2").delay(1000).animate({opacity: 1}, 1000);


// 각 섹션 도달시 
const img = $(".inimg").offset().top- 350;
console.log(img)
$(window).scroll(function(){ 
    if ( $(window).scrollTop() >= img) { 
        $("#introduction .inimg").animate({opacity: 1}, 1000);
    }
});
    




