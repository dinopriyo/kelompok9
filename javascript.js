// javascript.js

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".member, .project");
  const projects = document.querySelectorAll(".project");

  const animateOnScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Inisialisasi posisi awal
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  // Toggle detail project
  projects.forEach(project => {
    project.addEventListener("click", () => {
      project.classList.toggle("active");
    });
  });
});
