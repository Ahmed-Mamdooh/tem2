// // Elements
let toggle = document.querySelector(".toggle-menu");
let theLinksUl = document.querySelector("nav ul");

// // the links menu Function
toggle.addEventListener("click", function () {
  theLinksUl.style.cssText =
    "display: flex;  flex-direction: column;position: absolute;top: 100%;left: 0;width: 100%;background-color: rgb(0, 0, 0 / 50%);";
});
console.log(toggle);
console.log(theLinksUl);
// Quiting from the links menu method-1
window.ondblclick = function () {
  theLinksUl.style.cssText = "display: none";
};
// Quiting from the links menu method-2
let ies = Array.from(theLinksUl.children);
console.log(ies);
ies.forEach(function (i) {
  i.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      theLinksUl.style.cssText = "display: none";
      console.log("Matched");
    }
  });
});
