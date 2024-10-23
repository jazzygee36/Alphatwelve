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
var openBtn = document.querySelector('.open-modal-btn');
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

//
// Example array of objects
const users = [
  {
    name: 'Cloud Innovation Summit',
    date: '2024-10-15',
    speaker: 'Jane Doe',
    status: 'Completed',
  },
  {
    name: 'Blockchain Revolution Conference',
    date: '2024-11-15',
    speaker: 'Dr. Peter Smith',
    status: 'In Progress',
  },
  {
    name: 'AI in Healthcare Symposium',
    date: '2024-12-01',
    speaker: 'Dr. Aisha Malik',
    status: 'Completed',
  },
];

// Get the table body element where rows will be added
const tableBody = document.querySelector('#userTable tbody');

// Function to map array and generate table rows
function populateTable() {
  users.forEach((user) => {
    // Create a new row
    const row = document.createElement('tr');

    // Create a cell for each property
    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;

    const dateCell = document.createElement('td');
    dateCell.textContent = user.date;

    const speakerCell = document.createElement('td');
    speakerCell.textContent = user.speaker;

    const statusCell = document.createElement('td');
    statusCell.textContent = user.status;

    // Apply fixed width and other styles
    statusCell.style.width = '99px'; // Fixed width
    statusCell.style.height = '24px'; // Fixed height
    // statusCell.style.textAlign = 'center'; // Center text
    statusCell.style.padding = '5px 13px'; // Padding inside the cell

    if (user.status === 'Completed') {
      statusCell.style.color = '#10B981'; // Text color
      statusCell.style.backgroundColor = '#D1FAE5'; // Background color
      statusCell.style.borderRadius = '100px'; // Border radius

      // statusCell.style.width = '99px';
    } else if (user.status === 'In Progress') {
      statusCell.style.color = '#3B82F6'; // Text color
      statusCell.style.backgroundColor = '#DBEAFE'; // Background color
      statusCell.style.borderRadius = '100px'; // Border radius
    }

    // Append the cells to the row
    row.appendChild(nameCell);
    row.appendChild(dateCell);
    row.appendChild(speakerCell);
    row.appendChild(statusCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the function to populate the table when the page loads
populateTable();

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
openBtn.addEventListener('click', function () {
  modal.style.display = 'block';
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
