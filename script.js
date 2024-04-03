const openMenu = document.querySelector(".hamburger__menu");
const closeMenu = document.querySelector(".close__menu");
const dropShadow = document.querySelector(".drop__shadow");

document.addEventListener("click", function (e) {
  const isDropdown = e.target.matches("[data-dropdown-button]");

  if (!isDropdown && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdown) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;

    // close the dropdown when clicking outside the dropdown area
    if (!e.target.closest("[data-dropdown]")) {
      dropdown.classList.remove("active");
    }
  });
});

// open the mobile menu when the hamburger menu is clicked
openMenu.addEventListener("click", () => {
  document.querySelector(".mobile__navlinks").classList.add("open");
});

// close the mobile menu when the close button is clicked
closeMenu.addEventListener("click", () => {
  document.querySelector(".mobile__navlinks").classList.remove("open");
});

// Close the mobile menu when the drop shadow is clicked
dropShadow.addEventListener("click", () => {
  document.querySelector(".mobile__navlinks").classList.remove("open");
});

//
