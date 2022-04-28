const log = console.log;

// log(document.getElementsByTagName("h1"));
// log(document.getElementById("first").innerHTML);
// log(document.querySelector("p").innerHTML);
let attributevalue = document.querySelectorAll("li");
let attributevalue1 = document.querySelector("li").getAttribute("random");

document.querySelector("li").setAttribute("random", 50);
document.querySelector("li").classList.add("title");

document.querySelectorAll("li").forEach((value, index) => {
  //   value.classList.add("text" + index);
  if (index % 2 === 0) {
    value.classList.add(`pending`);
  } else {
    value.classList.add(`completed`);
  }
});

const inputTag = document.getElementById("userinput");
const enterBtn = document.getElementById("enter");
// Events

const handleClick = () => {
  log(inputTag.value);
};

// enterBtn.addEventListener("click", handleClick);
enterBtn.addEventListener("click", () => {
  log(inputTag.value);
});
