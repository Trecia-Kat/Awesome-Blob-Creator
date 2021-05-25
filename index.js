// colours
let colourOne = document.getElementById("colourA");
let colourTwo = document.getElementById("colourB");
// source code and range sliders
let outputCode = document.getElementById("sourceCode");
let sliders = document.querySelectorAll("input[type='range']");

// Get input values and event listeners
// event listener on sliders
sliders.forEach( function(slider) {
  slider.addEventListener("input", createBlob);
  // console.log(sliders);
});

// event listeners on number input
let inputs = document.querySelectorAll("input[type = 'number']");
inputs.forEach( function (inp) {
  inp.addEventListener("change", createBlob);
})

// Create the blob
function createBlob() {
  let radius1 = sliders[0].value;
  let radius2 = sliders[1].value;
  let radius3 = sliders[2].value;
  let radius4 = sliders[3].value;

  let blobWidth = inputs[0].value;
  let blobHeight = inputs[1].value;

  // console.log(blobWidth, blobHeight);

  let borderRadius = `${radius1}% ${100 - radius1}% ${100 - radius3}% ${radius3}% / ${radius4}% ${radius2}% ${100 - radius2}% ${100 - radius4}%`;

  // console.log(borderRadius);

  document.getElementById("blob").style.cssText = `border-radius: ${borderRadius}; width: ${blobWidth}px; height: ${blobHeight}px`;

  document.getElementById("blob").style.backgroundColor = `linear-gradient( ${colourOne.value}, ${colourTwo.value})`;
}

// Prints source code on text input 
function sourceCode () {
  
0

  // enable user to change the colour of blob
  document.getElementById("blob").style.backgroundColor = `linear-gradient( ${colourOne.value}, ${colourTwo.value})`;
}
// Enable copy btn
function copyCode() {
  document.getElementById("copy").select();
  document.execCommand("copy");
  alert("Copied To Clipboard!");
} 