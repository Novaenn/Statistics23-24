import matplotlib.pyplot as plt
import numpy as np

# The parameters that will be used
num_samples = 10000
mean = 0 
std_dev = 1

# Generate random data
data = np.random.normal(mean, std_dev, num_samples)

# Plot the histogram
plt.hist(data, bins = 50, density = True, color='green', edgecolor='black', alpha=0.7)

# Plot the gaussian probability density function
xmin, xmax = plt.xlim()
x = np.linspace(xmin, xmax, 100)
p = (1 / (std_dev * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x - mean) / std_dev) ** 2)
plt.plot(x, p, 'k', linewidth = 2)

plt.title("Gaussian Distribution")
plt.xlabel("Value")
plt.ylabel("Probability Density")

plt.show()
