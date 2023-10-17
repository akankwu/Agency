let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Add this JavaScript to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = '-250px'; // Hide the sidebar
  } else {
    sidebar.style.right = '0px'; // Show the sidebar
  }
}
