const clock = document.getElementById("clock");
var kep;
var clicks = 0;
var createdss = false;
const kepek = ["assets/ezigytufa.jpg", "assets/dunakanyar.jpg", "assets/duranda.jpg", "assets/beijing.jpg", "assets/rigby.jpg"]

function ora() {
  var ido = new Date().toLocaleString("hu-HU", {timeZone: "Europe/Budapest"});
  clock.innerText = `Aktuális dátum/idő:\n${ido}`;
}
ora()
setInterval(ora, 1000);

function toggletext(e) {
  if (e.classList.contains("showing")) e.classList.remove("showing");
  else e.classList.add("showing");
}

function kepgen() {
  if (createdss) {
    kep.src = kepek[clicks];
    if (clicks == kepek.length-1) clicks = 0;
    else clicks++
  } else {
    var div = document.getElementById("slideshow");
    // let div2 = document.createElement("div");
    // div2.id = "keptartodoboz";
    // div.appendChild(div2);
    kep = document.createElement("img");
    kep.id = "kepek"
    div.appendChild(kep);
    createdss=true;
    kepgen();
  }
}