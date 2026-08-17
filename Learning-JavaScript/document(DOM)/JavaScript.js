// ==========================================
// 1. DOM
// ==========================================

// Lấy form
const todoForm = document.querySelector("#todoForm");

// Lấy input
const todoInput = document.querySelector("#todoInput");

// Lấy danh sách Todo
const todoList = document.querySelector("#todoList");

// Lấy counter
const counter = document.querySelector("#counter");

// Lấy message
const message = document.querySelector("#message");

// Lấy clock
const clock = document.querySelector("#clock");

// Lấy tất cả filter button
const filterButtons = document.querySelectorAll(".filter-btn");

// ==========================================
// 2. ARRAY
// ==========================================

// Array chứa tất cả Todo

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// ==========================================
// 3. FILTER
// ==========================================

let currentFilter = "all";

// ==========================================
// 4. HIỂN THỊ TODO
// ==========================================

function renderTodos() {
  // Xóa nội dung cũ

  todoList.innerHTML = "";

  // Lọc Todo

  let filteredTodos = todos.filter(function (todo) {
    if (currentFilter === "all") {
      return true;
    }

    if (currentFilter === "active") {
      return !todo.completed;
    }

    if (currentFilter === "completed") {
      return todo.completed;
    }
  });

  // Duyệt qua từng Todo

  filteredTodos.forEach(function (todo) {
    // Tạo li

    const li = document.createElement("li");

    li.classList.add("todo-item");

    // Nếu Todo hoàn thành
    // thêm class completed

    if (todo.completed) {
      li.classList.add("completed");
    }

    // Tạo checkbox

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.checked = todo.completed;

    // Khi checkbox thay đổi

    checkbox.addEventListener("change", function () {
      toggleTodo(todo.id);
    });

    // Tạo text

    const span = document.createElement("span");

    span.classList.add("todo-text");

    span.textContent = todo.title;

    // Tạo delete button

    const deleteButton = document.createElement("button");

    deleteButton.classList.add("delete-btn");

    deleteButton.textContent = "Delete";

    // Khi click Delete

    deleteButton.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    // Đưa các phần tử vào li

    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(deleteButton);

    // Đưa li vào ul

    todoList.appendChild(li);
  });

  // Cập nhật counter

  updateCounter();
}

// ==========================================
// 5. ADD TODO
// ==========================================

todoForm.addEventListener("submit", function (event) {
  // Ngăn form reload trang

  event.preventDefault();

  // Lấy giá trị input

  const title = todoInput.value.trim();

  // Kiểm tra input rỗng

  if (title === "") {
    showMessage("Please enter a task.");

    return;
  }

  // Tạo Object Todo

  const newTodo = {
    id: Date.now(),

    title: title,

    completed: false,
  };

  // Thêm Object vào Array

  todos.push(newTodo);

  // Lưu vào localStorage

  saveTodos();

  // Hiển thị lại danh sách

  renderTodos();

  // Xóa input

  todoInput.value = "";

  // Hiển thị thông báo

  showMessage("Task added successfully.");
});

// ==========================================
// 6. TOGGLE TODO
// ==========================================

function toggleTodo(id) {
  // Tìm Todo có id tương ứng

  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  // Đảo trạng thái completed

  if (todo) {
    todo.completed = !todo.completed;
  }

  // Lưu lại

  saveTodos();

  // Render lại

  renderTodos();
}

// ==========================================
// 7. DELETE TODO
// ==========================================

function deleteTodo(id) {
  // Tìm Todo dựa vào id
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  // Kiểm tra Todo đã completed chưa
  if (!todo.completed) {
    showMessage("Please complete the task first.");

    return;
  }

  // Nếu đã completed thì xóa
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  // Lưu lại localStorage
  saveTodos();

  // Hiển thị lại danh sách
  renderTodos();

  // Thông báo
  showMessage("Task deleted.");
}

// ==========================================
// 8. FILTER BUTTON
// ==========================================

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Xóa active của tất cả button

    filterButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    // Thêm active cho button vừa click

    button.classList.add("active");

    // Lấy data-filter

    currentFilter = button.dataset.filter;

    // Render lại

    renderTodos();
  });
});

// ==========================================
// 9. LOCAL STORAGE
// ==========================================

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ==========================================
// 10. MESSAGE + setTimeout()
// ==========================================

function showMessage(text) {
  // Hiển thị message

  message.textContent = text;

  // Sau 2 giây xóa message

  setTimeout(function () {
    message.textContent = "";
  }, 2000);
}

// ==========================================
// 11. COUNTER
// ==========================================

function updateCounter() {
  // Đếm tổng số Todo

  const total = todos.length;

  // Đếm Todo chưa hoàn thành

  const active = todos.filter(function (todo) {
    return !todo.completed;
  }).length;

  counter.textContent = `${active} active / ${total} total`;
}

// ==========================================
// 12. setInterval()
// ==========================================

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");

  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Chạy ngay lần đầu

updateClock();

// Cập nhật mỗi 1 giây

setInterval(updateClock, 1000);

// ==========================================
// 13. INITIAL RENDER
// ==========================================

renderTodos();
