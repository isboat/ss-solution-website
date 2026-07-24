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
    }      
});
// Modern scroll reveal animations
$(document).ready(function () {
    var revealTargets = $(".service_section .box, .about_section .img-box, .about_section .detail-box, .why_section .box, .team_section .box, .client_section .box");
    revealTargets.addClass("reveal-on-scroll");

    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        revealTargets.each(function () {
            revealObserver.observe(this);
        });
    } else {
        revealTargets.addClass("is-visible");
    }
});
