// setTimeout() dùng để thực hiện một đoạn code
// sau một khoảng thời gian.
// Thời gian được tính bằng milliseconds.
// 1000ms = 1 giây.

let timer = setTimeout(function () {
  console.log("Hello World");
}, 2000);

// Output sau 2 giây:
// Hello World

// clearTimeout() dùng để hủy setTimeout()
// trước khi nó được thực hiện.

clearTimeout(timer);

// Output:
// Không có gì xảy ra vì timer đã bị hủy.

// setInterval() dùng để thực hiện một đoạn code
// lặp đi lặp lại sau mỗi khoảng thời gian.
// 1000ms = 1 giây.

let count = 0;

let interval = setInterval(function () {
  count++;

  console.log(count);

  // Khi count đạt 5 thì dừng interval.

  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);

// Output:
// 1
// 2
// 3
// 4
// 5
