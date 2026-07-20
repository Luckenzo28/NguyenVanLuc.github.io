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

components.forEach((component) => {
  fetch(`components/${component}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(component).innerHTML = data;

      if (component === "showcase") {
        initGallery();
      }
    });
});
Promise.all(
  components.map((component) =>
    fetch(`components/${component}.html`)
      .then((res) => res.text())
      .then((data) => {
        document.getElementById(component).innerHTML = data;
      }),
  ),
).then(() => {
  initSidebar();

  initGallery();
});
