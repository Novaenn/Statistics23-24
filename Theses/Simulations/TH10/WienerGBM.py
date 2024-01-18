import numpy as np
import matplotlib.pyplot as plt

def wiener_process(T, N):
    dt = T / N
    t = np.linspace(0.0, T, N+1)
    W = np.random.normal(0, np.sqrt(dt), N)
    W = np.insert(W, 0, 0.0)  # Insert initial value
    W = np.cumsum(W)
    return t, W

def geometric_brownian_motion(T, N, mu, sigma, S0=1.0):
    dt = T / N
    t = np.linspace(0.0, T, N+1)
    W = np.random.normal(0, np.sqrt(dt), N)
    W = np.insert(W, 0, 0.0)  # Insert initial value
    W = np.cumsum(W)
    S = S0 * np.exp(np.cumsum((mu - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * W))
    return t, S

# Parameters
T = 1.0       # Total time
N = 1000      # Number of time steps
mu = 0.1      # Drift for GBM
sigma = 0.2   # Volatility for GBM
S0 = 100.0    # Initial value for GBM

# Simulate Wiener Process
t_wiener, W = wiener_process(T, N)

# Simulate Geometric Brownian Motion
t_gbm, S = geometric_brownian_motion(T, N, mu, sigma, S0)

# Plotting
plt.figure(figsize=(10, 6))

plt.subplot(2, 1, 1)
plt.plot(t_wiener, W, label='Wiener Process')
plt.title('Wiener Process')
plt.xlabel('Time')
plt.ylabel('Value')
plt.legend()

plt.subplot(2, 1, 2)
plt.plot(t_gbm, S, label='Geometric Brownian Motion')
plt.title('Geometric Brownian Motion')
plt.xlabel('Time')
plt.ylabel('Value')
plt.legend()

plt.tight_layout()
plt.show()

