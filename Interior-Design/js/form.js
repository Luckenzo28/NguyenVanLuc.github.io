function initForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    // Nếu form không hợp lệ, để trình duyệt tự hiện popup
    if (!form.checkValidity()) {
      return;
    }

    // Form hợp lệ
    e.preventDefault();

    alert("Gửi thành công!");

    form.reset();
  });
}
