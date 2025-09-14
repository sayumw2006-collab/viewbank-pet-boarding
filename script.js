// NAVBAR TOGGLE
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  ariaExpanded();
});

function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");
  csUL.setAttribute("aria-expanded", csExpanded === "false" ? "true" : "false");
}

// FANCYBOX GALLERY
Fancybox.bind("[data-fancybox='gallery']", {
  Thumbs: true,
  Toolbar: { display: ["close"] },
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
