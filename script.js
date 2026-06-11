/* Icon Cards */

const cards =
  document.querySelectorAll(".icon-card");

/* Hover Animation */

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-12px) scale(1.03)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "";

  });

});