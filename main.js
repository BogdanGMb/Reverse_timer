const scoreOne = document.querySelector("#timer-score");
const btnStartOne = document.querySelector("#timer-start");
const btnStop = document.querySelector("#stop");
const scoreTwo = document.querySelector("#timer-revers-score");
const btnStartTwo = document.querySelector("#timer-revers-start");

let intervalId1 = null;
let intervalId2 = null;

btnStartOne.addEventListener("click", function () {
  let count = 0;
  intervalId1 = setInterval(function () {
    scoreOne.innerHTML = count++;
  }, 1000);
});

btnStartTwo.addEventListener("click", function () {
  count = 0;
  intervalId2 = setInterval(function () {
    scoreTwo.innerHTML = count--;
  }, 1000);
});

btnStop.addEventListener("click", function () {
  clearInterval(intervalId1);
  clearInterval(intervalId2);
});
