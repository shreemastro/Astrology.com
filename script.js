const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}

// Example: Automatically slide every 3 seconds
setInterval(nextSlide, 3000);