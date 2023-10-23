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

//Add this JavaScript to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none'; // Hide the sidebar
  } else {
    sidebar.style.display = 'block'; // Show the sidebar
  }


}


function reportWindowSize() {
  //check if the viweport size is less then 1200px
  if (window.innerWidth < 1200) {

    var dis = document.getElementById('dis').innerHTML = alert("Dear user, this website may be complex or distotred to display on mobile device due to an ongoing maintenance but all functions works fine. Please use a desktop for a better display. Thank you");

  };
}

window.onload = reportWindowSize;
