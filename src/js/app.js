// header
function sliderFn() {
  const slides = document.querySelectorAll(".slide");

  let curentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      if (index === curentSlide) {
        slide.classList.add("show-slide");
      } else {
        slide.classList.remove("show-slide");
      }
    });
  }

  function goToNextSlide() {
    if (curentSlide === slides.length - 1) {
      curentSlide = 0;
    } else {
      curentSlide++;
    }
    renderSlides();
  }

  function startSlide() {
    slideInterval = setInterval(goToNextSlide, 5000);
  }
  startSlide();
}

sliderFn();

//progress bar

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const fillProgress = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let percentage = entry.target.getAttribute("data-percentage");
        entry.target.style.width = percentage + "%";
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(fillProgress, {
    threshold: 0.5,
  });

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});

// section4- recomendation text
const slides = document.querySelectorAll(".recSlide");
const dots = document.querySelectorAll(".dot");

let curentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("show");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("show");
  dots[index].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    curentSlide = parseInt(dot.getAttribute("data-slide"));
    showSlide(curentSlide);
  });
});

showSlide(curentSlide);

// section5
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      projects.forEach((project) => {
        if (category === "all" || project.classList.contains(category)) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }
      });
    });
  });
});

// section7

document.querySelectorAll(".partners").forEach((partnersBox) => {
  partnersBox.addEventListener("mouseenter", () => {
    partnersBox.querySelector(".boxPartner").style.transform =
      "rotateY(180deg)";
  });

  partnersBox.addEventListener("mouseleave", () => {
    partnersBox.querySelector(".boxPartner").style.transform = "rotateY(0deg)";
  });
});
