//console.log() để in dữ liệu ra console
console.log("Hello World");

//console.warn() hiển thị cảnh báo lỗi
let password = "123";
if (password.length < 6) {
  console.warn("mật khẩu quá ngắn");
} else {
  console.log("mật khẩu hợp lệ");
} // if, else điều kiện đúng và điều kiện sai. length đo độ dài trong đối tượng password.

//console.error() hiển thi lỗi
let email = "";
if (email === "") {
  console.error("email không được để trống");
}

//console.info() hiển thị thông tin
console.info("người dùng đã đăng nhập");

//console.table() hiển  thị Object hoặc Array dưới dạng bảng

const student = {
  name: "Luc",
  age: 22,
  major: "IT",
};
console.table(student); //với Object

const fruits = ["Apple", "Banana", "Orange"];
console.table(fruits); //với Array

//console.clear() xóa toàn bộ console

//console.time() bắt đầu đo thời gian thực thi
//console.timeEnd() kết thúc đo thời gian
console.time("Loop");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("Loop");

//console.assert() kiểm tra điều kiện. nếu đúng thì không hiện gì, nếu điều kiện sai thì báo lỗi
console.assert(age >= 28, "chưa đủ tuổi");

//console.dir() hiển thị chi tiết Object
console.dir(student);
