document.addEventListener("click", function (e) {
  const isDropdown = e.target.matches("[data-dropdown-button]");

  if (!isDropdown && e.target.closest("[data-dropdown-button]") != null) return;

  let currentDropdown;
  if (isDropdown) {
    currentDropdown = e.target.closest("[data-dropdown-button]");
    currentDropdown.classList.toggle("active");
  }

  document
    .querySelectorAll("[data-dropdown-button].active")
    .forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
});
