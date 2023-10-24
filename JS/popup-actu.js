window.onload = function () {
  const popupButtons = document.querySelectorAll("#open-popup");

  popupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popupId = button.getAttribute("data-popup");

      const popup = document.getElementById(popupId);

      if (popup) {
        popup.classList.add("active");
      }
    });
  });

  const closeButtons = document.querySelectorAll(".popup .close-btn");
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
      const popup = closeButton.closest(".popup");

      if (popup) {
        popup.classList.remove("active");
      }
    });
  });
};
