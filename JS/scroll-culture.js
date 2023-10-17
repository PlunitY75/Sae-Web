document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollBouton");

  // Écoutez le clic sur le bouton
  scrollButton.addEventListener("click", function () {
    // Déplacez la page vers une section spécifique (par exemple, la section 1)
    const section1 = document.getElementById("galerie-photo-video");
    section1.scrollIntoView({ behavior: "smooth" });
  });
});
