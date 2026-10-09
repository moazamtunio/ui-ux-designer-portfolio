const menuBtn = document.querySelector(".menuBtn");
const menuContainer = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  let menuIcon =
    menuBtn.innerHTML ===
    '<i class="fa-solid fa-bars fa-2xl" style="color: #fd6f00;"></i>'
      ? '<i class="fa-solid fa-xmark fa-2xl" style="color: #fd6f00;"></i>'
      : '<i class="fa-solid fa-bars fa-2xl" style="color: #fd6f00;" ></i>';
  menuBtn.innerHTML = menuIcon;

  let menuDisplay = menuIcon === menuBtn.innerHTML ? "block" : "none";
  menuContainer.style.display = menuDisplay;

});
