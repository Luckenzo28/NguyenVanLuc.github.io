// ==========================================
// 1. FILTER PROJECT
// ==========================================

// Lấy tất cả nút filter
const filterButtons = document.querySelectorAll(".filter-btn");

// Lấy tất cả project
const projectCards = document.querySelectorAll(".project-card");

// Lặp qua từng nút filter
filterButtons.forEach(function (button) {
  // Khi click vào button
  button.addEventListener("click", function () {
    // Lấy giá trị data-filter
    const filterValue = button.dataset.filter;

    // -------------------------------
    // Xử lý nút đang được chọn
    // -------------------------------

    filterButtons.forEach(function (btn) {
      // Xóa class active của tất cả button
      btn.classList.remove("active");
    });

    // Thêm active cho button vừa click
    button.classList.add("active");

    // -------------------------------
    // Lọc project
    // -------------------------------

    projectCards.forEach(function (card) {
      // Lấy category của card
      const cardCategory = card.dataset.category;

      // Nếu chọn All
      // hoặc category của card giống filter
      if (filterValue === "all" || filterValue === cardCategory) {
        // Hiện card
        // card.classList.remove("hidden");
        card.style.display = "block";
      } else {
        // Ẩn card
        card.style.display = "none";
      }
    });
  });
});

// ==========================================
// 2. MOBILE MENU
// ==========================================

// Nút mở menu
const menuBtn = document.querySelector(".menu-btn");

// Nút đóng menu
const closeBtn = document.querySelector(".close-btn");

// Menu mobile
const mobileMenu = document.querySelector(".mobile-menu");

// Lớp nền phía sau menu
const overlay = document.querySelector(".overlay");

// ==========================================
// MỞ MENU
// ==========================================

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");

  overlay.classList.add("active");
});

// ==========================================
// ĐÓNG MENU BẰNG NÚT X
// ==========================================

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");

  overlay.classList.remove("active");
});

// ==========================================
// ĐÓNG MENU KHI CLICK OVERLAY
// ==========================================

overlay.addEventListener("click", function () {
  mobileMenu.classList.remove("active");

  overlay.classList.remove("active");
});

// ==========================================
// ĐÓNG MENU KHI CLICK LINK
// ==========================================

// Lấy tất cả link bên trong mobile menu
const mobileLinks = document.querySelectorAll(".mobile-menu a");

// Lặp qua từng link
mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");
  });
});
