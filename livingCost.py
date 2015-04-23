import numpy as np
import matplotlib.pyplot as plt

#Urban Area,100% Composite Index,13 % Grocery Items,29 % Housing,10% Utilities,12 % Transportation,4% Health Care,32 % Miscalaneous Goods and Services
raw = np.genfromtxt("cleanData.csv", delimiter=',', names=True, dtype=None)
x = []
y = []

for line in raw:
    line = list(line)
    x.append(line[3])
    y.append(line[4])

x = np.array(x)
y = np.array(y)
plt.scatter(x, y)
plt.show()
