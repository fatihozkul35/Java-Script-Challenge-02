const decrease = document.querySelector(".btn.btn1");
const reset = document.querySelector(".btn.btn2");
const random = document.querySelector(".btn.btn3");
const increase = document.querySelector(".btn.btn4");
let num = Number(document.querySelector(".number").textContent);

// function that decreases the number

decrease.addEventListener("click", decreaseFunction);

function decreaseFunction() {
  num -= 1;
  document.querySelector(".number").textContent = num;
}

// reset function

reset.addEventListener("click", resetFunction);

function resetFunction() {
  num = 0;
  document.querySelector(".number").textContent = num;
}

// function that assigns the random number

random.addEventListener("click", getrandomNumber);

function getrandomNumber() {
  num = Math.floor(Math.random() * 100);
  document.querySelector(".number").textContent = num;
}

// function that increases the number

increase.addEventListener("click", increaseFunction);

function increaseFunction() {
  num += 1;
  document.querySelector(".number").textContent = num;
}
