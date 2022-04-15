//animation 
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  //Serviços 
  let service = document.querySelector('.btn-service')
  let cardHidden = document.querySelector('.hidden')
  
  
  service.addEventListener('click', function(){
    
    if (cardHidden.style.display === 'none'){
        cardHidden.style.display = 'inline-block'
        service.textContent = "Ver menos"
    }else {
        cardHidden.style.display = 'none'
        service.textContent = "Ver Mais Serviços"
    }
  })
 
  



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else {
            $('.navbar').removeClass("sticky")
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    })
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0})
        })


        
        var typed = new Typed(".typing-1", {
            strings:["Computadores", "Notebooks","PC Gamer", "Netbooks", "Placa de Vídeo"],
            typeSpeed:100,
            backSpeed:60,
            loop:true
        })



    $('.carousel-1').owlCarousel({
        autoplay: true,
        loop: true,
        autoplayHoverPauser: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
            }
        }
    });
    $('.carousel-2').owlCarousel({
        autoplay: true,
        loop: true,
        margin:90,
        autoplayHoverPauser: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    $('.carousel-3').owlCarousel({
        autoplay: true,
        loop: true,
        margin:20,
        autoplayHoverPauser: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
})

let btnMobile = document.getElementById('btn-mobile')
let homeList = document.getElementById('homeList')
let aboutList = document.getElementById('aboutList')
let serviceList =  document.getElementById('serviceList')
let recommendationsList =  document.getElementById('recommendationstList')


function toggleMenu(){
    let menu = document.getElementById('max-width')
    menu.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)


function toggleHome(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
homeList.addEventListener('click', toggleHome)


function toggleAbout(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
aboutList.addEventListener('click', toggleAbout)


function toggleService(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
serviceList.addEventListener('click', toggleService)


function toggleRecommendations(){
    let list = document.getElementById('max-width')
    list.classList.toggle('active')
}
recommendationstList.addEventListener('click', toggleRecommendations)

