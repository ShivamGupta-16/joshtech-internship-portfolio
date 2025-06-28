function openModal() {
  document.getElementById("skillModal").style.display = "block";
  document.body.style.overflow = "hidden"; 
}

function closeModal() {
  document.getElementById("skillModal").style.display = "none";
  document.body.style.overflow = "auto"; 
}

function saveSkill() {
  const skill = document.getElementById("skillInput").value;
  if (skill.trim()) {
    document.getElementById("skillInput").value = "";
    closeModal();
  }
}



//****Carousel Section*****

const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dots span");
const slideWidth = 340 + 20; // 340 card + 20 (2*10 margin)
const totalSlides = 5;
let index = 0;

const testimonials = document.querySelectorAll(".testimonial");
for (let i = 0; i < 3; i++) {
  const clone = testimonials[i].cloneNode(true);
  track.appendChild(clone);
}

function moveToSlide() {
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  const centerIndex = (index + 1) % totalSlides;
  dots[centerIndex].classList.add("active");
}

// Dot click navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i-1; 
    moveToSlide();
  });
});

function autoSlide() {
  index++;
  moveToSlide();

  if (index === totalSlides + 1) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      track.style.transform = translateX('0px');
      updateDots();
    }, 510);
  }
}

setInterval(autoSlide, 3000);

moveToSlide();

