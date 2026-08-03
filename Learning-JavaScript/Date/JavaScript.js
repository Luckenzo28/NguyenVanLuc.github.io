// lấy ngày giờ hiện tại
const now = new Date();
console.log(now);

//tạo một ngày giờ cụ thể
const birthday = new Date("2004-01-28");
console.log(birthday);

//lấy ngày, tháng, năm
console.log(now.getDate()); //ngày
console.log(now.getMonth() + 1); //tháng (bắt đầu từ 0)
console.log(now.getFullYear()); //năm
console.log(
  now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
);

//lấy thứ trong tuần (0: Chủ nhật, 1: Thứ hai, ..., 6: Thứ bảy)
console.log(now.getDay() + 1);

//lấy giờ, phút, giây
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());

//hiển thị theo ngày địa phương
console.log(now.toLocaleDateString());

//hiển thị theo giờ địa phương
console.log(now.toLocaleTimeString());
