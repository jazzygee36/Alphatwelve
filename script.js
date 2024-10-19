// Select elements
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Event listener to open sidebar
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
});

// Event listener to close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(currentSlide);
