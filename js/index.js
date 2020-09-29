// Your code goes here

/*
mouseover - nav link change 
keydown - banner img changes to cat
wheel - alert pops up 
load - alert lame i know 
focus
resize
scroll
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

//dblClick

nav.forEach((navItem) => {
  navItem.addEventListener("dblclick", () => {
    navItem.style.color = "black";
    navItem.style.fontSize = "16px";
  });
});
