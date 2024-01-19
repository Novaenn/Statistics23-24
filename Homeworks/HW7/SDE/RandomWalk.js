/**
 * This file contains the necessary graphic elements for a Random Walk simulation.
 */

"use strict";

// h2 abTitle
let rwTitle = document.createElement("h2");
rwTitle.textContent = "Random Walk";
rwTitle.classList.add(randomWalkCSSClassName);
rwTitle.style.display = "none";

// Formula paragraph
let rwFormula = document.createElement("p");
rwFormula.id = "formulaRW";
rwFormula.classList.add(randomWalkCSSClassName);

// Add lalbels and inputs to the DOM
let rwFormDOM = document.getElementById("Form");
rwFormDOM.appendChild(rwTitle);
rwFormDOM.appendChild(rwFormula);