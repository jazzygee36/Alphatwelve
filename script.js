// Select elements
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const ctx = document.getElementById('myBarChart').getContext('2d');

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

const myBarChart = new Chart(ctx, {
  type: 'bar', // Define the chart type as 'bar'
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ], // X-axis labels
    datasets: [
      {
        data: [700, 900, 750, 400, 1000, 750, 900, 350, 850, 650, 900, 600],
        backgroundColor: ' #8576FF',
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines from the X-axis
        },
        ticks: {
          autoSkip: false, // Ensures that all X-axis labels are shown
          color: '#64748B',
          font: {
            size: 10, // Change the font size of the X-axis labels
            weight: 400, // Make the X-axis labels bold
          },
        },
      },
      y: {
        beginAtZero: true, // Ensures the Y-axis starts at 0
        grid: {
          display: false, // Remove grid lines from the X-axis
        },
        ticks: {
          color: '#64748B',
          font: {
            size: 10, // Change the font size of the X-axis labels
            weight: 400, // Make the X-axis labels bold
          },
          // Define the specific values you want to show on the Y-axis
          callback: function (value) {
            // Only display these specific Y-axis values (for example: 0, 500, 1000)
            if (
              value === 0 ||
              value === 200 ||
              value === 400 ||
              value === 600 ||
              value === 800 ||
              value === 1000
            ) {
              return value;
            }
            return null; // Hide other values
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the label (legend) from being displayed
      },
    },
  },
});
