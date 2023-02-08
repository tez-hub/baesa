// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


var i = 0;
var txt = 'Baesa';
var speed = 150;
t =  document.getElementById('anim')


function typeWriter(){
    if (i < txt.length){
    t.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}
typeWriter()


const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  wrap: false
})