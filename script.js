// Get the change-color button element by it's "id", from the html
let colorChangeButton = document.getElementById("change-button");

// Define the change color function
function changeColor() {
  // Inside the changeColor function;
  // Get the color-box element by it's "id", from the html
  let colorBox = document.getElementById("color-box");

  // Get the input-color element by it's "id", from the html
  let inputtedColor = document.getElementById("input-color").value;

  // Set the background color of the color-box element to the inputted color
  colorBox.style.backgroundColor = inputtedColor;

  // Set the background color of the color-change button to the inputted color
  colorChangeButton.style.backgroundColor = inputtedColor;
}

// Finally,
// outside the changeColor function;
// Add an event listener to the change-color button,
// to listen for a click event (or when the button is clicked),
// and execute the changeColor function..
colorChangeButton.addEventListener("click", changeColor);
