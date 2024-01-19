/**
 * This file contains the necessary graphic elements for a Bernoulli simulation.
 */

"use strict";

// h2 abTitle
let bTitle = document.createElement("h2");
bTitle.textContent = "Bernoulli";
bTitle.classList.add(bernoulliCSSClassName);
bTitle.style.display = "none";

// Bernoulli label
let bernoulliProbabilityLabel = document.createElement("label");
bernoulliProbabilityLabel.textContent = "Insert probability P";
bernoulliProbabilityLabel.classList.add(bernoulliCSSClassName);
bernoulliProbabilityLabel.style.display = "none";

// Bernoulli numeric input
let bernoulliProbabilityInputElement = document.createElement("input");
bernoulliProbabilityInputElement.type = "number";
bernoulliProbabilityInputElement.classList.add(bernoulliCSSClassName);
bernoulliProbabilityInputElement.value = 0;
bernoulliProbabilityInputElement.min = 0;
bernoulliProbabilityInputElement.step = 0.01
bernoulliProbabilityInputElement.max = 1;
bernoulliProbabilityInputElement.style.display = "none";
bernoulliProbabilityInputElement.id = "bernoulliP";

// Formula paragraph
let bernoulliFormula = document.createElement("p");
bernoulliFormula.id = "formulaB";
bernoulliFormula.classList.add(bernoulliCSSClassName);

// Add lalbels and inputs to the DOM
let bFormDOM = document.getElementById("Form");
bFormDOM.appendChild(bTitle);
bFormDOM.appendChild(bernoulliFormula);
bFormDOM.appendChild(bernoulliProbabilityLabel);
bFormDOM.appendChild(bernoulliProbabilityInputElement);