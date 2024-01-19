/**
 * This file contains the necessary graphic elements for a Black–Karasinski simulation.
 */

"use strict";

// h2 gbTitle
let bkTitle = document.createElement("h2");
bkTitle.textContent = "Black–Karasinski";
bkTitle.classList.add(blackKarasinski);
bkTitle.style.display = "none";

// r label
let bkrLabel = document.createElement("label");
bkrLabel.textContent = "r";
bkrLabel.classList.add(blackKarasinski);
bkrLabel.style.display = "none";

// r numeric input
let bkrInputElement = document.createElement("input");
bkrInputElement.type = "number";
bkrInputElement.classList.add(blackKarasinski);
bkrInputElement.value = 0;
bkrInputElement.min = 0;
bkrInputElement.step = 0.01;;
bkrInputElement.id = "bk_r";
bkrInputElement.style.display = "none";

// phi label
let bkphiLabel = document.createElement("label");
bkphiLabel.textContent = "ϕ";
bkphiLabel.classList.add(blackKarasinski);
bkphiLabel.style.display = "none";

// phi numeric input
let bkphiInputElement = document.createElement("input");
bkphiInputElement.type = "number";
bkphiInputElement.classList.add(blackKarasinski);
bkphiInputElement.value = 0;
bkphiInputElement.min = 0;
bkphiInputElement.step = 0.01;;
bkphiInputElement.id = "bk_phi";
bkphiInputElement.style.display = "none";

// Min Theta label
let bkMinThetaLabelElement = document.createElement("label");
bkMinThetaLabelElement.textContent = "Min θ";
bkMinThetaLabelElement.classList.add(blackKarasinski);
bkMinThetaLabelElement.style.display = "none";

// Min Theta numeric input
let bkMinThetaInputElement = document.createElement("input");
bkMinThetaInputElement.type = "number";
bkMinThetaInputElement.classList.add(blackKarasinski);
bkMinThetaInputElement.value = 0;
bkMinThetaInputElement.min = 0;
bkMinThetaInputElement.step = 0.01;;
bkMinThetaInputElement.id = "bk_MinTheta";
bkMinThetaInputElement.style.display = "none";

// Max Theta label
let bkMaxThetaLabelElement = document.createElement("label");
bkMaxThetaLabelElement.textContent = "Max θ";
bkMaxThetaLabelElement.classList.add(blackKarasinski);
bkMaxThetaLabelElement.style.display = "none";

// Max Theta numeric input
let bkMaxThetaInputElement = document.createElement("input");
bkMaxThetaInputElement.type = "number";
bkMaxThetaInputElement.classList.add(blackKarasinski);
bkMaxThetaInputElement.value = 0;
bkMaxThetaInputElement.min = 0;
bkMaxThetaInputElement.step = 0.01;
bkMaxThetaInputElement.id = "bk_MaxTheta";
bkMaxThetaInputElement.style.display = "none";

// Min Sigma label
let bkMinSigmaLabelElement = document.createElement("label");
bkMinSigmaLabelElement.textContent = "Min σ";
bkMinSigmaLabelElement.classList.add(blackKarasinski);
bkMinSigmaLabelElement.style.display = "none";

// Min Sigma numeric input
let bkMinSigmaInputElement = document.createElement("input");
bkMinSigmaInputElement.type = "number";
bkMinSigmaInputElement.classList.add(blackKarasinski);
bkMinSigmaInputElement.value = 0;
bkMinSigmaInputElement.min = 0;
bkMinSigmaInputElement.step = 0.01;;
bkMinSigmaInputElement.id = "bk_MinSigma";
bkMinSigmaInputElement.style.display = "none";

// Max Sigma label
let bkMaxSigmaLabelElement = document.createElement("label");
bkMaxSigmaLabelElement.textContent = "Max σ";
bkMaxSigmaLabelElement.classList.add(blackKarasinski);
bkMaxSigmaLabelElement.style.display = "none";

// Max Sigma numeric input
let bkMaxSigmaInputElement = document.createElement("input");
bkMaxSigmaInputElement.type = "number";
bkMaxSigmaInputElement.classList.add(blackKarasinski);
bkMaxSigmaInputElement.value = 0;
bkMaxSigmaInputElement.min = 0;
bkMaxSigmaInputElement.step = 0.01;;
bkMaxSigmaInputElement.id = "bk_MaxSigma";
bkMaxSigmaInputElement.style.display = "none";

// Formula paragraph
let bkFormula = document.createElement("p");
bkFormula.id = "formulaBK";
bkFormula.classList.add(blackKarasinski);

// Add lalbels and inputs to the DOM
let bkFormDOM = document.getElementById("Form");
bkFormDOM.appendChild(bkTitle);
bkFormDOM.appendChild(bkFormula);

bkFormDOM.appendChild(bkrLabel);
bkFormDOM.appendChild(bkrInputElement);

bkFormDOM.appendChild(bkphiLabel);
bkFormDOM.appendChild(bkphiInputElement);

bkFormDOM.appendChild(bkMinThetaLabelElement);
bkFormDOM.appendChild(bkMinThetaInputElement);

bkFormDOM.appendChild(bkMaxThetaLabelElement);
bkFormDOM.appendChild(bkMaxThetaInputElement);

bkFormDOM.appendChild(bkMinSigmaLabelElement);
bkFormDOM.appendChild(bkMinSigmaInputElement);

bkFormDOM.appendChild(bkMaxSigmaLabelElement);
bkFormDOM.appendChild(bkMaxSigmaInputElement);