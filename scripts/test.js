const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let currentSlide = 0;
let slideWidth = slides[0].clientWidth;

slider.style.width = `${slideWidth}px`;
slides.forEach(slide => {
  slide.style.width = `${slideWidth}px`;
});

const moveToSlide = (index) => {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${slideWidth * index}px)`;
  });
  currentSlide = index;
}

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    moveToSlide(currentSlide - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    moveToSlide(currentSlide + 1);
  }
});

window.addEventListener("resize", () => {
  slideWidth = slides[0].clientWidth;
  slider.style.width = `${slideWidth}px`;
  slides.forEach(slide => {
    slide.style.width = `${slideWidth}px`;
    slide.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  });
});

