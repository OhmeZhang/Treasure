# 数据类型有三种:

### list

`list = [1, 1.2, 'hello', (1, 2)]`

### np.array

`list = np.array([64, 224, 224, 3])`

### tf.Tensor

scalar标量: 1.1 
    
vector向量: [1.1], [1.1, 2.2, ...]
    
matrix: [[1.1, 2.2], [3.3, 4.4], [5.5, 6.6]]
    
tensor: rank > 2 维度大于2，一般scalar， vector， matrix都可以叫为tensor


# tensor中的数据类型

* int
* float
* double
* bool
* string

```python
# 创建Tensor

import tensorflow as tf

print(tf.constant(1))
    
print(tf.constant(1.0))
    
print(tf.constant(2.2, dtype=tf.int32)) 
# TypeError: Cannot convert 2.2 to EagerTensor of dtype int32
# 指定的数据类型有问题就会报错
    
print(tf.constant(2., dtype=tf.double))
# tf.double只是一个别名，对应的是float64类型
    
print(tf.constant([True, False]))
    
print(tf.constant('Hello World.'))

```

# Tensor中的属性

```python

with tf.device("cpu"):
    a = tf.constant([1])

with tf.device("gpu"):
    b = tf.range(4)

print(a.device)
# /job:localhost/replica:0/task:0/device:CPU:0
# 打印a在cpu中的位置
print(b.device)
# 打印b在gpu中的位置

aa = a.gpu()
# 将a从cpu迁移到gpu中
bb = b.cpu()
# 将b从gpu迁移到cpu中
# 如果一个tensor在gpu中，另一个在cpu中，这样两个一起做运算就会出错，需要同时在gpu或cpu上

b.numpy()
# array([1,2,3,4], dtype=int32)
# 将tensor转换成numpy

b.ndim
# 1 [1,2,3,4]
tf.rank(b)
# tf.Tensor(1, shape=(), dtype=int32)
# 返回数据的维度

tf.is_tensor(a)
# 查看当前变量是否为Tensor

a.dtype
# 查看Tensor数据类型

a.dtype == tf.float32
# 判断Tensor数据类型

c = np.array(5)
cc = tf.convert_to_tensor(c)
# 将numpy格式转换成Tensor
# cc = tf.convert_to_tensor(c, dtype = tf.int32)
# 指定数据类型转换

ccc = tf.cast(cc, dtype = tf.float32)
# 将数据类型转换
# 布尔值和整型转换 0 False 1 True

d = tf.range(5)
dd = tf.Variable(d)
# dd = tf.Variable(d, name="input_data")
# 指定变量名称
# b.trainable -> True 训练的时候需要求导


```