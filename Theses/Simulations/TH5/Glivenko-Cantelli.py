import numpy as np
import matplotlib.pyplot as plt
 
# uniform cumulative distribution function
def true_distribution(x):
    return np.piecewise(x, [x < -1, (-1 <= x) & (x < 1), x >= 1], [0, lambda x: (x + 1) / 2, 1])
 
# empirical cumulative distribution function
def empirical_distribution(sample, x):
    n = len(sample)
    count = np.zeros_like(x, dtype=float)
     
    for value in sample:
        count += x >= value
 
    return count / n
 
def simulate(num_samples, sample_size):
    # plot expected distribution
    x = np.linspace(-2, 2, 10)  
    true_dist = true_distribution(x) 
    plt.plot(x, true_dist, label='True Distribution')
 
    # sample from a uniform distribution and plot 
    for _ in range(num_samples):
        sample = np.random.uniform(-1, 1, size=sample_size) 
        edf = empirical_distribution(sample, x)
        plt.plot(x, edf, alpha=0.2, color='green') 
 
    plt.plot(x, edf, alpha=0.2, color='red', label='Empirical Distributions')
    plt.title(f'Glivenko-Cantelli Theorem: {num_samples} Samples of Size {sample_size}')
    plt.ylabel('Cumulative Probability')
    plt.legend()
    plt.show()
 
simulate(num_samples=10, sample_size=1000)
