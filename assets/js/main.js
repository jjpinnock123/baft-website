document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".fade-in, .fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  animated.forEach((el) => observer.observe(el));

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});