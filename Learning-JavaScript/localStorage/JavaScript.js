// localStorage dùng để lưu dữ liệu trên trình duyệt.
// Dữ liệu vẫn còn sau khi reload hoặc đóng rồi mở lại trình duyệt.

let username = "Nguyen Van Luc";

// setItem() dùng để lưu dữ liệu vào localStorage.
// Cú pháp: localStorage.setItem(key, value)

localStorage.setItem("username", username);

// getItem() dùng để lấy dữ liệu từ localStorage.

console.log(localStorage.getItem("username"));
// Output: "Nguyen Van Luc"

// removeItem() dùng để xóa dữ liệu dựa trên key.

localStorage.removeItem("username");

console.log(localStorage.getItem("username"));
// Output: null

// Array có thể được lưu vào localStorage
// bằng cách chuyển Array thành String với JSON.stringify().

let skills = ["HTML", "CSS", "JavaScript"];

localStorage.setItem("skills", JSON.stringify(skills));

// getItem() lấy dữ liệu từ localStorage.
// Dữ liệu nhận được là String.

let data = localStorage.getItem("skills");

console.log(data);
// Output: '["HTML","CSS","JavaScript"]'

// JSON.parse() dùng để chuyển String trở lại thành Array.

let skillsFromStorage = JSON.parse(data);

console.log(skillsFromStorage);
// Output: ["HTML", "CSS", "JavaScript"]

// Object cũng cần JSON.stringify()
// trước khi lưu vào localStorage.

let user = {
  name: "Nguyen Van Luc",
  age: 22,
  job: "Frontend Developer",
};

localStorage.setItem("user", JSON.stringify(user));

// Lấy Object từ localStorage.

let userData = localStorage.getItem("user");

// Chuyển String trở lại thành Object.

let userFromStorage = JSON.parse(userData);

console.log(userFromStorage);
// Output: {name: "Nguyen Van Luc", age: 22, job: "Frontend Developer"}

console.log(userFromStorage.name);
// Output: "Nguyen Van Luc"

// clear() dùng để xóa toàn bộ dữ liệu
// trong localStorage của trang hiện tại.

localStorage.clear();
