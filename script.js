function changeLight() {
  document.body.style.backgroundColor = "#f7f7f7";
  document.getElementById("page-title").style.color = "#d23568";
  document.getElementById("remove-onclick").style.color = "#222222";
}

function changeGrey() {
  document.body.style.backgroundColor = "#282c35";
  document.getElementById("page-title").style.color = "#f1a5ab";
  document.getElementById("remove-onclick").style.color = "#d4d4d4";
}

function removeElement() {
  document.getElementById("remove-onclick").innerHTML = "";
}
