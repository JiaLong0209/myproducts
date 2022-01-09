

window.onload = init();


function init(){
    var img = document.querySelector(".img");
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        // console.log(value);
        img.style.top = value * 0.3 + 'px';
        
        
    });
    console.log("start");
    var button = document.querySelector('.button');
    // button.addEventListener('click', function(){
        // console.log("123");

    // });
    
}
