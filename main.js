//
//Menu Coding
//
// Elements
let toggle = document.querySelector(".toggle-menu");
let theLinksUl = document.querySelector("nav ul");

// the links menu Function
toggle.addEventListener("click", function () {
  theLinksUl.style.cssText =
    "display: flex;  flex-direction: column;position: absolute;top: 100%;left: 0;width: 100%;background-color: rgb(0, 0, 0 / 50%);";
});
// Quiting from the links menu method-1
window.ondblclick = function () {
  theLinksUl.style.cssText = "display: none";
};
// Quiting from the links menu method-2
let ies = Array.from(theLinksUl.children);
ies.forEach(function (i) {
  i.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      theLinksUl.style.cssText = "display: none";
    }
  });
});

//
//Text Coding
//
let texts = Array.from(document.querySelectorAll(".landing .text"));
let rightButton = document.querySelector("button.right");
let leftButton = document.querySelector("button.left");
let bulletsFather = document.querySelector(".landing ul.bullets");
let textCounter = 1;
let counts = texts.length;
// initializing the checker function

for (i = 1; i <= texts.length; i++) {
  let ulLi = document.createElement("li");
  ulLi.setAttribute("data-index", i);
  bulletsFather.appendChild(ulLi);
}

let bullets = Array.from(bulletsFather.children);
// bullets[Math.round((texts.length - 1) / 2)].classList.add("active");

theChecker();

function theChecker() {
  bullets.forEach(function (li) {
    li.classList.remove("active");
  });
  texts.forEach(function (text) {
    text.classList.remove("active");
  });
  bullets[textCounter - 1].classList.add("active");
  texts[textCounter - 1].classList.add("active");

  if (textCounter == 1) {
    leftButton.classList.add("disabled");
    rightButton.classList.remove("disabled");
  } else if (textCounter == counts) {
    rightButton.classList.add("disabled");
    leftButton.classList.remove("disabled");
  } else {
    leftButton.classList.remove("disabled");
    rightButton.classList.remove("disabled");
  }

  console.log(textCounter);
  // console.log(counts);
  // console.log()
}
for (i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    textCounter = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

leftButton.onclick = prevSlide;

rightButton.onclick = nextSlide;

function prevSlide() {
  if (textCounter == 1) {
    return false;
  } else {
    textCounter--;
    theChecker();
  }
}
console.log(leftButton);
console.log(rightButton);
function nextSlide() {
  if (textCounter == counts) {
    return false;
  } else {
    textCounter++;
    theChecker();
  }
}
