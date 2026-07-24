const components = [
  "header",
  "sidebar",
  "showcase",
  "services",
  "designers",
  "packages",
  "contact",
  "footer",
];
Promise.all(
  components.map((component) =>
    fetch(`components/${component}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(component).innerHTML = data;
      }),
  ),
).then(() => {
  initSidebar();

  initGallery();

  initForm();
});

/*
const components = [...]	  Tạo danh sách các file HTML cần tải.
Promise.all()	   Đợi tất cả các file tải xong.
components.map()	   Lặp qua từng tên component.
fetch()   	Đọc file HTML.
response.text()	    Chuyển nội dung file thành chuỗi văn bản.
document.getElementById(component)	   Tìm <div> có id tương ứng trong index.html.
.innerHTML = data	   Chèn nội dung HTML vào <div>.
.then(() => {...})   	Sau khi mọi component đã được chèn xong, mới khởi tạo các chức năng JavaScript.
initSidebar()   	Khởi tạo sidebar.
initGallery()	   Khởi tạo gallery.
initForm()	   Khởi tạo xử lý form.*/
