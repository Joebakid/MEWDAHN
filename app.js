// gsap animation

const tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "Power3.easeOut",
  },
});

tl.fromTo(
  ".img-intro",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "50%",
    delay: 0.1,
    duration: 1,
    ease: "elastic.out(1.5, 1)",
  },
  "<20%"
);

tl.fromTo(
  ".nav-branding",
  { x: -110, opacity: 0 },
  { x: 0, opacity: 1 },
  "<50%"
);
tl.fromTo(".nav-link", { y: -110, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");
tl.fromTo(".hamburger", { x: 110, opacity: 0 }, { x: 0, opacity: 1 }, "<50%");
tl.fromTo(".contract", { y: 110, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");

// split text
const introText = document.querySelector(".title-h1");
letters = introText.textContent.split("");

// console.log(letters);
introText.textContent = "";

letters.forEach((letter) => {
  introText.innerHTML += '<span class="letter"> ' + letter + "</span>";
  gsap.set(".letter", { display: "inline-block" });
});
gsap.fromTo(
  ".letter",
  { y: "-100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)" }
);

// scroll trigger

// console.log(tlIntro);

//

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

// slides.appendChild(firstSlide);
// slides.insertBefore(lastSlide, slides.firstElementChild);

// function nextSlide() {
//   if (currentSlide >= slideCount) {
//     slides.style.transition = "none";
//     slides.style.transform = `translateX(0)`;
//     currentSlide = 0;
//     setTimeout(() => {
//       slides.style.transition = "transform 0.5s ease-in-out";
//       currentSlide++;
//       slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//     }, 50);
//   } else {
//     currentSlide++;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//   }
// }

// function prevSlide() {
//   if (currentSlide <= 0) {
//     slides.style.transition = "none";
//     slides.style.transform = `translateX(-${slideCount * 100}%)`;
//     currentSlide = slideCount;
//     setTimeout(() => {
//       slides.style.transition = "transform 0.5s ease-in-out";
//       currentSlide--;
//       slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//     }, 50);
//   } else {
//     currentSlide--;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
//   }
// }

// setInterval(nextSlide, 3000); // Change slide every 3 seconds

// function showSlide(index) {
//   const slides = document.querySelector(".slides");
//   const totalSlides = slides.children.length;

//   if (index >= totalSlides) {
//     currentSlide = 0;
//   } else if (index < 0) {
//     currentSlide = totalSlides - 1;
//   } else {
//     currentSlide = index;
//   }

//   const offset = -currentSlide * 100;
//   slides.style.transform = `translateX(${offset}%)`;
// }

// function moveSlides(step) {
//   showSlide(currentSlide + step);
// }

// Initialize slider
// showSlide(currentSlide);

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

// copy text
document.addEventListener("DOMContentLoaded", (event) => {
  const icon = document.querySelector(".icon");
  const contractText = "EnvLpf73MWzgEMLKZEEKiafKN7jBgCLCW2YwDpewpump";

  icon.addEventListener("click", () => {
    copyToClipboard(contractText);
    alert("Text copied to clipboard: " + contractText);
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});

// audio

// const audio = document.getElementById("myAudio");

// function playAudio() {
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }

// function stopAudio() {
//   audio.pause();
//   audio.currentTime = 0;
// }
