// Your code goes here
const firstElement = document.querySelector(".intro img");
const secondElement = document.querySelectorAll(".img-content img");
const thirdElement = document.querySelector(".text-content h2");


firstElement.addEventListener("mouseenter", function(){
    firstElement.style.transform = "scale(1.15)";
    firstElement.style.transition = "transform 0.5s";
});
firstElement.addEventListener("mouseleave", function(){
    firstElement.style.transform = "scale(1)";
    firstElement.style.transition = "transform 0.5s";
});

secondElement.forEach((El) => {
    El.addEventListener('mouseenter', (event) => {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 1s";
        event.target.style.zIndex = "0";
        event.target.style.opacity = "0.99";
    });
});
secondElement.forEach((El) => {
    El.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "transform 1s";
        event.target.style.zIndex = "0";
    });
});

thirdElement.addEventListener("mouseenter", function(){
    thirdElement.style.transformOrigin = "top left";
    thirdElement.style.transform = "scale(1.5,1)";
    thirdElement.style.transition = "transform 0.5s";
});
thirdElement.addEventListener("mouseleave", function(){
    thirdElement.style.transform = "scale(1)";
    thirdElement.style.transition = "transform 0.5s";
});