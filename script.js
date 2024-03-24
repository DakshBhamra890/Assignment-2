
// This section is for catching and processing the size of the smoothie
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


// This section is for catching and processing and adding ingredients to a list called ingredients
const cucumber = document.getElementById("cucumber");
const spinich = document.getElementById("spinich");
const beetroot = document.getElementById("beetroot");
const carrot = document.getElementById("carrot");


const ingredients = [];
cucumber.addEventListener("click", function() {
    if (!ingredients.includes("cucumber")) {
        ingredients.push("cucumber");
    }
})

beetroot.addEventListener("click", function() {
    if (!ingredients.includes("beetroot")) {
        ingredients.push("beetroot");
    }
})

spinich.addEventListener("click", function() {
    if (!ingredients.includes("spinich")) {
        ingredients.push("spinich");
    }
})

carrot.addEventListener("click", function() {
    if (!ingredients.includes("carrot")) {
        ingredients.push("carrot");
    }
})
const cookie = document.getElementById("smoothieform").addEventListener("submit", function(event) {
    event.preventDefault();
    const cookieans = this.elements["cookie"].value;
    const smoothieorder = new smoothie(size, ingredients, cookieans);
    output.textContent = smoothieorder.Yourorder();
});

class smoothie {
    size;
    ingredients;
    cookieans;
    constructor(size,ingredients,cookieans){
        this.size = size;
        this.ingredients = ingredients;
        this.cookie = cookieans;
    }
    
    Yourorder() {
        return `Your order is ${this.size} with the following ingredients: ${this.ingredients.join(", ")}. ${this.cookie === "Yes" ? "It is a yes to the cookie" : "it is a no to the cookie"}`;
    }
}
