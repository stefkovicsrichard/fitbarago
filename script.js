const clock = document.getElementById("clock");

function ora() {
  var ido = new Date().toLocaleString("hu-HU", {timeZone: "Europe/Budapest"});
  clock.innerText = `Aktuális dátum/idő:\n${ido}`;
}
ora()
setInterval(ora, 1000);