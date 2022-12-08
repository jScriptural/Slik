"use strict"

let menuItems = ["HOME","CATEGORIES","DASHBOARD","ABOUT US","SETTINGS"];
 let div1 = document.createElement("div");
 let div2 = document.createElement("div");
 let div3 = document.createElement("div");
 let div4 = document.createElement("div");
 let div5 = document.createElement("div");
 
 let childs = [div1,div2,div3,div4,div5];
 let dropDown = document.querySelector(".menu");
 for(let i=0; i < childs.length; ++i ){
   childs[i].innerHTML = `<a href="#">${menuItems[i]}</a>`
 }
  
 for(let child of childs){
   dropDown.appendChild(child);
   child.classList.add("menu-items")
 }
 
 let showMenu = document.querySelector(".bar1");
 let noShowMenu = document.querySelector(".bar2");
 showMenu.addEventListener("click", (e)=>{
    dropDown.style.display= "block";
 });
 noShowMenu.addEventListener("click", (e)=>{
    dropDown.style.display= "none";
 });
