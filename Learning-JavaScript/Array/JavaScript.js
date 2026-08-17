// Array dùng để lưu trữ nhiều giá trị trong cùng một biến.
// Các phần tử trong Array được đánh index bắt đầu từ 0.

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
// Output: ["Apple", "Banana", "Orange"]

// index dùng để truy cập phần tử trong Array.
// Array bắt đầu từ vị trí 0.

console.log(fruits[0]);
// Output: "Apple"

console.log(fruits[1]);
// Output: "Banana"

// length dùng để đếm số lượng phần tử trong Array.

console.log(fruits.length);
// Output: 3

// push() dùng để thêm phần tử vào cuối Array.

fruits.push("Mango");

console.log(fruits);
// Output: ["Apple", "Banana", "Orange", "Mango"]

// pop() dùng để xóa phần tử cuối cùng của Array.
// pop() trả về phần tử vừa bị xóa.

console.log(fruits.pop());
// Output: "Mango"

console.log(fruits);
// Output: ["Apple", "Banana", "Orange"]

// unshift() dùng để thêm phần tử vào đầu Array.

fruits.unshift("Mango");

console.log(fruits);
// Output: ["Mango", "Apple", "Banana", "Orange"]

// shift() dùng để xóa phần tử đầu tiên của Array.
// shift() trả về phần tử vừa bị xóa.

console.log(fruits.shift());
// Output: "Mango"

console.log(fruits);
// Output: ["Apple", "Banana", "Orange"]

// indexOf() dùng để tìm vị trí xuất hiện đầu tiên
// của một phần tử trong Array.
// Nếu không tìm thấy thì trả về -1.

console.log(fruits.indexOf("Banana"));
// Output: 1

console.log(fruits.indexOf("Mango"));
// Output: -1

// includes() dùng để kiểm tra Array có chứa một phần tử hay không.
// Trả về true hoặc false.

console.log(fruits.includes("Banana"));
// Output: true

console.log(fruits.includes("Mango"));
// Output: false

// slice() dùng để lấy một phần của Array
// và trả về một Array mới.
// slice(start, end): lấy từ start đến trước end.
// Không làm thay đổi Array ban đầu.

console.log(fruits.slice(0, 2));
// Output: ["Apple", "Banana"]

// splice() dùng để thêm, xóa hoặc thay thế phần tử trong Array.
// splice(start, deleteCount)

fruits.splice(1, 1);

console.log(fruits);
// Output: ["Apple", "Orange"]

// Thêm lại Banana vào vị trí index 1.

fruits.splice(1, 0, "Banana");

console.log(fruits);
// Output: ["Apple", "Banana", "Orange"]

// forEach() dùng để duyệt qua từng phần tử trong Array.

fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Output:
// Apple
// Banana
// Orange

// map() dùng để tạo một Array mới
// dựa trên kết quả của từng phần tử.

let numbers = [10, 20, 30, 40, 50];

let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers);
// Output: [20, 40, 60, 80, 100]

// filter() dùng để lọc các phần tử
// thỏa mãn một điều kiện.

let filteredNumbers = numbers.filter(function (number) {
  return number >= 30;
});

console.log(filteredNumbers);
// Output: [30, 40, 50]

// find() dùng để tìm phần tử đầu tiên
// thỏa mãn điều kiện.

let foundNumber = numbers.find(function (number) {
  return number > 25;
});

console.log(foundNumber);
// Output: 30

// some() dùng để kiểm tra xem có ít nhất một phần tử
// thỏa mãn điều kiện hay không.

console.log(
  numbers.some(function (number) {
    return number > 40;
  }),
);
// Output: true

// every() dùng để kiểm tra xem tất cả phần tử
// có thỏa mãn điều kiện hay không.

console.log(
  numbers.every(function (number) {
    return number > 0;
  }),
);
// Output: true

// reduce() dùng để tính toán hoặc gom tất cả phần tử
// trong Array thành một giá trị duy nhất.

let total = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(total);
// Output: 150
