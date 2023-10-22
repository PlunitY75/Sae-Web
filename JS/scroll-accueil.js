document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollBouton");

  scrollButton.addEventListener("click", function () {
    const section1 = document.getElementById("TA-actualités");
    section1.scrollIntoView({ behavior: "smooth" });
  });
});
