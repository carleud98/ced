// FIRST RESPONSIVE JAVASCRIPT FOR THE NAVBAR

// function dropdownFunction() {
//   document.getElementById("toggleMenu").style.display = "flex";
// }

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const toggleMenu = document.getElementById("toggleMenu");

  toggleBtn.addEventListener("click", function () {
    if (
      toggleMenu.style.display === "none" ||
      toggleMenu.style.display === ""
    ) {
      toggleMenu.style.display = "flex";
    } else {
      toggleMenu.style.display = "none";
    }
  });
});
