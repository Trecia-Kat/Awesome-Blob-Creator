// Enable copy btn
function copy() {
  document.getElementById("copy").select();
  document.execCommand("copy");
  alert("Copied To Clipboard!");
} 

// Prints source code on textarea 
function sourceCode () {
  outputCode.value = `border-radius: ${top.value} ${right.value} ${bottom.value} ${left.value};`


}
// enable user to change the colour of blob