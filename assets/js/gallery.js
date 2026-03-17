const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".gallery-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

cards.forEach(card => {
  card.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = card.querySelector("img").src;
  });
});

document.querySelector(".close").onclick = () => {
  lightbox.style.display = "none";
};