import numpy as np
import matplotlib.pyplot as plt

# Parameters
lambda_val = 1.5  # Average rate of events per unit time
T = 10  # Total simulation time

# Generate Poisson process
time_points = np.cumsum(np.random.exponential(scale=1/lambda_val, size=1000))
time_points = time_points[time_points < T]

# Plotting
plt.step(time_points, range(1, len(time_points) + 1), where='post')
plt.xlabel('Time')
plt.ylabel('Number of Events')
plt.title('Simulated Poisson Process')
plt.show()

