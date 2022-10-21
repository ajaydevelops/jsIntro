// import fetchFollowers from './fetchFollowers.js'
// import displayFollowers from './displayFollowers.js'
// import paginate from './paginate.js'
// import displayButtons from './displayButtons.js'

// const personBox = document.getElementById("personBox");

let persons;
let itemsPerPage = 8;
let pageNumber = 1;
let totalBtns;
const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const container = document.getElementById("mainContent");

const newButton = document.getElementById("newBtn");

const fetchFollowers = async () => {
  const response = await fetch(
    "https://api.github.com/users/john-smilga/followers?per_page=100"
  );
  const data = await response.json();
  return data;
};

let addPerson = () => {
  let allBtn = document.querySelectorAll(".orderBtn");
  allBtn.forEach((element) => {
    let btnNum = Number(element.textContent);
    if (btnNum === pageNumber) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  let div;
  let img;
  let para;
  let upperCase;
  let content;
  let link;
  let start = (pageNumber - 1) * 8;
  let end = pageNumber * 8;
  let showData = persons.slice(start, end);
  container.innerHTML = "";
  for (let i = 0; i < showData.length; i++) {
    div = document.createElement("div");
    div.classList.add("personBox");
    img = document.createElement("img");
    img.src = showData[i].avatar_url;
    img.classList.add("avatar");
    para = document.createElement("p");
    upperCase = showData[i].login.charAt(0).toUpperCase();
    content = showData[i].login.slice(1, showData[i].login.length);
    para.textContent = `${upperCase}${content}`;
    link = document.createElement("a");
    link.target = "-blank";
    link.textContent = "VIEW PROFILE";
    link.href = showData[i].html_url;
    div.appendChild(img);
    div.appendChild(para);
    div.appendChild(link);
    container.appendChild(div);
  }
};

let madeBtns = () => {
  totalBtns = persons.length / itemsPerPage + 1;
  let button;
  for (let i = 1; i <= totalBtns; i++) {
    button = document.createElement("button");
    button.textContent = i;
    button.classList.add("orderBtn");
    newButton.appendChild(button);
  }
};

fetchFollowers()
  .then((data) => {
    persons = data;
    madeBtns();
    addPerson();
  })
  .catch((error) => console.log(error));

newButton.addEventListener("click", (e) => {
  pageNumber = e.target.textContent;
  pageNumber = Number(pageNumber);
  if (pageNumber > 1) {
    prevBtn.disabled = false;
  }
  addPerson();
  //e.target.style.backgroundColor = "red";
});

nextBtn.addEventListener("click", () => {
  prevBtn.disabled = false;
  pageNumber = pageNumber + 1;
  if (pageNumber < totalBtns) {
    addPerson();
  } else {
    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  nextBtn.disabled = false;
  pageNumber = pageNumber - 1;
  if (pageNumber > 0) {
    addPerson();
  } else {
    prevBtn.disabled = true;
  }
});
