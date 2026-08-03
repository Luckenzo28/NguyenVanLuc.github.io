// console.log()  dùng để in dữ liệu ra console.
console.log("Hello World");
console.log(5 + 10);

// console.error() hiển thị lỗi ra console.
console.error("Không tìm thấy dữ liệu");

// console.warn() hiển thị cảnh báo ra console.
console.warn("Cảnh báo lỗi");

// console.table() hiển thị dữ liệu dạng bảng ra console.
const students = [
  { name: "Luc", age: 20 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
];
console.table(students);

//console.info() hiển thị thông tin ra console.
console.info("Thông tin: Đây là thông tin quan trọng");

//console.warn() hiển thị cảnh báo ra console.
console.warn("mật khẩu quá ngắn");

//console.clear() xóa tất cả dữ liệu trên console.

//console.time() và console.timeEnd() dùng để đo thời gian thực thi của một đoạn mã.
console.time("Thời gian thực thi");
for (let i = 0; i < 1000000; i++) {
  // Một đoạn mã để đo thời gian
}
console.timeEnd("Thời gian thực thi"); //tên trong time và timeEnd phải giống nhau.

//console.count() đếm số lần gọi console.count() với cùng một nhãn.
console.count("Đếm số lần gọi");
console.count("Đếm số lần gọi");
console.count("Đếm số lần gọi");

//console.dir() hiển thị thông tin chi tiết về một đối tượng.
const person = {
  name2: "Luc",
  age2: 20,
};
console.dir(person);

//console.assert() kiểm tra điều kiện và hiển thị thông báo lỗi nếu điều kiện không đúng.
let age = 15;
console.assert(age >= 18, "Bạn chưa đủ tuổi"); //điều kiện sai

console.assert(age >= 14, "Bạn chưa đủ tuổi"); //điều kiện đúng và không được in ra console
