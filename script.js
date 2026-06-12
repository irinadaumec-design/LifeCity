// Открытие и закрытие меню на телефоне
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Интерактивная карта
const mapButtons = document.querySelectorAll(".map button");
const mapText = document.getElementById("mapText");

mapButtons.forEach(button => {
  button.addEventListener("click", () => {
    const place = button.dataset.place;
    mapText.textContent = `Ты выбрал локацию: ${place}`;
  });
});
