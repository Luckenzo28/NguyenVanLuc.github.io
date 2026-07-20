function initGallery() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  const images = document.querySelectorAll(".gallery img");

  images.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      caption.textContent = this.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
