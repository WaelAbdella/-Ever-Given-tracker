"strict mode";

const totalCost = document.querySelector("h2");

var dt = new Date();
let fullDate =
  ("0" + dt.getDate()).slice(-2) +
  "/" +
  ("0" + (dt.getMonth() + 1)).slice(-2) +
  "/" +
  dt.getFullYear() +
  " " +
  ("0" + dt.getHours()).slice(-2) +
  ":" +
  ("0" + dt.getMinutes()).slice(-2);

let myDate = new Date();

const daysSince = myDate.getDate() - 23;
const hoursSince = (myDate.getHours() * (400 * daysSince)) / 1000;

console.log(hoursSince);
totalCost.textContent = `${hoursSince} billion dollars as of ${fullDate}`;
