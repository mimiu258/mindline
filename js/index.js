//Preloading Page
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
//Scroll to top
var myButton=document.getElementById("backToTop")
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (window.pageYOffset>200){
            myButton.style.display="block"
        }
        else{
            myButton.style.display="none"
        }
    }
    myButton.addEventListener("click",backToTop)
    function backToTop(){
        window.scrollTo(0,0);
    }