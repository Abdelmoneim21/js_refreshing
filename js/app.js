//open and close setting box

let mainColors = localStorage.getItem("color_option");

if (mainColors != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  //remove active class from all colors
  document.querySelectorAll(".colors li").forEach((element) => {
    element.classList.remove("active");
  });

  // add active class for element chosen
  document.querySelectorAll(".colors li").forEach((element) => {
    if (element.dataset.color == mainColors) {
      element.classList.add("active");
    }
  });
}

//toggle menu buttons

document.querySelector(".setting-box img").onclick = function () {
  document.querySelector(".setting-box").classList.toggle("open");
};

/* change colors*/
const colorLi = document.querySelectorAll(".color-box .colors li");

colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // set selected color in local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //remove active class from all colors
    e.target.parentElement.querySelectorAll("li").forEach((element) => {
      element.classList.remove("active");
    });

    //add active class for clicked color
    e.target.classList.add("active");
  });
});

/**
 * create shuffled background on landing
 */

let landing = document.querySelector(".landing");

let imgsArray = [
  "pexels-hasan-albari-1229861.jpg",
  "pexels-jessica-lewis-creative-593322.jpg",
  "pexels-stephan-seeber-1261728.jpg",
  "Website-Design-Background-Feb-09-2022-03-13-55-73-AM.png",
];

setInterval(() => {
  let Random = Math.floor(Math.random() * imgsArray.length);
  landing.style.backgroundImage = 'url("../images/' + imgsArray[Random] + '")';
}, 2000);

/**
 * change random backgrounds option
 */
document.querySelectorAll(".random-backgrounds span").forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll("span").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

/**create skills animation */

let skills = document.querySelector(".skills");

window.onscroll = function () {
  //offset top
  let skillsOffsetTop = skills.offsetTop;
  // console.log(skillsOffsetTop);

  //skills outer height
  let skillsOuterHeight = skills.offsetHeight;
  // console.log(skillsOuterHeight);

  //windowHeight
  let windowHeight = window.innerHeight;
  // console.log(windowHeight);

  //window scrollTop
  let windowScrollTop = window.pageYOffset;
  // console.log(windowScrollTop);

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    document.querySelectorAll(".progress span").forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  }
};

// start gallery section

let imgs = document.querySelectorAll(".images-box img");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    console.log("clicked");

    // create overlay
    let overlay = document.createElement("div");
    overlay.className = "overlayScreen";
    document.body.appendChild(overlay);

    // create image-box
    let imageBox = document.createElement("div");
    imageBox.className = "overlayBox";
    document.body.appendChild(imageBox);
    //create image
    let theImg = document.createElement("img");
    theImg.className = "overlayImg";
    theImg.src = img.src;
    //append image to image box
    imageBox.appendChild(theImg);

    // create exit button
    let exitButton = document.createElement("button");
    exitButton.className = "exitButton";
    exitButton.innerHTML = "X";
    imageBox.appendChild(exitButton);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className == "exitButton") {
    e.target.parentNode.remove();
    document.querySelector(".overlayScreen").remove();
  }
});

// end gallery section
