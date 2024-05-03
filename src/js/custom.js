// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
cKey = "cookieaccepted";

function hideCookie() {
    $(".cookie-content").hide();
}

function acceptCookie() {
    localStorage.setItem(cKey, "true")
    hideCookie();
}
$(document).ready(function(){

    /*
    const cookieConsentVal = localStorage.getItem(cKey);
    if(!cookieConsentVal) {
        $(".cookie-content").load("cookie.html", function(){
            $(".cookie-content").show();
            $(".hideCookieBtn").click(function(){
                hideCookie();
            })
    
            
            $(".acceptCookieBtn").click(function(){
                acceptCookie();
            })
        });
    }     */   
});