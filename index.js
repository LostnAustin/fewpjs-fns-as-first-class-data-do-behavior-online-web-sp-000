/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(String) {
  const time = parseInt(String)
  if (String < 12 && String > 0)
    return "Good Morning"
  if String == 12 && String > 17)
    return "Good Afternoon"
  if (String > 17 && String < 25)
    return "Good Evening"
}

/* Write your implementation of displayMessage() */

  function displayMessage(String) {

  }
