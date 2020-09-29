// Your code goes here

/*
mouseover nav 
keydown 
wheel  img 
load
focus
resize
scroll
select
dblclick
drag / drop

Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
 Stop the navigation items from refreshing the page by using preventDefault()

*/

//declarations
const nav = document.querySelectorAll("a");
const bannerImage = document.querySelector("img");

const images = document.querySelectorAll(".img-content");

const destination = document.querySelectorAll(".destination");

//events

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
    bannerImage.src = "img/destination.jpg";
  }
});
//dblClick

nav.forEach((navItem) => {
  navItem.addEventListener("dblclick", () => {
    navItem.style.color = "black";
    navItem.style.fontSize = "16px";
  });
});
