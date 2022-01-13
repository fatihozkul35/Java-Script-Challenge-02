const decrease = document.querySelector(".btn btn1");
const reset = document.querySelector(".btn btn2");
const random = document.querySelector(".btn btn3");
const increase = document.querySelector(".btn btn443");

// Number assignment between 1 and 100
// you can change the startNumberif you start with "0"
let num = getRandomNumber();
document.querySelector(".number").textContent = num;
console.log(num);

// decrease.addEventListener("click", decreaseFunction());

// function decreaseFunction() {
//   num -= 1;
//   document.querySelector(".number").textContent = num;
// }
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
