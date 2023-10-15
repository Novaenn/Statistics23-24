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
  
  function visualizeDistribution(intervalCounts, k) {
    const lowerBounds = [];
    const upperBounds = [];
    for (let i = 0; i < k; i++) {
      lowerBounds.push(i / k);
      upperBounds.push((i + 1) / k);
    }
  
    const ctx = document.getElementById('histogram').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: lowerBounds.map((lb, i) => `[${lb.toFixed(1)} - ${upperBounds[i].toFixed(1)})`),
        datasets: [{
          label: 'Frequency',
          data: intervalCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      }
    });
  }
  
  // Define the number of random variates to generate (N) and the number of class intervals (k)
  const N = 1000;
  const k = 10;
  
  // Generate random numbers
  const randomNumbers = generateRandomNumbers(N);
  
  // Calculate the distribution into class intervals
  const intervalCounts = calculateDistribution(randomNumbers, k);
  
  // Visualize the distribution
  visualizeDistribution(intervalCounts, k);
  