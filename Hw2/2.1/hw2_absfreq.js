"use strict";
const data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]; // Replace this with your dataset

function calculateFrequencyDistribution(data) {
  const frequencyDistribution = {};

  // Calculate the frequency of each unique value
  for (const value of data) {
    if (frequencyDistribution[value]) {
      frequencyDistribution[value]++;
    } else {
      frequencyDistribution[value] = 1;
    }
  }

  return frequencyDistribution;
}

const absoluteFrequencyDist = calculateFrequencyDistribution(data);
console.log(absoluteFrequencyDist);
