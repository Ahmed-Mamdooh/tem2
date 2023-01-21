// scroll to top
let scrollButton = document.querySelector(".scroll-to-top");
scrollButton.onclick = function () {
  window.scroll({
    top: 0,
    behaviour: "smooth",
  });
};
addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});
// let numsPlace = document.querySelector(".stats");
// console.log(numsPlace.offsetTop);
// window.onscroll = function () {
//   if (numsPlace.offsetTop < window.scrollY) {
//     console.log("reached");
//   }
// };

let nums = document.querySelectorAll(".stats .box .number");
let statsContainer = document.querySelector(".stats");
let isStarted;
window.addEventListener("scroll", function () {
  if (window.scrollY >= statsContainer.offsetTop - 300) {
    if (isStarted === undefined) {
      nums.forEach((num) => {
        countingFromOneToGoal(num);
        isStarted = "done";
      });
    }
  }
});
let progressChartContainers = document.querySelector(".skills");
let progressChartElements = document.querySelectorAll(".skills .prog span");
let isStarted2;
window.addEventListener("scroll", function () {
  if (window.scrollY >= progressChartContainers.offsetTop - 300) {
    if (isStarted2 === undefined) {
      progressChartElements.forEach((progressChartElement) => {
        console.log(progressChartElement);
        console.log(progressChartElement.dataset);
        progressChartElement.style.width =
          progressChartElement.dataset.progress;
        isStarted2 = "done";
      });
    }
  }
});
function countingFromOneToGoal(element) {
  let goal = element.dataset.finalnumber;
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
}

//
//
//
//Menu Coding
// Elements
let toggle = document.querySelector(".toggle-menu");
let theLinksUl = document.querySelector("nav ul");

// the links menu Function
toggle.addEventListener("click", function () {
  theLinksUl.style.cssText =
    "display: flex;  flex-direction: column;position: absolute;top: 100%;left: 0;width: 100%;background-color: rgb(0, 0, 0 / 50%);";
});
// Quiting from the links menu methods
let ies = Array.from(theLinksUl.children);
ies.forEach(function (i) {
  i.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
      theLinksUl.style.cssText = "display: none";
    }
  });
});

// for phones and tablets
if (window.matchMedia("(max-width: 767px)").matches) {
  window.onclick = function (e) {
    let falseyTrails = 0;
    if (!e.composedPath()[0].classList.contains("toggle-menu")) {
      for (let i = 0; i < e.composedPath().length; i++) {
        if (e.composedPath()[i].localName !== "ul") falseyTrails++;
      }
      if (falseyTrails === e.composedPath().length) {
        theLinksUl.style.cssText = "display: none";
      }
    }
  };
}
// fixing the rezizing problem
// Problem 1
window.onresize = function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    theLinksUl.style.cssText =
      "flex-direction: row; width: auto; background-color: transparent";
  } else if (window.matchMedia("(max-width: 767px)").matches) {
    theLinksUl.style.display = "none";
  }
};
// Problem 2
if (window.matchMedia("(max-width: 767px)").matches) {
  theLinksUl.style.cssText = "display: none";
}

//Text Coding
let texts = Array.from(document.querySelectorAll(".landing .text"));
let rightButton = document.querySelector("button.right");
let leftButton = document.querySelector("button.left");
let bulletsFather = document.querySelector(".landing ul.bullets");
let textCounter = 1;
let counts = texts.length;

for (i = 1; i <= texts.length; i++) {
  let ulLi = document.createElement("li");
  ulLi.setAttribute("data-index", i);
  bulletsFather.appendChild(ulLi);
}

let bullets = Array.from(bulletsFather.children);

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
function nextSlide() {
  if (textCounter == counts) {
    return false;
  } else {
    textCounter++;
    theChecker();
  }
}
// THIS IS NOT ITS PLACE
/*
function countingFromOneToGoal(element) {
  let goal = element.dataset.finalnumber;
  let done = false;
  if (element.textContent !== goal) {
    let counter = setInterval(() => {
      element.textContent++;
      clearInterval(counter);
    }, 1500 / goal);
  }
  if (element.textContent === goal) {
    done = true;
  }
  if (!done) {
    window.requestAnimationFrame(countingFromOneToGoal);
  }
}

*/
