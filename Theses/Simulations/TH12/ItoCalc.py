import numpy as np
import matplotlib.pyplot as plt

# Parameters
T = 1.0  # Total time
N = 500  # Number of time steps
dt = T / N  # Time step size
sqrt_dt = np.sqrt(dt)

# Initial conditions
t = 0.0
x = 0.0

# Arrays to store the trajectory
t_values = [t]
x_values = [x]

# Brownian motion simulation using Itô integration
for _ in range(N):
    dW = np.random.normal(0, sqrt_dt)  # Brownian increment
    x += dW  # Itô integration
    t += dt  # Increment time

    t_values.append(t)
    x_values.append(x)

# Plot the trajectory
plt.figure(figsize=(10, 6))
plt.plot(t_values, x_values, label='Brownian Motion')
plt.title("Simulation of Brownian Motion using Itô Integration")
plt.xlabel('Time')
plt.ylabel('Position')
plt.legend()
plt.grid(True)
plt.show()

