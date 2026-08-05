const themeBtn = document.querySelector(".theme-btn");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    themeBtn.setAttribute("aria-label", "Light Mode");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    themeBtn.setAttribute("aria-label", "Dark Mode");
  }
});
