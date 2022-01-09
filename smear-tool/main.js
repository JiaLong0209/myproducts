

window.onload = init();


function init(){
    // var one = document.querySelector('#one');
    // one.addEventListener("click",()=>{
    //     console.log("df");
    //     document.querySelector('#photo').scrollIntoView({behavior: "auto"});
    // })
    var slide = $('.slide');
    var img = document.querySelector(".img");
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        console.log(value);
        img.style.top = value * 0.3 + 'px';
        if(value > 200){
            slide.show(300);
        } else{
            slide.hide(300);
        }
    });
    $('#one').click(()=>{
        $('html,body').animate({
            scrollTop:
            $('#photo').offset().top-60
        },500);
        return false;
    });
    $('#two').click(()=>{
        $('html,body').animate({
            scrollTop:
            $('#feature').offset().top-60
        },500);
        return false;
    });
    $('#three').click(()=>{
        $('html,body').animate({
            scrollTop:
            $('#concept').offset().top-60
        },500);
        return false;
    });
    $('#four').click(()=>{
        $('html,body').animate({
            scrollTop:
            $('#contact').offset().top-60
        },500);
        return false;
    });
    $('.slide').click(()=>{
        $('html,body').animate({
            scrollTop:
            $('#clear').offset().top
        },500);
        return false;
    });
    


}
