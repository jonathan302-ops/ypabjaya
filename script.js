// Animasi scroll smooth
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Alert tombol daftar
document.querySelector(".cta").addEventListener("click", () => {
  alert("Formulir pendaftaran akan segera dibuka!");
});
