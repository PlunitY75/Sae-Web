document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollBouton");

  // Écoutez le clic sur le bouton
  scrollButton.addEventListener("click", function () {
    // Déplacez la page vers une section spécifique (par exemple, la section 1)
    const section1 = document.getElementById("actualités");
    section1.scrollIntoView({ behavior: "smooth" });
  });
});

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