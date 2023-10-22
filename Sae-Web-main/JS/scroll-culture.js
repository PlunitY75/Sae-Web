document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollBouton");

  // Écoutez le clic sur le bouton
  scrollButton.addEventListener("click", function () {
    // Déplacez la page vers une section spécifique (par exemple, la section 1)
    const section1 = document.getElementById("galerie-photo-video");
    section1.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll('.guadEnImage-images img').forEach(image => {
  image.onclick = () => {
      const popupImage = document.querySelector('.popup-image img');
      popupImage.src = image.src;

      // Cacher la navbar lorsque le popup s'ouvre

      document.getElementById('navbar').style.display = 'none';
      document.querySelector('.popup-image').style.display = 'block';
  

      
  }
});

document.querySelector('.popup-image span').onclick = () => {
  // Réafficher la navbar lorsque le popup est fermé
  document.getElementById('navbar').style.display = 'flex';

  document.querySelector('.popup-image').style.display = 'none';
}

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

