/*
Thuộc tính / Phương thức	Công dụng	Mức độ
Number()	Chuyển sang Number	⭐⭐⭐⭐⭐
parseInt()	Chuyển thành số nguyên	⭐⭐⭐⭐⭐
parseFloat()	Chuyển thành số thực	⭐⭐⭐⭐⭐
Number.isNaN()	Kiểm tra NaN	⭐⭐⭐⭐⭐
Number.isInteger()	Kiểm tra số nguyên	⭐⭐⭐⭐
toFixed()	Làm tròn và định dạng số thập phân	⭐⭐⭐⭐⭐
toString()	Chuyển Number → String	⭐⭐⭐⭐⭐
Number.MAX_VALUE	Giá trị lớn nhất	⭐⭐⭐
Number.MIN_VALUE	Giá trị nhỏ nhất	⭐⭐⭐
Number.MAX_SAFE_INTEGER	Số nguyên an toàn lớn nhất	⭐⭐⭐
Number.MIN_SAFE_INTEGER	Số nguyên an toàn nhỏ nhất	⭐⭐⭐
*/

//let age = 22

// chuyển  dữ liệu thành kiểu number
console.log(Number(age));

//parseInt() chuyển thành số nguyên
let price = "99.99";
console.log(parseInt(price)); // kết quả thành 99 vì nó chỉ lấy phần số nguyên

//parseFloat() chuyển thành số thực
console.log(parseFloat("99.99"));

//Number,isInteger() kiểm tra có phải số nguyên không
console.log(Number.isInteger(10));

//toFixed() giữ số sau dấu phẩy
let pi = 3.141559436;
console.log(pi.toFixed(2));
