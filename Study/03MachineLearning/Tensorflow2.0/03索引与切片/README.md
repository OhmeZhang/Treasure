# 索引与切片

```python

# 通过单纯索引的方式取值

a = tf.ones([1,5,5,3])
a[0][0]
# 取出数据的维度为[5,3]

a[0][0][0]
# [1,1,1]维度

a[0][0][0][2]
# 1.0

# numpy索引方式
a = tf.random.normal([4,28,28,3])

a[1].shape
# [28, 28, 3]

a = tf.range(10)
# [0,1,2,3,4,5,6,7,8,9]

# start:end end索引包含其中
a[-1:]
# [9]
a[-2:]
# [8, 9]
a[:2]
# [0, 1]
a[:-1]
# [0,1,2,3,4,5,6,7,8]

# a.shape [4, 28, 28, 3]
a[0, :, :, :].shape # [28, 28, 3]
a[0, 1, :, :].shape # [28, 3]
a[:, :, :, 0].shape # [4, 28, 28]
a[:, :, :, 2].shape # [4, 28, 28]
a[:, 0, :, :].shape # [4, 28, 3]

# start:end:step
# a.shape [4, 28, 28, 3]
a[0:2, :, :, :].shape # [2, 28, 28, 3]
a[:, 0:28:2, 0:28:2, :].shape # [4, 14, 14, 3]
a[:, :14, :14, :].shape # [4, 14, 14, 3]
a[:, 14:, 14:, :].shape # [4, 14, 14, 3]
a[:, ::2, ::2, :].shape # [4, 14, 14, 3]

# 逆序
a = tf.range(4)
a[::-1] # [3,2,1,0]
a[::-2] # [3, 1]
a[2::-2] # [2, 0] # 负数是逆序，2是从正序的索引2位置逆序取出，-2先取开始第一个，然后隔一个取

# ... 省略号
# 主要用于省略中间写的多个冒号

```

# Selective Indexing

对某个维度取指定的一部分索引值

`a = tf.random.normal([4,35,8])`

### tf.gather

```python

tf.gather(a, axis=0, indices=[2,3])
# 在Tensor a上的第0个维度上取索引2，3的值
# shape: [2, 35, 8]

```

### tf.gather_nd

在多个维度指定索引列表，在不同维度取出对应索引值

```python

# a.shape [4,35,8]
tf.gather_nd(a, [0, 1])
# [8]

tf.gather_nd(a, [0])
# [35, 8]

tf.gather_nd(a, [[0, 1, 2]])
# [1]
# 取出第1个班级中第二个同学的第三门成绩

```

### tf.boolean_mask

```python

# 通过布尔值来对当前索引值是否取出做判断
tf.boolean_mask(a, mask=[True, True, False, Fals], axis=0)

# a.shape [2,3,4]
tf.boolean_mask(a, mask=[[True, True, False], [True, True, False]])
# shape [3, 4]

```