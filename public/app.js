
// The window object represents the browser’s window. The window object is known as the browser’s global object. It is the main context in which our code runs. When we use console.log, we’re actually using window.console.log.

// We access the DOM via the window, with window.document. We can just write document however, because window is the global scope. The document object is the Document Object Model, the DOM.

// That’s great, but we want to write our JavaScript in our web application, not just in the console. How are we going to interact with the DOM using JavaScript written in our .js files?

// In index.html’s <head> there is a script tag that links to a .js file.
// When index.html is loaded by the browser, the above script tag tells the browser to make another request for the JavaScript file, app.js. Requests are also made for any other resources defined in <script> and <link> tags in the index.html’s <head> tag.

// Once app.js has been loaded by the browser, it has access to the browser’s global object, the window.
// When the browser receives HTML in response to an HTTP request, it parses the HTML and creates the node-tree, which is the browser’s representation of the HTML that has been written.


// 2. Methods and properties
// The DOM provides us with methods and properties that allow us to manipulate the node-tree and handle interaction using JavaScript.
//
// The DOM allows us to change the structure, style, and content of a web page using JavaScript. These changes could include:




document.addEventListener('DOMContentLoaded', function(){

  const calculator = new Calculator();

  const updateView = function() {
    const runningTotal = document.querySelector('#running_total');
    runningTotal.value = calculator.runningTotal;
  };

  //bind number clicks to number buttons
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(function(number) {
    number.onclick = function(evt) {
      calculator.numberClick(evt.target.innerText);
      updateView();
    };
  });

  // bind operator clicks to operator buttons
  const operators = document.querySelectorAll('.operator');
  operators.forEach(function(button) {
    button.onclick =  function(evt) {
      let operator = evt.target.innerText;
      calculator.operatorClick(operator);
      updateView();
    };
  });

  // handle clicking of the 'clear' button
  const clear = document.querySelector('#clear');
  clear.onclick = function() {
    calculator.clearClick();
    updateView();
  };

})
