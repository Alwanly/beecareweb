(function() {
  "use strict"; // Start of use strict
  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-image'); 
//     debugger;
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }

//     const offset = -currentSlide * slides[0].offsetWidth;
//     document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
// }

// Example of navigating through the slides
//document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
//document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));


})();// End of use strict

document.addEventListener("DOMContentLoaded", function() {
    const images1 = document.querySelectorAll('.carousel-card-1');
    const images2 = document.querySelectorAll('.carousel-card-2');
    const images3 = document.querySelectorAll('.carousel-card-3');
    let currentImageIndex1 = Math.floor(Math.random() * images1.length);
    let currentImageIndex2 = Math.floor(Math.random() * images2.length);
    let currentImageIndex3 = Math.floor(Math.random() * images3.length);
    let interval1 = 7000;
    let interval2 = 7150; 
    let interval3 = 7300; // 7 detik
    //console.log(images1);
    function showImage1(index) {
        images1.forEach((img, i) => {
            img.classList.add('d-none');
            if (i === index) {
                img.classList.remove('d-none');
            }
        });
    }
    function showImage2(index) {
        images2.forEach((img, i) => {
            img.classList.add('d-none');
            if (i === index) {
                img.classList.remove('d-none');
            }
        });
    }
    function showImage3(index) {
        images3.forEach((img, i) => {
            img.classList.add('d-none');
            if (i === index) {
                img.classList.remove('d-none');
            }
        });
    }

    showImage1(currentImageIndex1);
    showImage2(currentImageIndex2);
    showImage3(currentImageIndex3);

    setInterval(() => {
        currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
        showImage1(currentImageIndex1);
        
    }, interval1);
    setInterval(() => {
        currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
        showImage2(currentImageIndex2);
    }, interval2);
    setInterval(() => {
        currentImageIndex3 = (currentImageIndex3 + 1) % images3.length;
        showImage3(currentImageIndex3);
    }, interval3);
});