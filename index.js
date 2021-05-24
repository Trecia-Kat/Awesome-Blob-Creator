let colourOne = document.getElementById("colourA");
let colourTwo = document.getElementById("colourB");

// Enable copy btn
function copy() {
  document.getElementById("copy").select();
  document.execCommand("copy");
  alert("Copied To Clipboard!");
} 

// Prints source code on text input 
function sourceCode () {
  document.getElementById("sourceCode").innerHTML = 
  // outputCode.value = `border-radius: ${top.value} ${right.value} ${bottom.value} ${left.value};`


  // enable user to change the colour of blob
  document.getElementById("blob").style.backgroundColor = `linear-gradient( ${colourOne.value}, ${colourTwo.value})`;
}
