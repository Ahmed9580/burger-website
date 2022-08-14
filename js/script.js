const searchBtn = document.getElementById("search-btn");
const inputForm = document.querySelector(".header .search-form");
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".header .navbar");

searchBtn.onclick = () => {
  searchBtn.classList.toggle("fa-xmark");
  inputForm.classList.toggle("show");
  navbar.classList.remove("show");
  menuBtn.classList.remove("fa-xmark");
};

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-xmark");
  navbar.classList.toggle("show");
  inputForm.classList.remove("show");
  searchBtn.classList.remove("fa-xmark");
};

window.onscroll = () => {
  searchBtn.classList.remove("fa-xmark");
  inputForm.classList.remove("show");
  menuBtn.classList.remove("fa-xmark");
  navbar.classList.remove("show");
};

document.onclick = (e) => {
  if (e.target.id !== "search-btn" && e.target.id !== "menu-btn") {
    navbar.classList.remove("show");
    inputForm.classList.remove("show");
    searchBtn.classList.remove("fa-xmark");
    menuBtn.classList.remove("fa-xmark");
  }
};
