import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import randint

a=1
b=6

x = np.arange(a, b+1)

discrete_uniform_distribution = randint(a, b+1)

discrete_uniform_pmf = discrete_uniform_distribution.pmf(x)

plt.plot(x, discrete_uniform_pmf, 'bo', ms=8)
plt.vlines(x, 0, discrete_uniform_pmf, alpha=0.7, color='green', edgecolor='black', lw=5)
plt.xlabel('X')
plt.ylabel('Probability')
plt.show()

