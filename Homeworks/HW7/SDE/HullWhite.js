/**
* This script contains the necessary graphic elements for a Hull-White simulation.
*/

"use strict";

// h2 gbTitle
let hwTitle = document.createElement("h2");
hwTitle.textContent = "Hull–White";
hwTitle.classList.add(hullWhiteCSSClassName);
hwTitle.style.display = "none";

// a label
let hwaLabelElement = document.createElement("label");
hwaLabelElement.textContent = "α";
hwaLabelElement.classList.add(hullWhiteCSSClassName);
hwaLabelElement.style.display = "none";

// a numeric input
let hwaInputElement = document.createElement("input");
hwaInputElement.type = "number";
hwaInputElement.classList.add(hullWhiteCSSClassName);
hwaInputElement.value = 0;
hwaInputElement.min = 0;
hwaInputElement.step = 0.01;
hwaInputElement.id = "hw_a";
hwaInputElement.style.display = "none";


// Theta label
let hwthetaLabelElement = document.createElement("label");
hwthetaLabelElement.textContent = "θ";
hwthetaLabelElement.classList.add(hullWhiteCSSClassName);
hwthetaLabelElement.style.display = "none";

// Theta numeric input
let hwthetaInputElement = document.createElement("input");
hwthetaInputElement.type = "number";
hwthetaInputElement.classList.add(hullWhiteCSSClassName);
hwthetaInputElement.value = 0;
hwthetaInputElement.min = 0;
hwthetaInputElement.step = 0.01;
hwthetaInputElement.id = "hw_theta";
hwthetaInputElement.style.display = "none";

// Sigma label
let hwSigmaLabelElement = document.createElement("label");
hwSigmaLabelElement.textContent = "σ";
hwSigmaLabelElement.classList.add(hullWhiteCSSClassName);
hwSigmaLabelElement.style.display = "none";

// Sigma numeric input
let hwSigmaInputElement = document.createElement("input");
hwSigmaInputElement.type = "number";
hwSigmaInputElement.classList.add(hullWhiteCSSClassName);
hwSigmaInputElement.value = 0;
hwSigmaInputElement.min = 0;
hwSigmaInputElement.step = 0.01;
hwSigmaInputElement.id = "hw_sigma";
hwSigmaInputElement.style.display = "none";

// Initial value label
let hwInitialValueLabelElement = document.createElement("label");
hwInitialValueLabelElement.textContent = "Initial value of r";
hwInitialValueLabelElement.classList.add(hullWhiteCSSClassName);
hwInitialValueLabelElement.style.display = "none";

// Initial value numeric input
let hwInitialValueInputElement = document.createElement("input");
hwInitialValueInputElement.type = "number";
hwInitialValueInputElement.classList.add(hullWhiteCSSClassName);
hwInitialValueInputElement.value = 0;
hwInitialValueInputElement.min = 0;
hwInitialValueInputElement.step = 0.1;
hwInitialValueInputElement.id = "hw_initial_value";
hwInitialValueInputElement.style.display = "none";

// Formula paragraph
let hwFormula = document.createElement("p");
hwFormula.id = "formulaHW";
hwFormula.classList.add(hullWhiteCSSClassName);

// Add lalbels and inputs to the DOM
let hwFormDOM = document.getElementById("Form");
hwFormDOM.appendChild(hwTitle);
hwFormDOM.appendChild(hwFormula);

hwFormDOM.appendChild(hwthetaLabelElement);
hwFormDOM.appendChild(hwthetaInputElement);

hwFormDOM.appendChild(hwaLabelElement);
hwFormDOM.appendChild(hwaInputElement);

hwFormDOM.appendChild(hwSigmaLabelElement);
hwFormDOM.appendChild(hwSigmaInputElement);

hwFormDOM.appendChild(hwInitialValueLabelElement);
hwFormDOM.appendChild(hwInitialValueInputElement);