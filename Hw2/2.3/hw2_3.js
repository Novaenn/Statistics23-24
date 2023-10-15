"use strict";
function generateRandomNumbers(N) {
    const randomNumbers = [];
    for (let i = 0; i < N; i++) {
      randomNumbers.push(Math.random());
    }
    return randomNumbers;
  }
  
  function calculateDistribution(randomNumbers, k) {
    const intervalCounts = new Array(k).fill(0);
  
    for (const num of randomNumbers) {
      const intervalIndex = Math.floor(num * k);
      intervalCounts[intervalIndex]++;
    }
  
    return intervalCounts;
  }
  
  // Define the number of random variates to generate (N) and the number of class intervals (k)
  const N = 1000;
  const k = 10;
  
  // Generate random numbers
  const randomNumbers = generateRandomNumbers(N);
  
  // Calculate the distribution into class intervals
  const intervalCounts = calculateDistribution(randomNumbers, k);
  
  // Display the results
  console.log("Generated Random Numbers:");
  console.log(randomNumbers);
  console.log("\nDistribution into Class Intervals:");
  for (let i = 0; i < k; i++) {
    const lowerBound = i / k;
    const upperBound = (i + 1) / k;
    const count = intervalCounts[i];
    console.log(`[${lowerBound.toFixed(1)} - ${upperBound.toFixed(1)}): ${count}`);
  }
  