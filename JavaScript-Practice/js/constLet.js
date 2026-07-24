/* let
│
├── Khai báo biến
├── Có thể đổi giá trị
└── Dùng cho dữ liệu thay đổi

const
│
├── Khai báo biến
├── Phải gán giá trị ngay
├── Không được gán lại
└── Dùng cho dữ liệu cố định

*/

let age = 22;
//let age = 23 là sai
// age = 23 đúng
console.log(age);
//let có thể thay đổi giá trị, không được phép khai báo let age cùng nhau

let country;
country = "viet nam";
console.log(country); // có thể khai báo trước rồi gán sau.

//dùng trong vòng lặp
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let score = 10;
console.log(score);
score = score + 5;
console.log(score);

// const không thể gán lại giá trị khi khai báo
const tuoi = 25;
console.log(tuoi);
/*const age;
age = 24;  lỗi */
