const headerS = document.querySelector("header");

window.addEventListener("scroll", function () {
  headerS.classList.toggle("sticky", window.scrollY > 60);
});

let menuS = document.querySelector("#menu-icon");
let navbarS = document.querySelector(".navbar");

menuS.onclick = () => {
  menuS.classList.toggle("bx-x");
  navbarS.classList.toggle("open");
};
