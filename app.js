const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// slider
let currentSlide = 0;
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const firstSlide = slides.firstElementChild.cloneNode(true);
const lastSlide = slides.lastElementChild.cloneNode(true);

slides.appendChild(firstSlide);
slides.insertBefore(lastSlide, slides.firstElementChild);

function nextSlide() {
  if (currentSlide >= slideCount) {
    slides.style.transition = "none";
    slides.style.transform = `translateX(0)`;
    currentSlide = 0;
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
      currentSlide++;
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 50);
  } else {
    currentSlide++;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function prevSlide() {
  if (currentSlide <= 0) {
    slides.style.transition = "none";
    slides.style.transform = `translateX(-${slideCount * 100}%)`;
    currentSlide = slideCount;
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
      currentSlide--;
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 50);
  } else {
    currentSlide--;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function moveSlides(step) {
  showSlide(currentSlide + step);
}

// Initialize slider
showSlide(currentSlide);

/////////////// slide show

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".sliderr");
  const slideTrack = document.querySelector(".slide-track");
  let isPaused = false;

  slider.addEventListener("mouseover", () => {
    isPaused = true;
  });

  slider.addEventListener("mouseout", () => {
    isPaused = false;
  });

  const startScrolling = () => {
    let startTime = null;

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const totalWidth = slideTrack.scrollWidth / 2; // Half because slides are duplicated
      const scrollAmount = (progress / 20) % totalWidth;

      slideTrack.style.transform = `translateX(${-scrollAmount}px)`;

      if (!isPaused) {
        requestAnimationFrame(scroll);
      } else {
        startTime = null;
      }
    };

    requestAnimationFrame(scroll);
  };

  startScrolling();
});
