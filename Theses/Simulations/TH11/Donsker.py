import numpy as np
import matplotlib.pyplot as plt

# Set the random seed for reproducibility
np.random.seed(42)

# Number of random variables
n = 1000

# Generate a sequence of independent and identically distributed random variables
X = np.random.randn(n)

# Sort the random variables
X_sorted = np.sort(X)

# Empirical distribution function
F_n = np.arange(1, n + 1) / n

# Standard Brownian bridge
B = np.sqrt(n) * (F_n - np.linspace(0, 1, n))

# Plot the results
plt.figure(figsize=(10, 6))
plt.plot(X_sorted, F_n, label='Empirical Distribution Function', linewidth=2)
plt.plot(X_sorted, B, label='Standard Brownian Bridge', linestyle='--', linewidth=2)
plt.title("Donsker's Invariance Principle Simulation")
plt.xlabel('Random Variables')
plt.ylabel('Cumulative Probability')
plt.legend()
plt.grid(True)
plt.show()

