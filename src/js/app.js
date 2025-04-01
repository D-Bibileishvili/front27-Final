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
