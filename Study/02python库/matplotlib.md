# matplotlib

## 什么是matplotlib

1. 能将数据进行可视化，更直观的呈现
2. 使数据更加客观、更具说服力

matplotlib：最流行的python底层绘图库，主要做数据可视化图表。

## matplotlib基本要点

axis轴，指的是x或者y这种坐标轴

每个点是坐标，把点的坐标连接成一条线，组成一个折线图

```python
from matplotlib import pyplot as plt

# 数据在x轴的位置，是一个可迭代对象
# range(start, stop[, step]) 
# 计数从 start 开始
# 计数到 stop 结束
# 步长 step，默认为1
x = range(2, 26, 2)

# 数据在y轴的位置，是一个可迭代对象
y = [15, 13, 14, 5, 17, 20, 25, 26, 26, 24, 22, 18]

# x轴和y轴的数据一起组成了所有要绘制出的坐标
# 传入x和y，通过plot绘制出折线图
plt.plot(x, y)

# 在执行程序的时候展示图形 
plt.show()
```

### 设置图片大小

```python
fig = plt.figure(figsize=(20, 8), dpi=80)
# figure 图形图标的意思
# 通过实例化一个figure并且传递参数，能够在后台自动使用该figure实例
# 在图像模糊的时候可以穿入dpi（）参数，让图片更加清晰
```

### 保存图片

```python
plt.savefig("./sig_size.png")
# 可以保存为.svg这种矢量图格式，放大不会锯齿
```

### 设置x轴和y轴刻度值

```python
plt.xticks([...])
# plt.xticks(range(2, 25))
# plt.xticks(<number>[], <string>[], rotation=90)
# 如果要显示字符串，需要有对应的索引列表
# rotation 字体旋转角度
plt.yticks([...])
# 当刻度太密集时候使用列表的步长（间隔取值）来解决
```

### 设置中文显示

matplotlib默认不支持中文字符，因为默认的英文字体无法显示汉字

查看linux/mac 下面支持的字体：
`fc-list` 查看支持的字体
`fc-list :lang=zh` 查看支持的中文

通过matplotlib下的font_manager可以解决
```python
from matplotlib import font_manager
# fname 字体文件路径
# 点击跳转查看参数可以设置字体大小等配置
my_font = font_manager.FontProperties(fname="/System/Library/Fonts/PingFang.ttc")
# 后面再使用字体的时候，直接使用(fontproperties=my_font)
```

### 添加描述信息

```python
plt.xlabel("time", fontproperties=my_font) 
# 设置x轴的label
plt.ylabel("speed", fontproperties_my_font)
# 设置y轴的label
plt.title("title", fontproperties_my_font)
# 设置标题
```

### 添加标注信息

```python
# label参数就是添加标注
plt.plot(x, x_1, label="自己")
plt.plot(x, x_2, label="同桌")
# ...
# 添加图例（让标注显示出来）
# prop=my_font 添加字体
# loc 参数指定位置
plt.legend()
```

### plot参数

```python
# color='r' 线条颜色
# r红 g绿 b蓝 w白 c青色 m洋红 y黄 k黑
# linestyle='--' 线条风格
# -实线 --虚线 -.点划线 :点虚线 ''留空无线条
# linewidth=5 线条粗细
# alpha=0.5 透明度
plt.plot()
```

### 添加水印

```python
plt.text(x=1,               # 水印开头左下角对应的X点
          y=2,               # 水印开头左下角对应的Y点
          s="Matplotlib",    # 水印文本
          fontsize=50,       # 水印大小
          color="gray",      # 水印颜色
          alpha=0.5)         # 水印是通过透明度控制的
```

## matplotlib的散点图、直方图、柱状图

### 对比常用统计图

**折线图**：以折线的上升或下降来表示统计数量的增减变化的统计图。
**特点**：能够显示数据的变化趋势，反映事物的变化情况（变化）。

**直方图**：由一系列高度不等的纵向条纹或线段表示数据分布的情况，一般用横轴表示数据范围，纵轴表示分布情况。
**特点**：绘制连续性的数据，展示一组或者多组数据的分布情况（统计）。

**条形图**：排列在工作表的列或行中的数据可以绘制到条形图中。
**特点**：绘制离散的数据，能够一眼看出各个数据的大小，比较数据之间的差别（统计）

**散点图**：用两组数据构成多个坐标点，考察坐标点的分布，判断两变量之间是否存在某种关联或总结坐标点的分布模式。
**特点**：判断变量之间是否存在数量关联趋势，展示离群点（分布规律）

### 绘制散点图

```python
plt.scatter()
```
### 绘制条形图

```python
plt.bar()
# 参数width表示长条的宽度
```

### 绘制直方图

```python
plt.barh()
# 参数height表示长条的宽度
plt.grid(alpha=0.3)
# 添加网格展示

# 将二维数组转换成一维数组


```


