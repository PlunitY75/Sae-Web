const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

let sectionS = document.querySelectorAll('section');

window.onscroll = () => {
    sectionS.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 175;
      let height = sec.offsetHeight;

      if(top + 500 >= offset && top  < offset + height + 100)
        sec.classList.add('show-animate');
      else 
        sec.classList.remove('show-animate');
    
    })
}
