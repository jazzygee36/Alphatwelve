// Select elements
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Select the next and previous buttons
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Event listener to open sidebar
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
});

// Event listener to close sidebar
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}

function showSlide(slideIndex) {
  if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Automatic sliding
setInterval(() => {
  nextSlide();
}, 3000); // Slide every 3 seconds
