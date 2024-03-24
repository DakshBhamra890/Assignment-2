
// This section is for catching and processing the size of the smoothie
const output = document.querySelector("#output");
let size;
const large = document.getElementById("large");
const medium = document.getElementById("medium");
const regular = document.getElementById("regular");

// event listeners are added here to to process and add to the size variable
large.addEventListener("click", function() {
    size = "large";
    this.style.border = '10px dotted purple';
})
medium.addEventListener("click", function() {
    size = "medium";
    this.style.border = '10px dotted purple';
})
regular.addEventListener("click", function() {
    size = "regular";
    this.style.border = '10px dotted purple';
})


// This section is for catching and processing and adding ingredients to a list called ingredients
const cucumber = document.getElementById("cucumber");
const spinich = document.getElementById("spinich");
const beetroot = document.getElementById("beetroot");
const carrot = document.getElementById("carrot");


// a list is initiated here in order to include all the ingredients
const ingredients = [];

// all the if statements and event listeners are the same; if the ingredient is not in the order it will be added and the border will be highlighted; if not it would not be added the second time
cucumber.addEventListener("click", function() {
    if (!ingredients.includes("cucumber")) {
        ingredients.push("cucumber");
        this.style.border = '10px dotted purple';
    }
})

beetroot.addEventListener("click", function() {
    if (!ingredients.includes("beetroot")) {
        ingredients.push("beetroot");
        this.style.border = '10px dotted purple';
    }
})

spinich.addEventListener("click", function() {
    if (!ingredients.includes("spinich")) {
        ingredients.push("spinich");
        this.style.border = '10px dotted purple';
    }
})

carrot.addEventListener("click", function() {
    if (!ingredients.includes("carrot")) {
        ingredients.push("carrot");
        this.style.border = '10px dotted purple';
    }
})

// Here we take the input from the user regarding the addition of the cookie to the order and we first prevent the user from submitting the form first
const cookie = document.getElementById("smoothieform").addEventListener("submit", function(event) {
    event.preventDefault();
    const cookieans = this.elements["cookie"].value;
    // after we have taken all three values from the user and processed them(added to their variables and lists respectfully) we put the values into the class constructor smoothie and finally use the method Yourorder().
    const smoothieorder = new smoothie(size, ingredients, cookieans);
    output.textContent = smoothieorder.Yourorder();
});

// this is the main class that we will be using to assign values and make an output out of all those variables. first we assign the variables using this inside the constructor
class smoothie {
    size;
    ingredients;
    cookieans;
    constructor(size,ingredients,cookieans){
        this.size = size;
        this.ingredients = ingredients;
        this.cookie = cookieans;
    }
// and now we make our custom message about the users order of smoothie
    Yourorder() {
        return `Your order is ${this.size} with the following ingredients: ${this.ingredients.join(", ")}. ${this.cookie === "Yes" ? "It is a yes to the cookie" : "it is a no to the cookie"}`;
    }
}
