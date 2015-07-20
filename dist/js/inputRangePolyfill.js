(function(){
// inputRangePolyfill.js
// Repo: https://github.com/shapeous/inputRange

// Get all inputs
var input = document.getElementsByTagName("input");

for (var i = 0; i < input.length; i += 1) {
  // Does the current input meet the following criteria?
  if (  input[i].getAttribute("type") === "range"
    &&  input[i].attributes.hidden    === undefined
    &&  input[i].attributes.disabled  !== undefined
    &&  input[i].getAttribute("min")  !== undefined
    &&  input[i].getAttribute("value")!== undefined
    &&  input[i].getAttribute("max")  !== undefined
    ) { // if so
    // That's our kind of range lets save it
    var range =
    { "min":  parseInt(input[i].getAttribute("min"),  10)
    , "value":parseInt(input[i].getAttribute("value"),10)
    , "max":  parseInt(input[i].getAttribute("max"),  10)
    };
    // Let's also hide it so we can draw our polyfill
    input[i].setAttribute("hidden");
    input[i].style.display = 'none';
    // Let's also get its neighboring span
    // (right now we need to have one to the right of the range) and so todo: Check if it exist first maybe even add it...
    var span = input[i].nextSibling;
    // Let's add a class name so we can style it
    span.setAttribute("class", "range");
    span.style.setAttribute("letter-spacing","-2px");
    span.style.setAttribute("padding-right","5px");
    span.style.setAttribute("padding-left","5px");
    // draw the polyfill
    var str = "";
    for (var j = range.min; j < range.value; j += 1) {
      str = str.concat("=");
    }
    str = str.concat("[]");
    for (var k = range.value + 1; k <= range.max; k += 1) {
      str = str.concat("=");
    }
    span.innerHTML = str;
  }
}
})();
