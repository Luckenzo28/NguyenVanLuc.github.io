// lấy thời gian hiện tại
let now = new Date();
console.log(now);

//tạo ngày cụ thể
let birthday = new Date("2004-01-28");
console.log(birthday);

//lấy năm
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay() + 1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

//hiển thị ngày giờ hoàn chỉnh
console.log(
  now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
);

console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

//hiển thị ngày giờ theo định dạng
console.log(now.toLocaleDateString()); //theo ngày
console.log(now.toLocaleTimeString()); //theo giờ
console.log(now.toLocaleString()); //cả ngày và giờ
