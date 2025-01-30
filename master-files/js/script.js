// Make Navbar Sticky When Scrolling
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  