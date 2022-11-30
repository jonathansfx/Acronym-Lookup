//Acronym Lookup

//HTML variables
let abbEl = document.getElementById("abbmeaning");
//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let abb = document.getElementById("abb-in");
  //If statement
  if (abb === "html") {
    document.getElementById(abbMeaning) = "HyperText Markup Language";
  }
}
