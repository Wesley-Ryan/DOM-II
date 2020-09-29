// Your code goes here

/*
mouseover - nav link change 
keydown - banner img changes to cat
wheel - alert pops up 
load - alert lame i know 
focus - focus on footer and h4 change in style
resize - Console.log the size of the window 
scroll - 
select
dblclick - nav link go back 
drag / drop

Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
 Stop the navigation items from refreshing the page by using preventDefault()

*/

//declarations
const nav = document.querySelectorAll("a");
const bannerImage = document.querySelector("img");

const images = document.querySelectorAll(".img-content");

const destination = document.querySelectorAll(".destination");

const button = document.querySelector(".btn");

const footer = document.querySelector(".footer");

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

//dblClick

nav.forEach((navItem) => {
  navItem.addEventListener("dblclick", () => {
    navItem.style.color = "black";
    navItem.style.fontSize = "16px";
  });
});
