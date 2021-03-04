// Create a "close" or "x"  button on every list item we have on html
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



// this code will remove the list item after user clicks on the "X" icon on each row
// Basically, it is setting the display property = none so that it is not displayed
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
// This function will be called when user clicks the Add button to add new list item
function addTodoItem() {

  // Create a new empty list element
  var newli = document.createElement("li");

  // Get the value that user has entered in to a variable
  var inputValue = document.getElementById("myInput").value;

  // Create a textNode element and set it's value to user has entered (inputValue)
  var t = document.createTextNode(inputValue);

  // Add textnode to new empty list element
    newli.appendChild(t);

  // Now check if user has entered nothing, then throw a error
  if (inputValue === '') {
    alert("You must write something!");
  } else {

    // copy the UL from html in to a oldUL UL element
    oldUL = document.getElementById("myUL")
    // add new LI element to the oldUL
    oldUL.appendChild(newli);

  }

  // Blank out the input field after item is added
  document.getElementById("myInput").value = "";

  // create  span element
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newli.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}