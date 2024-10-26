// Select elements
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const ctx = document.getElementById('myBarChart').getContext('2d');
const totalPages = 3; // Total number of pages
let currentPage = 1;
var modal = document.getElementById('myModal');
var openBtn = document.querySelectorAll('.open-modal-btn');
var closeModalBtn = document.querySelector('.closeModalBtn');

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

// const ctx = document.getElementById('myBarChart').getContext('2d');

// Truncate each month label to the first two letters

const fullLabels = [
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
];
const truncatedLabels = fullLabels.map((label) => label.slice(0, 2));

function isMobile() {
  return window.innerWidth <= 768; // Adjust the width as needed for your mobile breakpoint
}

// Function to get the chart text color from CSS
function getChartTextColor() {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--chart-text-color')
    .trim();
}

// Create the chart with initial options
let myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: isMobile() ? truncatedLabels : fullLabels, // Use truncated labels on mobile
    datasets: [
      {
        data: [700, 900, 750, 400, 1000, 750, 900, 350, 850, 650, 900, 600],
        backgroundColor: ' #8576FF',
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: getChartTextColor(),
          font: {
            size: 10,
            weight: '400',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: getChartTextColor(),
          font: {
            size: 10,
            weight: '400',
          },
          callback: function (value) {
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
            return null;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Function to update chart colors and labels
function updateChart() {
  myBarChart.options.scales.x.ticks.color = getChartTextColor();
  myBarChart.data.labels = isMobile() ? truncatedLabels : fullLabels;
  myBarChart.update();
}

// Update chart on window resize to dynamically adjust labels
window.addEventListener('resize', updateChart);

function createPagination() {
  const pageNumbers = document.getElementById('pageNumbers');
  pageNumbers.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('page-btn');

    if (i === currentPage) {
      pageButton.classList.add('active');
    }

    pageButton.addEventListener('click', () => {
      currentPage = i;
      updatePagination();
    });

    pageNumbers.appendChild(pageButton);
  }
}

function updatePagination() {
  createPagination();
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

updatePagination();

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
// Open modal when the button is clicked
openBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modal.style.display = 'block';
  });
});

// Close modal when the close button is clicked
closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check if dark mode was previously set in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.checked = true; // Set the toggle to checked
  }

  toggle.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
    }
  });
});

// Function to toggle the accordion
function toggleAccordion(element) {
  // Get the content section of the clicked accordion
  const content = element.nextElementSibling;

  // Toggle the active class on the header for arrow rotation
  element.classList.toggle('active');

  // Toggle the visibility of the content section
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}
document.querySelectorAll('.bottom-menu li').forEach((item) => {
  item.addEventListener('click', function () {
    // Remove 'active' class from all items
    document
      .querySelectorAll('.bottom-menu li')
      .forEach((el) => el.classList.remove('active'));

    // Add 'active' class to the clicked item
    this.classList.add('active');
  });
});
