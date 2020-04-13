// Your code goes here
const firstElement = document.querySelector(".intro img");
const secondElement = document.querySelectorAll(".img-content img");
const thirdElement = document.querySelector(".text-content h2");
const fourthElement = document.querySelector("body");
const fifthElement = document.querySelectorAll("a");
const sixthElement = document.querySelector("img");


// FIRST EVENT
firstElement.addEventListener("mouseenter", function(){
    firstElement.style.transform = "scale(1.15)";
    firstElement.style.transition = "transform 0.5s";
});
firstElement.addEventListener("mouseleave", function(){
    firstElement.style.transform = "scale(1)";
    firstElement.style.transition = "transform 0.5s";
    firstElement.style.transition = "none";
    firstElement.style.transform = "none";
});

// SECOND EVENT
secondElement.forEach((El) => {
    El.addEventListener('mouseenter', (event) => {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 1s";
    });
});
secondElement.forEach((El) => {
    El.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "transform 0.2s";
        event.target.style.transition = "none";
        event.target.style.transform = "none";
    });
});

// THIRD EVENT
thirdElement.addEventListener("mouseover", function(event){
    event.target.style.transformOrigin = "top left";
    event.target.style.transform = "scale(3,1)";
    event.target.style.transition = "transform 0.5s";  
});
thirdElement.addEventListener("mouseleave", function(){
    thirdElement.style.transform = "scale(1)";
    thirdElement.style.transition = "transform 0.5s";
});

// FOURTH EVENT
let event = 0;
fourthElement.addEventListener("mousemove", function(e){
    event++;
    if(event % 5 ==0 ){
        fourthElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});

// FIFTH EVENT
let lksp = 0;
let ticking = false;

function spin(sp){
    sixthElement.style.transform = `rotate(${sp}deg)`;
}

window.addEventListener("scroll", function(e){
    lksp = window.scrollY;
    if(!ticking){
        window.requestAnimationFrame(function(){
            spin(lksp);
            ticking = false;
        });
        ticking = true;
    }
});

// SIXTH EVENT
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
}

// SEVENTH EVENT
gsap.to("h1", {duration: 2, x: -300, ease: "bounce"});