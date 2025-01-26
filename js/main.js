// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const drawer = document.getElementById("drawer");

menuToggle.addEventListener("click", () => {
    drawer.classList.remove("-translate-x-full");
});

closeMenu.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
});