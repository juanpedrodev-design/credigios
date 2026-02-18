const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 1;

function updateCarousel() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  const slideWidth = slides[0].offsetWidth + 24;
  track.style.transform = `translateX(${-index * slideWidth + slideWidth * 0.15}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

updateCarousel();
