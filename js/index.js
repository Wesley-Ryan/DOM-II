// Your code goes here

/*
mouseover - nav link change 
keydown - banner img changes to cat
wheel - alert pops up 
load - alert lame i know 
focus - focus on footer and h4 change in style
resize - Console.log the size of the window 
scroll - bottom banner rotates 180
select - Console.log
dblclick - nav link go back 
drag / drop

Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
 Stop the navigation items from refreshing the page by using preventDefault()

*/

//declarations
const homeBtn = document.querySelector(".nav-link");
const logo = document.querySelector(".logo-heading");
const nav = document.querySelectorAll("a");
const bannerImage = document.querySelector("img");
const images = document.querySelectorAll(".img-content");
const destination = document.querySelectorAll(".destination");
const button = document.querySelector(".btn");
const bannerContainer = document.querySelector(".content-destination");
const banner = document.querySelector("#banner");
const footer = document.querySelector(".footer");

const text = document.querySelector("#top-text");
text.addEventListener("select", (e) => {
  console.log(`you selected ${e} `);
});
//  ***EVENTS***

//mouseover
nav.forEach((navItem) => {
  navItem.addEventListener("mouseover", () => {
    navItem.style.color = "purple";
    navItem.style.fontSize = "25px";
  });
});

//keydown

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    bannerImage.src =
      "https://cdn.shopify.com/s/files/1/0344/6469/files/Yamazaki9.jpg?v=1518535612";
  }
});

//wheel
const popUp = () => {
  alert("Where are you going? ");
};

bannerImage.addEventListener("wheel", popUp);

//load

window.addEventListener("load", (event) => {
  alert("page is fully loaded");
});

//focus
const changeH4s = () => {
  destination.forEach((items) => {
    let h4 = items.querySelector("h4");
    h4.style.background = "pink";
    h4.style.color = "white";
    h4.style.textAlign = "center";
    h4.style.fontSize = "30px";
    h4.style.borderRadius = "20px";
  });
};

footer.addEventListener("click", changeH4s);

//resize

const showSize = () => {
  console.log(
    `Window Height: ${window.innerHeight} and the Window width is ${window.innerWidth}`
  );
};

window.addEventListener("resize", showSize);

//scroll

window.addEventListener("scroll", () => {
  banner.style.transform = "rotate(180deg)";
  banner.style.transition = "transform 1.5s";
});

//dblClick

nav.forEach((navItem) => {
  navItem.addEventListener("dblclick", () => {
    navItem.style.color = "black";
    navItem.style.fontSize = "16px";
  });
});

// FOCUS and BLUR

homeBtn.addEventListener("focus", (event) => {
  logo.textContent = `Welcome To The Fun Bus!`;
});

homeBtn.addEventListener("blur", (event) => {
  logo.textContent = "Fun Bus";
});

// Prevent propagation with nested events.

bannerContainer.addEventListener("click", (event) => {
  console.log("Here is the banner container.... ");
});

banner.addEventListener("click", (event) => {
  console.log("Why am I upside down?");
  event.stopPropagation();
});
