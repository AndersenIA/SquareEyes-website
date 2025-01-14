const containers = document.querySelectorAll(".horizontal-scroll");

containers.forEach((container) => {
  container.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

const mobileMenu = document.getElementsByClassName("mobile_nav-menu")[0];

const openMenu = document.getElementsByClassName("icon-mobile-nav")[0];

const closeMenu = document.getElementsByClassName("mobile-menu-close-icon")[0];

openMenu.addEventListener("click", function () {
  mobileMenu.classList.add("display-block");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("display-block");
});

document.getElementById("cartIcon").addEventListener("click", function () {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";
});

document.getElementById("closeCart").addEventListener("click", function () {
  document.getElementById("cartPopup").style.display = "none";
});
