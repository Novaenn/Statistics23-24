/**
 * This file contains the necessary graphic elements for a Cox–Ingersoll–Ross simulation.
 */

"use strict";

// h2 gbTitle
let cirTitle = document.createElement("h2");
cirTitle.textContent = "Cox–Ingersoll–Ross";
cirTitle.classList.add(coxIngersollRoss);
cirTitle.style.display = "none";

// a label
let ciraLabelElement = document.createElement("label");
ciraLabelElement.textContent = "a";
ciraLabelElement.classList.add(coxIngersollRoss);
ciraLabelElement.style.display = "none";

// a numeric input
let ciraInputElement = document.createElement("input");
ciraInputElement.type = "number";
ciraInputElement.classList.add(coxIngersollRoss);
// ciraInputElement.value = 0.1;
ciraInputElement.value = 0;
ciraInputElement.min = 0;
ciraInputElement.step = 0.01;
ciraInputElement.id = "cir_a";
ciraInputElement.style.display = "none";

// r label
let cirrLabelElement = document.createElement("label");
cirrLabelElement.textContent = "r";
cirrLabelElement.classList.add(coxIngersollRoss);
cirrLabelElement.style.display = "none";

// r numeric input
let cirrInputElement = document.createElement("input");
cirrInputElement.type = "number";
cirrInputElement.classList.add(coxIngersollRoss);
cirrInputElement.value = 0;
cirrInputElement.min = 0;
cirrInputElement.step = 0.1;
cirrInputElement.id = "cir_r";
cirrInputElement.style.display = "none";

// b label
let cirbLabelElement = document.createElement("label");
cirbLabelElement.textContent = "b";
cirbLabelElement.classList.add(coxIngersollRoss);
cirbLabelElement.style.display = "none";

// b numeric input
let cirbInputElement = document.createElement("input");
cirbInputElement.type = "number";
cirbInputElement.classList.add(coxIngersollRoss);
// cirbInputElement.value = 0.05;
cirbInputElement.value = 0;
cirbInputElement.min = 0;
cirbInputElement.step = 0.01;
cirbInputElement.id = "cir_b";
cirbInputElement.style.display = "none";

// Sigma label
let cirSigmaLabelElement = document.createElement("label");
cirSigmaLabelElement.textContent = "σ";
cirSigmaLabelElement.classList.add(coxIngersollRoss);
cirSigmaLabelElement.style.display = "none";

// Sigma numeric input
let cirSigmaInputElement = document.createElement("input");
cirSigmaInputElement.type = "number";
cirSigmaInputElement.classList.add(coxIngersollRoss);
// cirSigmaInputElement.value = 0.02;
cirSigmaInputElement.value = 0;
cirSigmaInputElement.min = 0;
cirSigmaInputElement.step = 0.01;
cirSigmaInputElement.id = "cir_sigma";
cirSigmaInputElement.style.display = "none";


// Formula paragraph
let cirFormula = document.createElement("p");
cirFormula.id = "formulaCIR";
cirFormula.classList.add(coxIngersollRoss);

// Add lalbels and inputs to the DOM
let cirFormDOM = document.getElementById("Form");
cirFormDOM.appendChild(cirTitle);
cirFormDOM.appendChild(cirFormula);

cirFormDOM.appendChild(ciraLabelElement);
cirFormDOM.appendChild(ciraInputElement);

cirFormDOM.appendChild(cirbLabelElement);
cirFormDOM.appendChild(cirbInputElement);

cirFormDOM.appendChild(cirrLabelElement);
cirFormDOM.appendChild(cirrInputElement);

cirFormDOM.appendChild(cirSigmaLabelElement);
cirFormDOM.appendChild(cirSigmaInputElement);

// cirFormDOM.appendChild(cirInitialValueLabelElement);
// cirFormDOM.appendChild(cirInitialValueInputElement);