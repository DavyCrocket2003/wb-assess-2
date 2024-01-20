// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
const loginToggle = () => {
    if (auth.innerText === "Log in") {
        auth.innerText = "Log out"
    } else {
        auth.innerText = "Log in"
    }
}

let auth = document.querySelector("#auth")
// auth.innerText = "Log In" // The original HTML has "Log in" which is a problem
auth.style.width = "80px"
auth.addEventListener("click", () => loginToggle())

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
let alertText = document.querySelector("#alert-message")
let alertButton = document.querySelectorAll("button")[1]
alertButton.addEventListener("click", (event) => {
    event.preventDefault()
    alert(alertText.value)
    alertText.value = ""
})


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
let adderButton = document.querySelector("#item-adder")
let itemList = document.querySelector("#list")
// Tried getting "dblclick" to work but couldn't. IDK why
adderButton.addEventListener("click", (event) => {
    // event.preventDefault()
    // alert("Double Click")


    let newLI = document.createElement("li")
    newLI.innerText = "Item"
    itemList.appendChild(newLI)
})

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
let blueButton = document.querySelector("#blue")
let redButton = document.querySelector("#red")
let changesColorsArray = document.querySelectorAll(".changes-colors")
let currentColor = "white"
let changeColors = (color) => {
    changesColorsArray.forEach((item) => {
        item.style.color = color
        currentColor = color
    })
}
blueButton.addEventListener("click", () => {
    if (currentColor !== "blue") {
        changeColors("blue")
    } else {
        changeColors("black")
    }
})
redButton.addEventListener("click", () => {
    if (currentColor !== "red") {
        changeColors("red")
    } else {
        changeColors("black")
    }
})

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code
let factorialInput = document.querySelector("#factorial-input")
let factorialButton = document.querySelectorAll("button")[5]
let factorialResult = document.querySelector("#result")
let factorial = (num) => {
    let result = 1
    while (num > 1) {
        result *= num
        num--
    }
    return result
}
factorialButton.addEventListener("click", (event) => {
    event.preventDefault()
    factorialResult.innerText = factorial(Number(factorialInput.value))
    // factorialInput.value = ""
})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
let wordInput = document.querySelector("#word")
let wordButton = document.querySelectorAll("button")[6]
let wordFeedback = document.querySelector(".form-feedback")
wordButton.addEventListener("click", (event) => {
    event.preventDefault()
    let myWord = wordInput.value.trim()
    if (myWord.length >= 4) {
        wordFeedback.innerText = "Thanks for your submission!"
        wordFeedback.style.color = "green"
    } else {
        wordFeedback.innerText = "The word must be at least 4 characters long."
        wordFeedback.style.color = "red"
    }
    wordInput.value = ""
})