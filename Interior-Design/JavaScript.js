/*
Cuối tuần, tuần sau mục tiêu hoàn thành các mục sau:
✅ console
✅ Math
✅ Date
✅ JSON
✅ String
✅ Number
✅ Array
✅ Object
✅ document (DOM)
✅ window (BOM)
✅ setTimeout() / setInterval()
✅ localStorage
 */

let name = "luc";
let age = 15;

console.log("hello world"); // console.log dùng để in dữ liệu hiển thị thông tin

const pi = 3.14;
const country = "vietnam";
console.log(country); //  console.log dùng để in dữ liệu

/*let có thể thay đổi giá trị 
       let age=20;
       age=21;
   console.log(age); đúng

   let age=21;
   let age=22; sai vì nó k được khai báo lại trong cùng phạm vi

   còn const thì ngược lại let*/

console.warn("warning"); //dùng để hiển thị thông báo cảnh báo

if (age < 18) {
  console.warn("bạn chưa đủ 18 tuổi.");
}

let password = "";
if (password === "") {
  console.error("mật khẩu của bạn không được để trống."); //dùng để thông báo lỗi xuất hiện với màu đỏ trong console
}

if (age >= 18) {
  console.log("bạn đã đủ 18 tuổi.");
} else {
  console.log("bạn chưa đủ 18 tuổi.");
}
// if Chạy khi điều kiện đúng
//else Chạy khi điều kiện sai

/* ==   // Bằng
   ===  // Bằng cả giá trị và kiểu dữ liệu
   !=   // Khác
   !==  // Khác cả giá trị và kiểu
   >
   <
   >=
   <= 
   
AND (&&)
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Được vào");
}

Điều kiện chỉ đúng khi cả hai đều đúng.

OR (||)
let isAdmin = false;
let isTeacher = true;

if (isAdmin || isTeacher) {
    console.log("Có quyền truy cập");
}

Chỉ cần một trong hai đúng.

NOT (!)
let isLogin = false;

if (!isLogin) {
    console.log("Vui lòng đăng nhập");
}

!false sẽ thành true.
   */

const student = {
  name: "Luc",
  tuoi: 22,
  major: "It",
};
console.table(student); //dùng để hiển thị dữ liệu dạng bảng làm việc với mảng và object.

/* console.clear(); //dùng để xóa toàn bộ dưx liệu trong console. */

let radius = 5;
let area = Math.PI * radius * radius;

console.log(area);

let ramdom = Math.floor(Math.random() * 10);
console.log(ramdom);
console.log(Math.ceil(5.2)); //làm tròn lên
console.log(Math.round(5.4)); //làm tròn theo quy tắc thông thường <0.5 hoặc>=0.5
console.log(Math.max(3, 5, 2, 5, 7)); //tìm số lớn nhất
console.log(Math.pow(2, 3)); // tìm số lũy thừa 2 mũ 3
//sqrt căn bậc 2
//abs giá trị tuyệt đối

let now = new Date();
console.log(now); //new date() sẽ lấy thời gian hiện tại của máy tính
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay() + 1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//hoàn chỉnh ngày giờ hoàn chỉnh
console.log(
  now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
);
console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

//JSON

let json = JSON.stringify(student); //chuyển Object thành chuỗi JSON
console.log(json);

console.log(student);
console.info("Đăng nhập thành công");
console.warn("Mật khẩu yếu");
console.error("Không kết nối được máy chủ");
console.table(student);

console.time("test");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("test");

console.count("Click");

console.assert(student.age >= 18, "Chưa đủ tuổi");
