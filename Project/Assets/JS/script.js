// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", function () {
  // Variables for Skills Animations
  const skillsSection = document.querySelector(".skills");
  const skillBars = document.querySelectorAll(".technical-bars .bar span");
  const radialBars = document.querySelectorAll(
    ".radial-bars .radial-bar .progress-bar, .radial-bars .radial-bar .path"
  );
  const subtitle = document.querySelector(".sub-title");

  // Start Animation for Technical Skill Bars
  function startTechnicalBarsAnimation() {
    skillBars.forEach((skillBar) => {
      skillBar.classList.add("animate");
    });
  }

  // Start Animation for Radial Skill Bars and Subtitle
  function startRadialBarsAnimation() {
    radialBars.forEach((radialBar) => {
      radialBar.classList.add("animate");
    });
    subtitle.classList.add("animate");
  }

  // Intersection Observer for Technical Skill Bars
  const technicalBarsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTechnicalBarsAnimation();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  // Intersection Observer for Radial Skill Bars and Subtitle
  const radialBarsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startRadialBarsAnimation();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe Skills Section
  technicalBarsObserver.observe(skillsSection);
  radialBarsObserver.observe(skillsSection);
});

// Initialize Swiper for Testimonials
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// DOM Content Loaded Event Listener for Testimonials
document.addEventListener("DOMContentLoaded", function () {
  const testimonialSection = document.querySelector(".testimonial");

  // Show Testimonial Section
  function showTestimonialSection() {
    testimonialSection.classList.add("visible");
  }

  // Intersection Observer for Testimonial Section
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showTestimonialSection();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.7 }
  );

  // Observe Testimonial Section
  observer.observe(testimonialSection);
});
