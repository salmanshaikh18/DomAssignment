let container = document.getElementById("container")

let display = document.getElementById("display")

// adding a keydown event listener to the document

document.addEventListener("keydown", function(e) {
    display.style.color = "red"
    display.innerText = e.key + " is key down"
})

// adding a keyup event listener to the document

document.addEventListener("keyup", function(e) {
    display.style.color = "blue"
    display.innerText = e.key + " is key up"
})