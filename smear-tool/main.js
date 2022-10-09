

window.onload = init();


function init() {
    var isShow = false;
    var slide = $('.slide');
    var img = document.querySelector(".img");
    
    //載入時漸出 
    $('.container div,.container h1').animate({
        opacity:1
    },300);

    // 滾輪滾動時圖片移動
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        img.style.top = value * 0.3 + 'px';
        // 滑至頂部按鈕
        if (value > 200) {
            slide.show(300);
        } else {
            slide.hide(300);
        }
    });

    // 錨點動畫
    $('#one').click(() => {
        $('html,body').animate({
            scrollTop:
                $('#photo').offset().top - 60
        }, 500);
        return false;
    });
    $('#two').click(() => {
        $('html,body').animate({
            scrollTop:
                $('#feature').offset().top - 60
        }, 500);
        return false;
    });
    $('#three').click(() => {
        $('html,body').animate({
            scrollTop:
                $('#concept').offset().top - 60
        }, 500);
        return false;
    });
    $('#four').click(() => {
        $('html,body').animate({
            scrollTop:
                $('#contact').offset().top - 60
        }, 500);
        return false;
    });
    $('.slide').click(() => {
        $('html,body').animate({
            scrollTop:
                $('#clear').offset().top
        }, 500);
        return false;
    });

    // button 點擊時
    $('input[type="button"]').click(() => {
        if (isShow === false) {
            $('h3').show(300);
            isShow = true;
        }
        else{
            $('h3').hide(300);
            isShow = false;
        }
    })
}


// 朱伯實驗

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        header.classList.add("opacity")
    }else{
        header.classList.remove("opacity")
    }
})
