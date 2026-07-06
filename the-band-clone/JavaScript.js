// =========================
// SLIDER
// =========================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}

// Hiển thị ảnh đầu tiên
showSlide(currentSlide);

// Tự động chuyển ảnh mỗi 3 giây
setInterval(() => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}, 3000);

// =========================
// MODAL
// =========================
const modal = document.querySelector(".modal");
const buyBtns = document.querySelectorAll(".tour-btn");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

// Mở modal
buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// Đóng modal
function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);

// Click ra ngoài modal
modal.addEventListener("click", closeModal);

// Không đóng khi click bên trong
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
