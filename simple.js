
const colour = ["Green", "Red" ,"Pink", "Purple", "Grey", "Violet" , "yellow","Blue","Tomato","Navy","Aqua","Crimson","Darkblue","Gold","Hotpink"];

const color = document.getElementById("color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const random = randomcolor();
    document.body.style.backgroundColor = colour[random];
    color.textContent = colour[random];
});

function randomcolor(){
    return Math.floor(Math.random() * colour.length);
}