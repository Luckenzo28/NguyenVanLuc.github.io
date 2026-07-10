//const nav = document.querySelector(".navbar");
// const menu = document.querySelector(".menu-toggle");
// const links = document.querySelectorAll(".nav-link");

// Mở menu
// menu.addEventListener("click", () => {
// nav.classList.add("show");
// });

// Đóng menu
// links.forEach((link) => {
// link.addEventListener("click", () => {
// nav.classList.remove("show");
// });
// });

const nav = document.querySelector(".navbar");
const menu = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".nav-link");

// mo menu
menu.addEventListener("click", () => {
  nav.style.left = "0";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.left = "-40%";
  });
});
