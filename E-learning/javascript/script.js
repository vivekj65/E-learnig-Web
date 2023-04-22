window.onscroll = function() {myFunction()};

var navbar = document.getElementById('nav');

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // console.log("Activate")
    navbar.classList.add('navbar-onscroll');
  } 
  else {
    navbar.classList.remove('navbar-onscroll');
  }
}
