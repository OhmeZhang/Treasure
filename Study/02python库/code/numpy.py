import numpy as np

a = np.array([[3,4,5,6,7,8],[4,5,6,7,8,9]])

print(a.shape)

a = a.reshape((3,4))

print(a)

print(a.shape)