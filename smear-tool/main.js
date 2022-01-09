

window.onload = init();


function init(){
    // var one = document.querySelector('#one');
    // one.addEventListener("click",()=>{
    //     console.log("df");
    //     document.querySelector('#photo').scrollIntoView({behavior: "auto"});
    // })

    var img = document.querySelector(".img");
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        img.style.top = value * 0.3 + 'px'; 
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
    


}
