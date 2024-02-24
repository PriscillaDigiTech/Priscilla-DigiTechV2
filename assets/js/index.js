const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const menuNav = document.querySelector("#menuNav");

function openNav() {
  menuNav.style.display = "block";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function closeNav() {
  menuNav.style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
}
