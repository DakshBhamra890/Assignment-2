const output = document.querySelector("#output");
let size;
const large = document.getElementById("large");
const medium = document.getElementById("medium");
const regular = document.getElementById("regular");

large.addEventListener("click", function() {
    size = "large";
})
medium.addEventListener("click", function() {
    size = "medium";
})
regular.addEventListener("click", function() {
    size = "regular";
})

let addingredients= document.querySelectorAll("ingredients");
let ingredients = [];
ingredients.push(addingredients);

