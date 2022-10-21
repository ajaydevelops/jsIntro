let button = document.getElementById("btn");

let icon = document.getElementById("icon");

let para = document.getElementById("para");

let hr = document.querySelector("hr");

button.addEventListener("click", () => {
  if (icon.className === "fa-solid fa-arrow-down"){
    hr.style.display = "block";
    para.style.display = "block";
    icon.classList.remove("fa-solid", "fa-arrow-down")
    icon.classList.add("fa-solid", "fa-arrow-up");
  } else {
    hr.style.display = "none";
    icon.classList.remove("fa-solid", "fa-arrow-up")
    icon.classList.add("fa-solid", "fa-arrow-down");
    para.style.display = "none";
  }
});
