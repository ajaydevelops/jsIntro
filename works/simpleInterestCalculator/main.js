let form = document.querySelector("form");

let principal = document.getElementById("principal");

let interest = document.getElementById("interest");

let time = document.getElementById("time");

let amountView = document.getElementById("amountView");

let simpleInterest = document.getElementById("simpleInterest");

let totalAmount = document.getElementById("totalAmount");

let interestAmount

form.addEventListener("submit", e => {
    e.preventDefault();
    interestAmount = (principal.value * interest.value / 100) * time.value;
    simpleInterest.textContent = `Interest Amount: ${interestAmount}`;
    totalAmount.textContent = `Total Amount: ${Number(principal.value) + interestAmount}`;
})