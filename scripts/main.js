// variables
let header_menu = document.querySelector ('.header_menu')
let burger_menu = document.querySelector ('.burger-menu')
let elements = document.querySelectorAll('.fadeIn')

// functions

// easyscroll
function easyscroll(){
    elements.forEach(element => {
        if((window.scrollY + window.innerHeight) > (element.offsetTop +(element.offsetHeight/2))){
         element.classList.add("visible")
         }     
     })
}

function easyscrollRight(){
    let rightElements = document.querySelectorAll('.elementjsright')
    rightElements.forEach(rightElement => {
        if((window.scrollY + window.innerHeight) > (rightElement.offsetTop +(rightElement.offsetHeight/2))){
            rightElement.classList.add("reveal")
         }     
     })
}
function easyscrollLeft(){
    let leftElements = document.querySelectorAll('.elementjsleft')
    leftElements.forEach(leftElement => {
        if((window.scrollY + window.innerHeight) > (leftElement.offsetTop +(leftElement.offsetHeight/2))){
            leftElement.classList.add("reveal")
         }     
     })
}
// fin easyscroll

// appel des fonctions
easyscroll()




// events 

// <!-- Initialize Swiper -->

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.mySwiper', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000, // Définit le délai entre chaque transition en millisecondes (dans cet exemple, 5 secondes)
        disableOnInteraction: false, // Définit si l'autoplay doit être désactivé lorsqu'un utilisateur interagit avec le slider (par défaut, false)
    },
    speed: 1000, // Ralentit la transition des slides à 1 seconde (1000 millisecondes)
  });
});

 

burger_menu.addEventListener('click',function() {
    header_menu.classList.toggle('active')
    document.querySelector('main').classList.toggle('toggle')
    document.querySelector('footer').classList.toggle('toggle')
});


// easyscroll 
window.addEventListener ("scroll", function (){
    easyscroll()
    easyscrollRight()
    easyscrollLeft()
    })