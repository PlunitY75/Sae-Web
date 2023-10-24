document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollBouton");

  scrollButton.addEventListener("click", function () {
    debugger;
    const section1 = document.getElementById("TA-actualités");
    section1.scrollIntoView({ behavior: "smooth" });
  });
});
