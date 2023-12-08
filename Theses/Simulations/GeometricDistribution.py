import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import geom

# Define the parameter for the geometric distribution (probability of success on each trial)
p = 0.3

# Create a geometric distribution
dist = geom(p)

# Generate values for the x-axis (number of trials until the first success)
x = np.arange(1, 11)

# Calculate the probability mass function (PMF) for each x value
pmf_values = dist.pmf(x)

# Plot the PMF
plt.bar(x, pmf_values, align='center', alpha=0.7, color='green', edgecolor='black')

# Set plot labels and title
plt.title(f'Geometric Distribution (p={p})')
plt.xlabel('Number of Trials until First Success')
plt.ylabel('Probability')

# Show the plot
plt.show()

