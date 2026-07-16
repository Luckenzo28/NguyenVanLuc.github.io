// ===========================
// 1. SCROLL CÁC NÚT TRONG SECTION HOME
// ===========================

// Learn More → cuộn tới section About bằng scrollIntoView()
document.getElementById("learnMoreBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

// Scroll Down 500px → cuộn thêm 500px từ vị trí hiện tại bằng scrollBy()
document.getElementById("scrollDown500Btn").addEventListener("click", () => {
  window.scrollBy({
    top: 500,
    behavior: "smooth",
  });
});

// Go Bottom → cuộn thẳng xuống cuối trang bằng scrollTo()
document.getElementById("goBottomBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

// ===========================
// 2. SCROLL TRONG SECTION SKILLS
// ===========================

// Go Contact → cuộn tới section Contact
document.getElementById("goContactBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

// ===========================
// 3. SCROLL TRONG SECTION GALLERY
// ===========================

// Go To Card 8 → cuộn tới card8 (nằm bên trong .card-list có overflow riêng)
document.getElementById("goToCard8Btn").addEventListener("click", () => {
  document.getElementById("card8").scrollIntoView({
    behavior: "smooth",
    block: "nearest", // tránh kéo cả trang chính cuộn theo, chỉ cuộn bên trong .card-list
  });
});

// ===========================
// 4. SCROLL TRONG SECTION CONTACT
// ===========================

// Scroll Up 400px → cuộn lên trên 400px bằng scrollBy() với giá trị âm
document.getElementById("scrollUp400Btn").addEventListener("click", () => {
  window.scrollBy({
    top: -400,
    behavior: "smooth",
  });
});

// ===========================
// 5. ACTIVE MENU KHI CUỘN TRANG (dùng scrollY + offsetTop)
// ===========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = document.getElementById("header").offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 10; // trừ thêm khoảng đệm
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===========================
// 6. FORM VALIDATION
// ===========================

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    clearError(input);

    if (input.required && input.type === "checkbox" && !input.checked) {
      showError(input, "Bạn phải đồng ý điều khoản");
      isValid = false;
      return;
    }

    if (input.type === "checkbox") return;

    if (input.required && input.value.trim() === "") {
      showError(input, "Trường này không được để trống");
      isValid = false;
      return;
    }

    if (input.value.trim() === "") return;

    if (input.minLength > 0 && input.value.length < input.minLength) {
      showError(input, `Tối thiểu ${input.minLength} ký tự`);
      isValid = false;
    }

    if (input.maxLength > 0 && input.value.length > input.maxLength) {
      showError(input, `Tối đa ${input.maxLength} ký tự`);
      isValid = false;
    }

    if (input.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, "Email không đúng định dạng");
        isValid = false;
      }
    }

    if (input.type === "number") {
      const val = Number(input.value);
      if (input.min && val < Number(input.min)) {
        showError(input, `Giá trị tối thiểu là ${input.min}`);
        isValid = false;
      }
      if (input.max && val > Number(input.max)) {
        showError(input, `Giá trị tối đa là ${input.max}`);
        isValid = false;
      }
    }

    if (input.pattern) {
      const regex = new RegExp(input.pattern);
      if (!regex.test(input.value)) {
        showError(input, "Định dạng không hợp lệ");
        isValid = false;
      }
    }
  });

  if (isValid) {
    alert("Form hợp lệ! Đang submit...");
    // form.submit();
  }
});

function showError(input, message) {
  input.classList.add("error");
  let errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains("error-message")) {
    errorEl = document.createElement("span");
    errorEl.classList.add("error-message");
    input.after(errorEl);
  }
  errorEl.textContent = message;
}

function clearError(input) {
  input.classList.remove("error");
  const errorEl = input.nextElementSibling;
  if (errorEl && errorEl.classList.contains("error-message")) {
    errorEl.remove();
  }
}
