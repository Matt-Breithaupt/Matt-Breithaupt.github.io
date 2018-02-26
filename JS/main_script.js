/*! Fade out on scroll. Update issue: would fade out during user scaling on mobile*/
/*! $(window).scroll(function(){
    $(".hero-text").css("opacity", 1 - $(window).scrollTop() / 250);
  }); */
/*! Script allows all internal links (everything under the same domain) open within the web app. External links will still open in Mobile Safari. */
/*! <script>(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")</script> */
/*! PAGE LOADING ICON (replacement for splash screen) */
/*! $(window).on('load', function(){
     $('.loader').fadeOut("fast");
}); */
/*! Vivus */
var obt1=new Vivus("obturateur1",{type:"delayed",duration:150},function(){document.getElementById("container-icon1").className="filling2"}),obt2=new Vivus("obturateur2",{type:"delayed",duration:150},function(){document.getElementById("container-icon2").className="filling2"}),obt3=new Vivus("obturateur3",{type:"delayed",duration:150},function(){document.getElementById("container-icon3").className="filling2"}),obt4=new Vivus("obturateur4",{type:"delayed",duration:150},function(){document.getElementById("container-icon4").className="filling3"}),obt5=new Vivus("obturateur5",{type:"delayed",duration:150},function(){document.getElementById("container-icon5").className="filling3"}),obt6=new Vivus("obturateur6",{type:"delayed",duration:150},function(){document.getElementById("container-icon6").className="filling3"});
/*! PROFILE: overlay show/hide on click: jQuery */
$(document).ready(function(){var a=$(".divs > div");a.first().show();$("input[type=radio]").on("change",function(){a.hide();a.eq($("input[type=radio]").index(this)).show()})});
/*! NAVBAR */
!(function(a){a(".page-scroll a").bind("click",function(c){var b=a(this);a("html, body").stop().animate({scrollTop:a(b.attr("href")).offset().top-50},1250,"easeInOutExpo"),c.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),a(function(){a("body").on("input propertychange",".floating-label-form-group",function(b){a(this).toggleClass("floating-label-form-group-with-value",!!a(b.target).val())}).on("focus",".floating-label-form-group",function(){a(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){a(this).removeClass("floating-label-form-group-with-focus")})})})(jQuery);
