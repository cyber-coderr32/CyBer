// Botão "Saber Mais"
document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("servicos").scrollIntoView({ behavior: "smooth" });
});

// Botão de contato abre WhatsApp
document.getElementById("contactBtn").addEventListener("click", () => {
  window.open("https://wa.me/244926815124", "_blank");
});

// Menu responsivo (mobile)
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
