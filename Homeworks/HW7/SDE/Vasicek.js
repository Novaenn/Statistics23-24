/**
* This script contains the necessary graphic elements for a Vasicek simulation.
*/

"use strict";

// h2 gbTitle
let vTitle = document.createElement("h2");
vTitle.textContent = "Vasicek";
vTitle.classList.add(vasicekCSSClassName);
vTitle.style.display = "none";

// a label
let vaLabelElement = document.createElement("label");
vaLabelElement.textContent = "a";
vaLabelElement.classList.add(vasicekCSSClassName);
vaLabelElement.style.display = "none";

// a numeric input
let vaInputElement = document.createElement("input");
vaInputElement.type = "number";
vaInputElement.classList.add(vasicekCSSClassName);
vaInputElement.value = 0;
vaInputElement.min = 0;
vaInputElement.step = 0.01;
vaInputElement.id = "va";
vaInputElement.style.display = "none";

// b label
let vbLabelElement = document.createElement("label");
vbLabelElement.textContent = "b";
vbLabelElement.classList.add(vasicekCSSClassName);
vbLabelElement.style.display = "none";

// b numeric input
let vbInputElement = document.createElement("input");
vbInputElement.type = "number";
vbInputElement.classList.add(vasicekCSSClassName);
vbInputElement.value = 0;
vbInputElement.min = 0;
vbInputElement.step = 0.01;
vbInputElement.id = "vb";
vbInputElement.style.display = "none";

// Sigma label
let vSigmaLabelElement = document.createElement("label");
vSigmaLabelElement.textContent = "σ";
vSigmaLabelElement.classList.add(vasicekCSSClassName);
vSigmaLabelElement.style.display = "none";

// Sigma numeric input
let vSigmaInputElement = document.createElement("input");
vSigmaInputElement.type = "number";
vSigmaInputElement.classList.add(vasicekCSSClassName);
vSigmaInputElement.value = 0;
vSigmaInputElement.min = 0;
vSigmaInputElement.step = 0.01;
vSigmaInputElement.id = "v_sigma";
vSigmaInputElement.style.display = "none";

// Initial value label
let vInitialValueLabelElement = document.createElement("label");
vInitialValueLabelElement.textContent = "Initial value of r";
vInitialValueLabelElement.classList.add(vasicekCSSClassName);
vInitialValueLabelElement.style.display = "none";

// Initial value numeric input
let vInitialValueInputElement = document.createElement("input");
vInitialValueInputElement.type = "number";
vInitialValueInputElement.classList.add(vasicekCSSClassName);
vInitialValueInputElement.value = 0;
vInitialValueInputElement.min = 0;
vInitialValueInputElement.step = 0.01
vInitialValueInputElement.id = "v_initial_value";
vInitialValueInputElement.style.display = "none";

// Formula paragraph
let vFormula = document.createElement("p");
vFormula.id = "formulaV";
vFormula.classList.add(vasicekCSSClassName);

// Add lalbels and inputs to the DOM
let vFormDOM = document.getElementById("Form");
vFormDOM.appendChild(vTitle);
vFormDOM.appendChild(vFormula);

vFormDOM.appendChild(vaLabelElement);
vFormDOM.appendChild(vaInputElement);

vFormDOM.appendChild(vbLabelElement);
vFormDOM.appendChild(vbInputElement);

vFormDOM.appendChild(vSigmaLabelElement);
vFormDOM.appendChild(vSigmaInputElement);

vFormDOM.appendChild(vInitialValueLabelElement);
vFormDOM.appendChild(vInitialValueInputElement);