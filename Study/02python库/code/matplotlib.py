from matplotlib import font_manager, pyplot as plt



# 数据在x轴的位置，是一个可迭代对象
x = range(2, 26, 2)

# 数据在y轴的位置，是一个可迭代对象
y = [15, 13, 14, 15, 17, 20, 25, 26, 26, 24, 22, 18]

# x轴和y轴的数据一起组成了所有要绘制出的坐标
# 传入x和y，通过plot绘制出折线图
# plt.plot(x, y)

plt.scatter(x, y)

# 在执行程序的时候展示图形
plt.show()
