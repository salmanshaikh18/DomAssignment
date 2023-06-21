let inputBox = document.getElementById("input-box")

let display = document.getElementById("display")

// adding a keypress event listener to the inputbox

inputBox.addEventListener("keypress", (e) => {
    display.innerText = "You have entered " + e.key;
    console.log(e.key)
})