import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import binom

# Define the parameters for the binomial distribution
n = 40  # number of trials
p = 0.5  # probability of success

# Create a binomial distribution
dist = binom(n, p)

# Generate values for the x-axis (number of successes)
x = np.arange(0, n+1)

# Calculate the probability mass function (PMF) for each x value
pmf_values = dist.pmf(x)

# Plot the PMF
plt.bar(x, pmf_values, align='center', alpha=0.7, color='green', edgecolor='black')

# Set plot labels and title
plt.title(f'Binomial Distribution (n={n}, p={p})')
plt.xlabel('Number of Successes')
plt.ylabel('Probability')

# Show the plot
plt.show()

