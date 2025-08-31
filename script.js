// Mastering JavaScript Fundamentals Assignment
// -------------------------------------------
// Part 1: Mastering JavaScript Basics
// -----------------------------------
// Variable declarations and conditionals
let userName = "Amadou";
let userAge = 20;
let isStudent = true;

// Using if/else to make decisions
if (userAge >= 18) {
    console.log(userName + " is an adult.");
    document.getElementById("output").textContent = userName + " is an adult.";
} else {
    console.log(userName + " is a minor.");
    document.getElementById("output").textContent = userName + " is a minor.";
}

// -----------------------------------
// Part 2: JavaScript Functions — The Heart of Reusability
// -----------------------------------
// Custom function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}

// Custom function 2: Format a greeting string
function formatGreeting(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Display function results
console.log("Total with tax:", calculateTotal(100, 0.08));
console.log(formatGreeting(userName));

// -----------------------------------
// Part 3: JavaScript Loops — Embrace the Power of Repetition!
// -----------------------------------
// Loop example 1: for loop to list numbers
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// Loop example 2: forEach loop to list array items
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log("Fruit:", fruit);
});

// -----------------------------------
// Part 4: Mastering the DOM with JavaScript
// -----------------------------------
// DOM interaction 1: Toggle message on button click
const toggleBtn = document.getElementById("toggleBtn");
let showMessage = true;
toggleBtn.addEventListener("click", function() {
    showMessage = !showMessage;
    document.getElementById("output").textContent = showMessage ? formatGreeting(userName) : "Message hidden.";
});

// DOM interaction 2: Generate dynamic list from array
const dynamicList = document.getElementById("dynamicList");
fruits.forEach(function(fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    dynamicList.appendChild(li);
});

// DOM interaction 3: Countdown animation on button click
const countdownBtn = document.getElementById("countdownBtn");
countdownBtn.addEventListener("click", function() {
    let count = 5;
    document.getElementById("output").textContent = `Countdown: ${count}`;
    const interval = setInterval(function() {
        count--;
        if (count > 0) {
            document.getElementById("output").textContent = `Countdown: ${count}`;
        } else {
            document.getElementById("output").textContent = "Countdown finished!";
            clearInterval(interval);
        }
    }, 1000);
});

// End of Assignment
