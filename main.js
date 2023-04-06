// Page Transition
    
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  var myNav = document.getElementById('navbar');
  window.onscroll = function () { 
      if (document.body.scrollTop >= 200 ) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
      } 
      else {
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
      }
  };