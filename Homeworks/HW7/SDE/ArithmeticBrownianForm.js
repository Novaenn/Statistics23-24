/**
 * This file contains the necessary graphic elements for an Arithmetic Brownian simulation.
 */

"use strict";

// h2 abTitle
let abTitle = document.createElement("h2");
abTitle.textContent = "Arithmetic Brownian";
abTitle.classList.add(arithmeticBrownianCSSClassName);
abTitle.style.display = "none";

// Mou label
let abMouLabelElement = document.createElement("label");
abMouLabelElement.textContent = "μ";
abMouLabelElement.classList.add(arithmeticBrownianCSSClassName);
abMouLabelElement.style.display = "none";

// Mou numeric input
let abMouInputElement = document.createElement("input");
abMouInputElement.type = "number";
abMouInputElement.classList.add(arithmeticBrownianCSSClassName);
abMouInputElement.value = 0;
abMouInputElement.min = 0;
abMouInputElement.step = 0.01;
abMouInputElement.style.display = "none";
abMouInputElement.id = "mu_arit";

// Sigma label
let abSigmaLabelElement = document.createElement("label");
abSigmaLabelElement.textContent = "σ";
abSigmaLabelElement.classList.add(arithmeticBrownianCSSClassName);
abSigmaLabelElement.style.display = "none";

// Sigma numeric input
let abSigmaInputElement = document.createElement("input");
abSigmaInputElement.type = "number";
abSigmaInputElement.classList.add(arithmeticBrownianCSSClassName);
abSigmaInputElement.value = 0;
abSigmaInputElement.min = 0;
abSigmaInputElement.step = 0.01;
abSigmaInputElement.style.display = "none";
abSigmaInputElement.id = "sigma_arit";

// Bernoulli label
// let abBernoulliProbabilityLabel = document.createElement("label");
// abBernoulliProbabilityLabel.textContent = "Bernoulli p";
// abBernoulliProbabilityLabel.classList.add(arithmeticBrownianCSSClassName);
// abBernoulliProbabilityLabel.style.display = "none";

// // Bernoulli numeric input
// let abBernoulliProbabilityInputElement = document.createElement("input");
// abBernoulliProbabilityInputElement.type = "number";
// abBernoulliProbabilityInputElement.classList.add(arithmeticBrownianCSSClassName);
// abBernoulliProbabilityInputElement.value = 0;
// abBernoulliProbabilityInputElement.min = 0;
// abBernoulliProbabilityInputElement.max = 100;
// abBernoulliProbabilityInputElement.style.display = "none";

// Initial value label
let abBernoulliProbabilityLabel = document.createElement("label");
abBernoulliProbabilityLabel.textContent = "Initial value of X";
abBernoulliProbabilityLabel.classList.add(arithmeticBrownianCSSClassName);
abBernoulliProbabilityLabel.style.display = "none";

// Initial value numeric input
let abBernoulliProbabilityInputElement = document.createElement("input");
abBernoulliProbabilityInputElement.type = "number";
abBernoulliProbabilityInputElement.classList.add(arithmeticBrownianCSSClassName);
abBernoulliProbabilityInputElement.value = 0;
abBernoulliProbabilityInputElement.min = 0;
abBernoulliProbabilityInputElement.step = 0.1;
abBernoulliProbabilityInputElement.id = "initial_value_arit";
abBernoulliProbabilityInputElement.style.display = "none";

// Formula paragraph
let abFormula = document.createElement("p");
abFormula.id = "formulaAB";
abFormula.classList.add(arithmeticBrownianCSSClassName);

// Add lalbels and inputs to the DOM
let abFormDOM = document.getElementById("Form");
abFormDOM.appendChild(abTitle);
abFormDOM.appendChild(abFormula);

abFormDOM.appendChild(abMouLabelElement);
abFormDOM.appendChild(abMouInputElement);

abFormDOM.appendChild(abSigmaLabelElement);
abFormDOM.appendChild(abSigmaInputElement);

// abFormDOM.appendChild(abBernoulliProbabilityLabel);
// abFormDOM.appendChild(abBernoulliProbabilityInputElement);

abFormDOM.appendChild(abBernoulliProbabilityLabel);
abFormDOM.appendChild(abBernoulliProbabilityInputElement);