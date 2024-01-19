/**
 * This file contains the necessary graphic elements for a Geometric Brownian simulation.
 */

"use strict";

// h2 gbTitle
let gbTitle = document.createElement("h2");
gbTitle.textContent = "Geometric Brownian";
gbTitle.classList.add(geometricBrownianCSSClassName);
gbTitle.style.display = "none";

// Mou label
let gbMouLabelElement = document.createElement("label");
gbMouLabelElement.textContent = "μ";
gbMouLabelElement.classList.add(geometricBrownianCSSClassName);
gbMouLabelElement.style.display = "none";

// Mou numeric input
let gbMouInputElement = document.createElement("input");
gbMouInputElement.type = "number";
gbMouInputElement.classList.add(geometricBrownianCSSClassName);
gbMouInputElement.value = 0;
gbMouInputElement.min = 0;
gbMouInputElement.step = 0.01;
gbMouInputElement.id = "mu_geom";
gbMouInputElement.style.display = "none";

// Sigma label
let gbSigmaLabelElement = document.createElement("label");
gbSigmaLabelElement.textContent = "σ";
gbSigmaLabelElement.classList.add(geometricBrownianCSSClassName);
gbSigmaLabelElement.style.display = "none";

// Sigma numeric input
let gbSigmaInputElement = document.createElement("input");
gbSigmaInputElement.type = "number";
gbSigmaInputElement.classList.add(geometricBrownianCSSClassName);
gbSigmaInputElement.value = 0;
gbSigmaInputElement.min = 0;
gbSigmaInputElement.step = 0.01;
gbSigmaInputElement.id = "sigma_geom";
gbSigmaInputElement.style.display = "none";

// Initial value label
let gbInitialValueLabelElement = document.createElement("label");
gbInitialValueLabelElement.textContent = "Initial value of S";
gbInitialValueLabelElement.classList.add(geometricBrownianCSSClassName);
gbInitialValueLabelElement.style.display = "none";

// Initial value numeric input
let gbInitialValueInputElement = document.createElement("input");
gbInitialValueInputElement.type = "number";
gbInitialValueInputElement.classList.add(geometricBrownianCSSClassName);
gbInitialValueInputElement.value = 0;
gbInitialValueInputElement.min = 0;
gbInitialValueInputElement.step = 0.1
gbInitialValueInputElement.id = "initial_value_geom";
gbInitialValueInputElement.style.display = "none";

// Formula paragraph
let gbFormula = document.createElement("p");
gbFormula.id = "formulaGB";
gbFormula.classList.add(geometricBrownianCSSClassName);

// Add lalbels and inputs to the DOM
let gbFormDOM = document.getElementById("Form");
gbFormDOM.appendChild(gbTitle);
gbFormDOM.appendChild(gbFormula);

gbFormDOM.appendChild(gbMouLabelElement);
gbFormDOM.appendChild(gbMouInputElement);

gbFormDOM.appendChild(gbSigmaLabelElement);
gbFormDOM.appendChild(gbSigmaInputElement);

gbFormDOM.appendChild(gbInitialValueLabelElement);
gbFormDOM.appendChild(gbInitialValueInputElement);