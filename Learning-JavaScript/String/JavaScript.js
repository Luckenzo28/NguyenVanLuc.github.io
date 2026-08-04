// length dùng để đếm số thứ tự trong chuỗi, khoảng trắng cũng được tính là 1 ký tự
let text = "Hello World";
console.log(text.length); // Output: 11

//trim() dùng để xóa khoảng trắng ở đầu và cuối chuỗi, không xóa khoảng trắng ở giữa chuỗi
let text1 = "   Hello World   ";
console.log(text1.trim()); // Output: "Hello World"

//toUpperCase() dùng để chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa
let text2 = "hello world";
console.log(text2.toUpperCase()); // Output: "HELLO WORLD"

//toLowerCase() dùng để chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường
let text3 = "HELLO WORLD";
console.log(text3.toLowerCase()); // Output: "hello world"

//includes() dùng để kiểm tra xem chuỗi có chứa một chuỗi con hay không, trả về true hoặc false
let text4 = "Hello World";
console.log(text4.includes("World")); // Output: true
console.log(text4.includes("worlds")); // Output: false

//replace() dùng để thay thế một chuỗi con bằng một chuỗi khác.
let text5 = "hello Java";
console.log(text5.replace("Java", "JavaScript")); // Output: "hello JavaScript"

//split() dùng để tách một chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân tách.
let skills = "HTML,CSS,JS";
console.log(skills.split(",")); // Output: ["HTML", "CSS", "JS"]

//slice() dùng để cắt một phần của chuỗi và trả về một chuỗi mới.
let text6 = "Hello World";
console.log(text6.slice(0, 5)); // Output: "Hello" lấy từ vị trí 0 đến vị trí 5 nhưng không lấy vị trí 5
console.log(text6.slice(6)); // Output: "World" lấy từ vị trí 6 đến hết chuỗi

//startWith() dùng để kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con hay không, trả về true hoặc false
let text7 = "Hello World";
console.log(text7.startsWith("Hello")); // Output: true
console.log(text7.startsWith("World")); // Output: false

//endWith() dùng để kiểm tra xem chuỗi có kết thúc bằng một chuỗi con hay không, trả về true hoặc false
let text8 = "Hello World";
console.log(text8.endsWith("World")); // Output: true
console.log(text8.endsWith("Hello")); // Output: false

//indexOf() dùng để tìm vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi, trả về -1 nếu không tìm thấy
let text9 = "Hello World";
console.log(text9.indexOf("World")); // Output: 6
console.log(text9.indexOf("world")); // Output: -1

//repeat() dùng để lặp lại một chuỗi một số lần nhất định.
let text10 = "Hello ";
console.log(text10.repeat(3)); // Output: "Hello Hello Hello "

//padStart() dùng để thêm các ký tự vào đầu chuỗi cho đến khi đạt được độ dài mong muốn.
let text11 = "5";
console.log(text11.padStart(4, "0")); // Output: "0005"

//padEnd() dùng để thêm các ký tự vào cuối chuỗi cho đến khi đạt được độ dài mong muốn.
let text12 = "5";
console.log(text12.padEnd(4, "0")); // Output: "5000"

//charAt() dùng để lấy ký tự tại một vị trí cụ thể trong chuỗi.
let text13 = "Hello World";
console.log(text13.charAt(0)); // Output: "H" lấy ký tự tại vị trí 0
console.log(text13.charAt(6)); // Output: "W" lấy ký tự tại vị trí 6

//at() dùng để lấy ký tự tại một vị trí cụ thể trong chuỗi, hỗ trợ cả chỉ số âm.
let text14 = "Hello World";
console.log(text14.at(0)); // Output: "H" lấy ký tự tại vị trí 0
console.log(text14.at(-1)); // Output: "d" lấy ký tự tại vị trí cuối cùng
