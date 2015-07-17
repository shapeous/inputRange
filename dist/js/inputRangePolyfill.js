// inputRangePolyfill.js
// Author: Shapeous

// Get all inputs
var input = document.getElementsByTagName("input");

for (var i = 0; i < input.length; i += 1) {
  if (input[i].type === "range" && input[i].hidden !== true) {
    // Find all non hidden inputs of type range
    var range = {"min":input[i].min,"max":input[i].max,"value":input[i].value};
    // hide as found
    input[i].hidden = true;
    // find the span
    var span = input[i].nextSibling;
    // draw the span range
    var str = "";
    for (var j = range.min; j < range.value; j++) {
      str = str.concat("=");
    }
    str = str.concat("[]");
    for (var k = range.value; k < range.max; k++) {
      str = str.concat("=");
    }
    span.textContent = str;
  }
}
