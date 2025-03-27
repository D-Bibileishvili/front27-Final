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
