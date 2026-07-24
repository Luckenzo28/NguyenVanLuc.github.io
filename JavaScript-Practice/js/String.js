/*⭐⭐⭐⭐⭐ includes()
⭐⭐⭐⭐⭐ slice()
⭐⭐⭐⭐⭐ replace()
⭐⭐⭐⭐⭐ split()
⭐⭐⭐⭐⭐ indexOf()
⭐⭐⭐⭐ startsWith() và endsWith()*/

//length đếm số thứ tự. trong text "javascript có 10 kí tự nên  nó hiển thị 10"
let text = "JavaScript";
console.log(text.length);

//toUpperCase đổi sang chữ in hoa
let name = "luc";
console.log(name.toUpperCase());

//toLowerCase() đổi sang chữ thường
console.log(name.toLowerCase());

//trim() xóa khoảng trắng ở đầu cuối

//includes kiểm tra chuỗi có chứa từ nào đó hay khônng
console.log(text.includes("Java"));

//startsWith() kiểm tra chuỗi bắt đầu bằng gì
console.log(text.startsWith("Script"));

//endsWith() kiểm tra chuỗi kết thúc bằng gì
console.log(text.endsWith("Script"));

//clice() cắt chuỗi
console.log(text.slice(0, 4)); //lấy từ 0 đến 4 nên hiện "Java"
console.log(text.slice(4)); // lấy từ vị trí số 4

//replace() thay chuỗi
console.log(text.replace("JavaScript", "Hello Java"));

//replaceAll() thay tất cả
console.log(text.replace("JavaScript", "Hello"));

//split() tách chuỗi thành mảng
let texts = "HTML,CSS,JavaScript";
let arr = texts.split(",");
console.log(arr);

//indexOf() tìm vị trí đầu tiên
console.log(text.indexOf("S"));
