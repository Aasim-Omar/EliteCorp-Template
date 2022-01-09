window.onload = function () {
  // init WOW Plugin
  new WOW().init();

  // Go To Top Button
  let goUp = document.getElementById("go-up");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 900) {
      goUp.style.display = "block";
    } else {
      goUp.style.display = "none";
    }
  });
  // Go Up Action
  goUp.onclick = function () {
    window.scroll(0, 0);
  };

  // Add & Remove Class Active From Navbar Bullets
  let allNavLinks = document.querySelectorAll(
    ".navbar-nav .nav-item .nav-link"
  );
  allNavLinks.forEach((link) => {
    link.onclick = function () {
      allNavLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    };
  });

  // Toggle Links in Small Screen
  let navBtn = document.querySelector(".navbar-button");
  let navBar = document.querySelector(".navbar-nav");
  let navbarShow = false;
  navBtn.addEventListener("click", function () {
    navbarShow = !navbarShow;
    if (navbarShow) {
      navBar.style.height = `${navBar.scrollHeight}px`;
    } else {
      navBar.style.height = 0;
    }
  });

  // Set The slider Height
  let slider = document.querySelector(".my-slider");
  let upperNavHeight = document.querySelector(".upper-nav").clientHeight;
  let navbarHeight = document.querySelector(".navbar").clientHeight;
  if (window.innerWidth > 767) {
    if (window.innerHeight <= 500) {
      slider.style.height = "500px";
    } else {
      slider.style.height = `${
        window.innerHeight - upperNavHeight - navbarHeight
      }px`;
    }
  } else {
    slider.style.height = `500px`;
  }

  // init Mixitup For Shufling Gallery Images
  let mixer = mixitup(".work-gallery");

  // Toggle Active Class in Featured Works
  let workBullets = document.querySelectorAll(".work .work-bullets li");
  workBullets.forEach((bullet) => {
    bullet.onclick = function () {
      workBullets.forEach((bullet) => {
        bullet.classList.remove("active");
      });
      bullet.classList.add("active");
    };
  });

  // Testimonials Carousel Actions
  let prevButton = document.querySelector(".testimonials .prev");
  let nextButton = document.querySelector(".testimonials .next");
  let allIndicators = document.querySelectorAll(".indicator li");
  let slideIndex = 1;
  // Main Function
  function slideShow(n) {
    let allSlides = document.querySelectorAll(
      ".testimonials-carousel .carousel-slide"
    );
    let indicators = document.querySelectorAll(".indicator li");
    if (n > allSlides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = allSlides.length;
    }
    allSlides.forEach((slide) => {
      slide.classList.remove("active");
    });
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    allSlides[slideIndex - 1].classList.add("active");
    indicators[slideIndex - 1].classList.add("active");
  }
  slideShow(slideIndex);
  // Previeos Button Action
  prevButton.addEventListener("click", function (e) {
    e.preventDefault();
    slideIndex--;
    slideShow(slideIndex);
  });
  // Next Button Action
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    slideIndex++;
    slideShow(slideIndex);
  });
  // Add indicators Actions
  for (let i = 0; i < allIndicators.length; i++) {
    allIndicators[i].setAttribute("data-number", i + 1);
  }
  allIndicators.forEach((item) => {
    item.addEventListener("click", function () {
      slideIndex = parseInt(item.getAttribute("data-number"));
      slideShow(slideIndex);
    });
  });

  // Statistics Section
  let statistic = document.querySelector(".statistic");
  let stat = document.querySelectorAll(".statistic .stat .num");
  let isCountDone = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= statistic.offsetTop - 400) {
      if (!isCountDone) {
        isCountDone = true;
        for (item of stat) {
          countUp(item);
        }
      }
    }
  });

  function countUp(el) {
    let n = Math.floor(2000 / el.dataset.count);
    el.textContent = 0;
    let interval = setInterval(function () {
      el.textContent++;
      if (el.textContent == el.dataset.count) {
        clearInterval(interval);
      }
    }, n);
  }
};
