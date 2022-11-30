//Acronym Lookup

//HTML variables

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let abb = document.getElementById("output");
  let x = document.getElementById("input").value.toLowerCase();
  //If statement
  if (x === "html") {
    abb.innerHTML = "HyperText Markup Language";
  } else if (x === "js") {
    abb.innerHTML = "JavaScript";
  } else if (x === "css") {
    abb.innerHTML = "Cascading Style Sheets";
  } else if (x === "pc") {
    abb.innerHTML = "Personal Computer";
  } else if (x === "asap") {
    abb.innerHTML = "As Soon As Possible";
  } else {
    abb.innerHTML = "I don't know what that is";
  }
}
