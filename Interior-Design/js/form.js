function initForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy dữ liệu
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Xóa lỗi cũ
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    name.classList.remove("error-input");
    email.classList.remove("error-input");
    message.classList.remove("error-input");

    let isValid = true;

    // Kiểm tra Name
    if (name.value.trim() === "") {
      document.getElementById("nameError").textContent =
        "Vui lòng điền vào trường này.";
      name.classList.add("error-input");
      isValid = false;
    }

    // Kiểm tra Email
    if (email.value.trim() === "") {
      document.getElementById("emailError").textContent =
        "Vui lòng điền vào trường này.";
      email.classList.add("error-input");
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent =
          "Email không hợp lệ.";
        email.classList.add("error-input");
        isValid = false;
      }
    }

    // Kiểm tra Message
    if (message.value.trim() === "") {
      document.getElementById("messageError").textContent =
        "Vui lòng điền vào trường này.";
      message.classList.add("error-input");
      isValid = false;
    }

    // Nếu hợp lệ
    if (isValid) {
      alert("Gửi thành công!");
      form.reset();
    }
  });
}
