# 创建Tensor

## numpy和list转换

```python

# 通过numpy形式转换
a = tf.convert_to_tensor(np.ones([2,3]))
b = tf.convert_to_tensor(np.zeros([2,3]))

# list形式直接转换
a = tf.convert_to_tensor([2,3])
b = tf.convert_to_tensor([[2], [3]])

```

## zeros，ones

```python

tf.zeros([])
tf.zeros([2,3,3])
'''
tf.Tensor(
[[[0. 0. 0.]
  [0. 0. 0.]
  [0. 0. 0.]]

 [[0. 0. 0.] 
  [0. 0. 0.]
  [0. 0. 0.]]], shape=(2, 3, 3), dtype=float32)
'''

a = tf.zeros([2,3,3])
tf.zeros_like(a)
# 创建维度相同的值为0的Tensor
tf.zeros(a.shape)
# 效果同上

# tf.ones 与 tf.zeros 用法相同

```

## fill

```python

tf.fill([2,2], 0)
# 初始化维度为[2,2]， 值为0
# 第一个参数为shape，第二个参数为数值

```

## random

```python

# 随机初始化，正态分布
tf.random.normal([2,2], mean=1, stddev=1)
# 第一个参数为维度，第二个参数为平均值，第三个参数为方差

tf.random.truncated_normal([2,2], mean=1, stddev=1)
# 截断的正态分布，将高斯分布的两侧趋近于0的值舍去，从中间保留部分取值
# truncated_normal 要比正常的 normal 初始化效果要好

# 均匀分布
tf.random.uniform([2,2], minval=0, maxval=1)
# 从最小值到最大值之间均匀采样 还可以设置dtype

# 随机打散（洗牌）
idx = tf.random.shuffle(tf.range(10))

a = tf.random.normal([10, 784])
b = tf.random.uniform([10], maxval=10, dtype=tf.int32)

tf.gather(a, idx)
tf.gather(b, idx)
# a为数据，b为标签，a与b是一一对应的，洗牌也是对应的位置相同，所以我们需要借助idx索引，将idx打散后，再将a和b对应索引进行重组

```

## constant

```python

tf.constant([1, 2])

tf.constant([[1,2], [3]])
# 会报错，维度有问题

```