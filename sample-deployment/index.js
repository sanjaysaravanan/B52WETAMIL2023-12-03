const formElement = document.createElement("form");

const inpElemOne = document.createElement("input");

inpElemOne.type = "text";
inpElemOne.placeholder = "Enter Your Name";
inpElemOne.required = true;
inpElemOne.style.margin = "16px";

const inpDate = document.createElement("input");

inpDate.type = "date";
inpDate.style.margin = "16px";
inpDate.required = true;

const inpSubmit = document.createElement("input");

inpSubmit.type = "submit";
inpSubmit.style.margin = "16px";

formElement.className = "form-contain";

formElement.append(inpElemOne, inpDate, inpSubmit);

document.body.appendChild(formElement);
