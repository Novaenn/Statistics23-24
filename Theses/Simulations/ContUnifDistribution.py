import numpy as np
import matplotlib.pyplot as plt

# Set the parameters of the uniform distribution
a = 1  # Lower bound
b = 5  # Upper bound

# Generate random samples from the uniform distribution
data = np.random.uniform(a, b, size=10000)

# Plot the histogram
plt.hist(data, bins=50, density=True, alpha=0.7, color='green', edgecolor='black')

# Plot the theoretical probability density function (PDF)
x = np.linspace(a, b, 100)
pdf = 1/(b-a)  # PDF of continuous uniform distribution
plt.plot(x, np.full_like(x, pdf), 'r--', linewidth=2)

# Set plot labels and title
plt.title('Continuous Uniform Distribution')
plt.xlabel('Value')
plt.ylabel('Probability Density')

# Show the plot
plt.show()

