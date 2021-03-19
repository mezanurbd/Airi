let hamberger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.layer');
let menuLinks = document.querySelector('.menu-links');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});
times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});
menuLinks.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});
$(document).ready(function(){
    $('.services-menu').waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
});