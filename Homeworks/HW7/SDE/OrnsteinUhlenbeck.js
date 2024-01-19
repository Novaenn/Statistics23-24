/**
* This script contains the necessary graphic elements for a Ornstein–Uhlenbeck simulation.
*/

"use strict";

// h2 gbTitle
let ouTitle = document.createElement("h2");
ouTitle.textContent = "Ornstein–Uhlenbeck (mean-reverting)";
ouTitle.classList.add(ornsteinUhlenbeckCSSClassName);
ouTitle.style.display = "none";

// Theta label
let ouThetaLabelElement = document.createElement("label");
ouThetaLabelElement.textContent = "θ";
ouThetaLabelElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouThetaLabelElement.style.display = "none";

// Theta numeric input
let ouThetaInputElement = document.createElement("input");
ouThetaInputElement.type = "number";
ouThetaInputElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouThetaInputElement.value = 0;
ouThetaInputElement.min = 0;
ouThetaInputElement.step = 0.01;
ouThetaInputElement.id = "ou_theta";
ouThetaInputElement.style.display = "none";

// Mou label
let ouMouLabelElement = document.createElement("label");
ouMouLabelElement.textContent = "μ";
ouMouLabelElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouMouLabelElement.style.display = "none";

// Mou numeric input
let ouMouInputElement = document.createElement("input");
ouMouInputElement.type = "number";
ouMouInputElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouMouInputElement.value = 0;
ouMouInputElement.min = 0;
ouMouInputElement.step = 0.01;
ouMouInputElement.id = "ou_mu";
ouMouInputElement.style.display = "none";

// Sigma label
let ouSigmaLabelElement = document.createElement("label");
ouSigmaLabelElement.textContent = "σ";
ouSigmaLabelElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouSigmaLabelElement.style.display = "none";

// Sigma numeric input
let ouSigmaInputElement = document.createElement("input");
ouSigmaInputElement.type = "number";
ouSigmaInputElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouSigmaInputElement.value = 0;
ouSigmaInputElement.min = 0;
ouSigmaInputElement.step = 0.01;
ouSigmaInputElement.id = "ou_sigma";
ouSigmaInputElement.style.display = "none";

// Initial value label
let ouInitialValueLabelElement = document.createElement("label");
ouInitialValueLabelElement.textContent = "Initial value of x";
ouInitialValueLabelElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouInitialValueLabelElement.style.display = "none";

// Initial value numeric input
let ouInitialValueInputElement = document.createElement("input");
ouInitialValueInputElement.type = "number";
ouInitialValueInputElement.classList.add(ornsteinUhlenbeckCSSClassName);
ouInitialValueInputElement.value = 0;
ouInitialValueInputElement.min = 0;
ouInitialValueInputElement.id = "ou_initial_value";
ouInitialValueInputElement.style.display = "none";

// Formula paragraph
let ouFormula = document.createElement("p");
ouFormula.id = "formulaOU";
ouFormula.classList.add(ornsteinUhlenbeckCSSClassName);

// Add lalbels and inputs to the DOM
let ouFormDOM = document.getElementById("Form");
ouFormDOM.appendChild(ouTitle);
ouFormDOM.appendChild(ouFormula);

ouFormDOM.appendChild(ouThetaLabelElement);
ouFormDOM.appendChild(ouThetaInputElement);

ouFormDOM.appendChild(ouMouLabelElement);
ouFormDOM.appendChild(ouMouInputElement);

ouFormDOM.appendChild(ouSigmaLabelElement);
ouFormDOM.appendChild(ouSigmaInputElement);

ouFormDOM.appendChild(ouInitialValueLabelElement);
ouFormDOM.appendChild(ouInitialValueInputElement);