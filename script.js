function randomColor() {
    let output = "#"
    let value = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    for (i = 0; i < 6; i++) {
        output += value[ Math.floor( Math.random() * value.length ) ]
    }

    return output
}
  
document.addEventListener('click', function(event) {
    let color = randomColor()

    if (event.target.className === "generate") {
    document.querySelector(".remove").style.visibility = "hidden"
    document.querySelector(".color").innerText = `Hex Code: ${color}`
    document.querySelector("body").style.backgroundColor = color
    }
})