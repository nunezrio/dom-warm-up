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

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();