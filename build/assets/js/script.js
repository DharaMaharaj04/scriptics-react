/* Loader */
document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
		document.querySelector("#loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};

/* Fixed header $('.header-link').css('color','white'); */
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.innerWidth > 992) {
    var pid= $('#page-id-2');
    if (window.pageYOffset > 40 && pid) {
      nav.classList.add('bg-white');
      $('.navbar-brand img').attr('src','/assets/img/scriptics_wht_bg.svg');
      $('.navbar-collapse .navbar-nav .nav-item a').addClass('black');
    } else {
      nav.classList.remove('bg-white');
      $('.navbar-brand img').attr('src','/assets/img/scriptics_wht_bg.svg');
      $('.navbar-collapse .navbar-nav .nav-item a').addClass('black');
    }
  }
  else{
    
    $('.navbar-brand img').attr('src','/assets/img/scriptics_wht_bg.svg');
    $('.navbar-collapse .navbar-nav .nav-item a').css('color','white');
  }
});


document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth > 992) {
    
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      })
    });
  }
}); 


/** front-slider */
$(document).ready(function(){
  
  $(window).on('scroll',function(){

    var link = $('.front_slider li.l');
    var top = $(window).scrollTop();
    $('.nav_name').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height){
        link.removeClass('active').removeClass('mb-50');
        $('.front_slider').find('[data-scroll="' + id + '"]').parent('li').addClass('active').addClass('mb-50'); 
        
        if($('.front_slider ul li.active').hasClass('first')){
          $('.navbar-light .navbar-nav .nav-link').css('color','white');
        }
        if($('.front_slider ul .text-colo-white').hasClass('active')){
          $('.front_slider ul li').removeClass('dark');
        }
        if($('.front_slider ul .text-colo-dark').hasClass('active')){
          $('.front_slider ul li').addClass('dark');
        }
        if($('.front_slider ul li.active').hasClass('last')){
          $('.front_slider').addClass('bottom');
        }
        else{
          $('.front_slider').removeClass('bottom');
        }
      }
    });
    
  }); 
  
});


/** check_footer */
function checkOffset() {
  if($('.front_slider').offset().top + $('.front_slider').height() 
                                         >= $('#footer').offset().top - 1)
      $('.front_slider').css('position', 'absolute');
  if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
      $('.front_slider').css('position', 'fixed'); // restore when you scroll up
}


/** contact-scroll-tab */


//Emaljs Script
$( ".footer-email" ).on( "keyup", function() {
  var email = $(".footer-email").val();
  console.log('!!');
  if(IsEmail(email)==false){
    $(".email-tip").addClass("invalid");
    $(".email-tip").html("!Please enter valid mail").css("color", "red");
  }
  else{
    $(".email-tip").removeClass("invalid");
    $(".email-tip").html("");
  }
});
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
 }else{
    return true;
 }
}


/** bottom scrollUp */
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});




var faders = document.querySelectorAll(".fadeInUp");
var sliders = document.querySelectorAll(".animated");
var wow = document.querySelectorAll(".Wow");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
sliders.forEach(wow => {
  appearOnScroll.observe(wow);
});