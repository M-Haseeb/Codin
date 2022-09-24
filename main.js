// show nav bar

let menu = document.querySelector('#nav-toggle');
let navbar = document.querySelector('.nav');
let close = document.querySelector('.nav-close');
menu.addEventListener('click', () =>{
    menu.classList.toggle('.nav-close');
    navbar.classList.toggle('active');
});
close.addEventListener('click', () =>{
    navbar.classList.remove('active');
});

// swiper testimonial
var swiper = new Swiper(".swiper-cont", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesperview: 1,
    spaceBetween: 10,
    breakpoints: {
        560: {
            slidesperview: 1,
            spaceBetween: 20,
        },
        860: {
            slidesperview: 1,
            spaceBetween: 40,
        },
        1060: {
            slidesperview: 2,
            spaceBetween: 50,
        },
    }
  });

//   header shadow

let header = document.querySelector(".header");
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 70){
        header.classList.add("header-shadow")
    }
    else header.classList.remove("header-shadow")
});

// scroll to top button
let up = document.querySelector(".up");
window.addEventListener("scroll", ()=>{
    up.classList.toggle("show", window.scrollY >= 560)
    up.onclick = () =>{
        window.scrollTo({behavior: "smooth", top: "0"})
    }
})
