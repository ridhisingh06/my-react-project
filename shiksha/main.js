//change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0); //immediately on scroll
});

// show/hide FAQ answers

const faqEl = document.querySelectorAll(".faq");

faqEl.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const iconEl = faq.querySelector(".faq__icon i");
    if (iconEl.className === "uil uil-plus") {
      iconEl.className = "uil uil-minus";
    } else {
      iconEl.className = "uil uil-plus";
    }
  });
});

// show/hide nav hamburger menu
const menuEl = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menuEl.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "inline-block";
  menuEl.style.display = "none";
  closeBtn.style.display = "none";
});