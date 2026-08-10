// ==================================================
// MENU MOBILE
// ==================================================

// ----- Lấy các phần tử -----
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// ----- Sự kiện mở / đóng menu -----
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});
// ----- Hàm đóng menu -----
const closeMenu = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

// ----- Click vào overlay để đóng menu -----
overlay.addEventListener("click", closeMenu);

// ----- Click vào từng liên kết thì đóng menu -----
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ==================================================
// CHUYỂN ĐỔI CHẾ ĐỘ SÁNG / TỐI
// ==================================================

// ----- Lấy các phần tử -----
const themeBtn = document.querySelector(".theme-btn");
const icon = themeBtn.querySelector("i.");

// ----- Sự kiện chuyển đổi Dark Mode -----
themeBtn.addEventListener("click", () => {
  // Thêm hoặc xóa class dark cho body
  document.body.classList.toggle("dark");

  // Đổi icon mặt trăng ↔ mặt trời
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// ==================================================
// MODAL ĐẶT BÀN
// ==================================================

// ----- Lấy các phần tử -----
const openModal = document.querySelector("#open-modal");
const menuModal = document.querySelector(".menu-modal");
const closeModal = document.querySelector(".modal-close");

openModal.addEventListener("click", () => {
  console.log("thanh cong");
});

// ----- Hàm mở modal -----
const openMenuModal = () => {
  menuModal.classList.add("active");
};
// ----- Hàm đóng modal -----
const closeMenuModal = () => {
  menuModal.classList.remove("active");
};
openModal.addEventListener("click", openMenuModal);
closeModal.addEventListener("click", closeMenuModal);

const reservationForm = document.querySelector("#reservation-form");
// ----- Xử lý khi gửi form -----
reservationForm.addEventListener("submit", () => {
  alert("🎉 Đã gửi yêu cầu đặt bàn thành công!");
  reservationForm.reset();
});
