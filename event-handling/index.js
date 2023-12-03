const btnElement = document.createElement("button");

btnElement.innerText = "Click Me To Check the Event";

// btnElement.onclick = () => {
//   alert("Hi");
// };

// add event listeners
btnElement.addEventListener("click", (event) => {
  // alert("Hi");
  console.log(event);
});

const divElem = document.createElement("div");

divElem.style.height = "500px";
divElem.style.width = "500px";
divElem.style.backgroundColor = "yellow";

divElem.addEventListener("mouseover", (event) => {
  // alert("Your pointer is now over the div");
  // console.log(event);
});

// divElem.addEventListener("mouseleave", () => {
//   alert("Your pointer is now leaving the div");
// });

document.body.append(btnElement, divElem);

// doing an action while loading the page is called DOMContentLoaded action
// document.addEventListener("DOMContentLoaded", () => {
//   alert("Your Page is geting Loaded");
// });

// selecting input and adding the event listener to it
const inpElement = document.getElementById("name");

inpElement.addEventListener("change", (event) => {
  console.log(event);
});

const inpColor = document.getElementById("color");

inpColor.addEventListener("change", (event) => {
  // event.target --> input
  console.log(event.target);
  // event.target.value --> value entered in the input
  divElem.style.backgroundColor = event.target.value;
});

// Table Creation
const tableElement = document.createElement("table");

const tHeadElement = document.createElement("thead");

const tBody = document.createElement("tbody");

const thName = document.createElement("th");
thName.innerText = "Name";

const thDob = document.createElement("th");
thDob.innerText = "DOB";

const trHead = document.createElement("tr");
trHead.append(thName, thDob);

tHeadElement.append(trHead);

tableElement.append(tHeadElement, tBody);

// Form Creation using DOM Manipulation
const formElement = document.createElement("form");
const inpElemOne = document.createElement("input");

inpElemOne.type = "text";
inpElemOne.name = "fullName";
inpElemOne.placeholder = "Enter Your Name";
inpElemOne.required = true;
inpElemOne.style.margin = "16px";

const inpDate = document.createElement("input");

inpDate.type = "date";
inpDate.style.margin = "16px";
inpDate.required = true;
inpDate.name = "DOB";

const inpSubmit = document.createElement("input");

inpSubmit.type = "submit";
inpSubmit.style.margin = "16px";

formElement.className = "form-contain";

formElement.append(inpElemOne, inpDate, inpSubmit);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.innerText = inpElemOne.value;

  const tdDob = document.createElement("td");
  tdDob.innerText = inpDate.value;

  tr.append(tdName, tdDob);

  tBody.appendChild(tr);
  formElement.reset();
});

document.body.append(formElement, tableElement);

// Keyboard Events Example
let count = 0;
const divContainer = document.createElement("div");

divContainer.style.border = "1px solid";
divContainer.style.padding = "16px";
divContainer.style.margin = "16px";

const displayArea = document.createElement("h1");

displayArea.innerText = count;

divContainer.append(displayArea);

document.body.append(divContainer);

// Keyboard event

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "ArrowUp") {
    count++;
  } else if (e.key === "ArrowDown") {
    count--;
  }
  displayArea.innerText = count;
});
