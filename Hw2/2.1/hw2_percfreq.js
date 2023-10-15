"use strict";
const data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5]; // Replace this with your dataset

function calculatePercentageFrequencyDistribution(data) {
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

  // Calculate percentage frequency distribution
  const percentageFrequencyDistribution = {};

  for (const value in frequencyDistribution) {
    const frequency = frequencyDistribution[value];
    const percentage = (frequency / totalDataPoints) * 100;
    percentageFrequencyDistribution[value] = percentage;
  }

  return percentageFrequencyDistribution;
}

const percentageFrequencyDist = calculatePercentageFrequencyDistribution(data);
console.log(percentageFrequencyDist);
