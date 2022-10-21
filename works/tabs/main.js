let hisBox = document.getElementById("historyBox");

let visBox = document.getElementById("visionBox");

let goaBox = document.getElementById("goalBox");

let hisBtn = document.getElementById("hisBtn");

let visBtn = document.getElementById("visBtn");

let goaBtn = document.getElementById("goaBtn");

visBox.style.display = "none";

goaBox.style.display = "none";

hisBtn.addEventListener("click", () => {
  hisBox.style.display = "block";
  visBox.style.display = "none";
  goaBox.style.display = "none";
});

visBtn.addEventListener("click", () => {
  hisBox.style.display = "none";
  visBox.style.display = "block";
  goaBox.style.display = "none";
});

goaBtn.addEventListener("click", () => {
  hisBox.style.display = "none";
  visBox.style.display = "none";
  goaBox.style.display = "block";
});
