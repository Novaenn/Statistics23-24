"use strict";
function calculateJointProbabilityDistribution(dataVariable1, dataVariable2) {
    const jointProbabilityDistribution = {};
  
    // Calculate the total number of data points
    const totalDataPoints = dataVariable1.length;
  
    // Loop through the data and compute joint probabilities
    for (let i = 0; i < totalDataPoints; i++) {
      const valueVariable1 = dataVariable1[i];
      const valueVariable2 = dataVariable2[i];
      const key = `${valueVariable1}|${valueVariable2}`;
  
      if (jointProbabilityDistribution[key]) {
        jointProbabilityDistribution[key]++;
      } else {
        jointProbabilityDistribution[key] = 1;
      }
    }
  
    // Normalize the probabilities
    for (const key in jointProbabilityDistribution) {
      jointProbabilityDistribution[key] /= totalDataPoints;
    }
  
    return jointProbabilityDistribution;
  }
  
  // Example data for two random variables
  const dataVariable1 = ['A', 'B', 'A', 'C', 'B'];
  const dataVariable2 = ['X', 'Y', 'X', 'Y', 'X'];
  
  // Calculate the joint probability distribution
  const jointProbabilityDist = calculateJointProbabilityDistribution(dataVariable1, dataVariable2);
  
  console.log(jointProbabilityDist);  