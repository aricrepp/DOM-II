// Your code goes here
const firstElement = document.querySelector(".intro img");
const secondElement = document.querySelectorAll(".img-content img");
const thirdElement = document.querySelector(".text-content h2");
const fourthElement = document.querySelector("footer");
const fifthElement = document.querySelectorAll("a");


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

secondElement.forEach((El) => {
    El.addEventListener('mouseenter', (event) => {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 1s";
        event.target.style.zIndex = "1"
    });
});
secondElement.forEach((El) => {
    El.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "transform 0.2s";
        event.target.style.zIndex = "-1";
        event.target.style.transition = "none";
        event.target.style.transform = "none";
    });
});

thirdElement.addEventListener("mouseover", function(event){
    event.target.style.transformOrigin = "top left";
    event.target.style.transform = "scale(1.5,1)";
    event.target.style.transition = "transform 0.5s";  

});
thirdElement.addEventListener("mouseleave", function(){
    thirdElement.style.transform = "scale(1)";
    thirdElement.style.transition = "transform 0.5s";
    thirdElement.style.zIndex = "-1";
});

fourthElement.addEventListener("mousemove", function(){
    fourthElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

fifthElement.addEventListener()
