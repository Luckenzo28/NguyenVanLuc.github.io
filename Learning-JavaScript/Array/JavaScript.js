// ========================================
// 1. LẤY CÁC PHẦN TỬ HTML
// ========================================

const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const successMessage = document.querySelector("#successMessage");

// ========================================
// 2. BẮT SỰ KIỆN SUBMIT
// ========================================

form.addEventListener("submit", function (event) {
  // Ngăn form reload trang
  event.preventDefault();

  // ========================================
  // 3. XÓA THÔNG BÁO CŨ
  // ========================================

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  // Xóa class lỗi cũ

  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");

  // ========================================
  // 4. LẤY GIÁ TRỊ INPUT
  // ========================================

  const name = nameInput.value.trim();

  const email = emailInput.value.trim();

  const password = passwordInput.value.trim();

  // Mặc định cho rằng form hợp lệ

  let isValid = true;

  // ========================================
  // 5. KIỂM TRA HỌ TÊN
  // ========================================

  if (name === "") {
    nameError.textContent = "Vui lòng nhập họ tên";

    nameInput.classList.add("input-error");

    isValid = false;
  }

  // ========================================
  // 6. KIỂM TRA EMAIL
  // ========================================
  if (email === "") {
    emailError.textContent = "Vui lòng nhập email";

    emailInput.classList.add("input-error");

    isValid = false;
  } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    emailError.textContent = "Email phải có dạng example@gmail.com";

    emailInput.classList.add("input-error");

    isValid = false;
  }

  // ========================================
  // 7. KIỂM TRA MẬT KHẨU
  // ========================================

  if (password === "") {
    passwordError.textContent = "Vui lòng nhập mật khẩu";

    passwordInput.classList.add("input-error");

    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 8 ký tự";

    passwordInput.classList.add("input-error");

    isValid = false;
  } else if (!/^[A-Z]/.test(password)) {
    passwordError.textContent = "Ký tự đầu tiên phải là chữ IN HOA";

    passwordInput.classList.add("input-error");

    isValid = false;
  } else if (!/[A-Za-z]/.test(password)) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 1 chữ cái";

    passwordInput.classList.add("input-error");

    isValid = false;
  } else if (!/[0-9]/.test(password)) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 1 số";

    passwordInput.classList.add("input-error");

    isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>_\-]/.test(password)) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 1 ký tự đặc biệt";

    passwordInput.classList.add("input-error");

    isValid = false;
  }

  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";

      togglePassword.textContent = "🙈";
    } else {
      passwordInput.type = "password";

      togglePassword.textContent = "👁";
    }
  });

  // ========================================
  // 8. KIỂM TRA KẾT QUẢ CUỐI CÙNG
  // ========================================
  if (isValid) {
    successMessage.textContent = "Đăng ký thành công";

    form.reset();

    setTimeout(function () {
      window.open("youtube.com", "_blank");
    }, 1000);
  }
});
