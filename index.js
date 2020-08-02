/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
  let time = (0, 24)
function greet(time, greeting) {
  if time < 12
    return "Good Morning"
    elsif time == 12
    return "Good Afternoon"
    elsif time > 12 && time < 25
}
/* Write your implementation of displayMessage() */
