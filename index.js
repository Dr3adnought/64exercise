// select the "change color button" and store it in a variable named changeColorButton

// select the "change color div" and store it in a variable named colorDiv

// add a 'click' event listener to the changeColorButton

// within the 'click' event function block:

// change the background color of the div to red


document.addEventListener('DOMContentLoaded', function(){

let changeColorButton = document.querySelector('#changeColor')

let colorDiv = document.querySelector('#colorDiv')

changeColorButton.addEventListener('click', function(){

    colorDiv.style.background = 'red'
    
    })

})

