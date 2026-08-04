// Lấy các phần tử HTML
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const result = document.getElementById("result");

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

// Nút Cộng
add.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);

  result.textContent = a + b;
});

// Nút Trừ
sub.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);

  result.textContent = a - b;
});

// Nút Nhân
mul.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);

  result.textContent = a * b;
});

// Nút Chia
div.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);

  if (b === 0) {
    result.textContent = "Không thể chia cho 0";
    return;
  }

  result.textContent = a / b;
});
