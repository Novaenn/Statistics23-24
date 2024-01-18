import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import bernoulli

# Define the probability of success (parameter p)
p = 0.3

# Create a Bernoulli distribution
dist = bernoulli(p)

# Generate values (0 or 1) for the x-axis
x = [0, 1]

# Calculate the probability mass function (PMF) for each x value
pmf_values = dist.pmf(x)

# Plot the PMF
plt.bar(x, pmf_values, align='center', alpha=0.7, color='green', edgecolor='black')

# Set plot labels and title
plt.title('Bernoulli Distribution')
plt.xlabel('Outcome')
plt.ylabel('Probability')

# Customize x-axis ticks
plt.xticks(x)

# Show the plot
plt.show()

