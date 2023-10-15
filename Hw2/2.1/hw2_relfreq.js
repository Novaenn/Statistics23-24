"use strict";
const data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]; // Replace this with your dataset

function calculateRelativeFrequency(data) {
  const frequencyDistribution = {};
  const totalDataPoints = data.length;

  // Calculate the frequency of each unique value
  for (const value of data) {
    if (frequencyDistribution[value]) {
      frequencyDistribution[value]++;
    } else {
      frequencyDistribution[value] = 1;
    }
  }

  // Calculate relative frequencies
  const relativeFrequencyDistribution = {};

  for (const value in frequencyDistribution) {
    const frequency = frequencyDistribution[value];
    const relativeFrequency = frequency / totalDataPoints;
    relativeFrequencyDistribution[value] = relativeFrequency;
  }

  return relativeFrequencyDistribution;
}

const relativeFrequencyDist = calculateRelativeFrequency(data);
console.log(relativeFrequencyDist);
