import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import poisson

# Define the parameter for the Poisson distribution (average rate of events)
lambda_parameter = 3.5

# Create a Poisson distribution
dist = poisson(mu=lambda_parameter)

# Generate values for the x-axis (number of events)
x = np.arange(0, 15)

# Calculate the probability mass function (PMF) for each x value
pmf_values = dist.pmf(x)

# Plot the PMF
plt.bar(x, pmf_values, align='center', alpha=0.7, color='green', edgecolor='black')

# Set plot labels and title
plt.title(f'Poisson Distribution (λ={lambda_parameter})')
plt.xlabel('Number of Events')
plt.ylabel('Probability')

# Show the plot
plt.show()

