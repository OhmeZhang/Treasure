# Lib_Pandas

Pandas主要数据进行处理的库。

Pandas底层是基于Numpy。

csv文件是以逗号分隔数据的文件。

```python
import pandas
file = pandas.read_csv("File_Path") # 读取csv文件
type(file) # <class 'pandas.core.frame.DataFrame'>
file.dtypes # int64整型 float64浮点 object字符串类型 查看属性数据类型
help(file.read_csv) # 查看pandas的read_csv方法帮助文档
file.head() # 查看读取数据的前几行数据
file.shape() # 查看几行几列
file.loc[0] # 取第1行数据 也可以指
file[列名，列名] # 取对应的列
file.columns.tolist() # 将列名转为list形式
file[列名] / 1000 # 将某一列每个值除以1000
file[列名1] * file[列名2] # 将两列对应的值相乘组成新的列
file[列名3] = file[列名1] * file[列名2] # 为DataFrame添加一个新的列，必须维度对应上
file[列名].max() # 列中最大值
file.sort_values(列名, inplace=True) # 排序， inplace是否在原来的基础上修改
file.sort_values(列名, inplace=True, ascending=False) # ascending默认是True升序，false为降序

pandas.isnull(DataFrame[column]) # 判断缺失值
sum(DataFrame[column]) # 计算某一列值的和
DataFrame[column].mean() # 列的平均数
DataFrame.pivot_table(index="", values="", aggfunc=np.mean) # 量和量之间的关系(列和列之间的关系，例如获救人数和舱位等级的关系，values是获救，index是舱位等级，做统计)，index是以什么为基准，index中的每个不同的值对应的values(values可以为数组[column1,column2,...]，对应多个条件)。aggfunc传入的方法，求均值传入np.mean

DataFrame.dropna(axis=0, subset=[column, column, ...]) # 将选择的列中的缺失值设置为0，axis=Num 设置的值

DataFrame.loc[RowIndex, ColumnName] # 取具体的值

DataFrame.reset_index(drop=True) # 数据在指定某列排序之后，索引是乱的，所以这个函数是将索引重新设定

DataFrame.apply(customFunctionName) # 自定义函数，参数为column，def customFunctionName(column):
# 主要将数据转换后查找列与列之间的关系

```



##### Series结构

每行每列的单个数据就是一个Series结构。

```python
from pandas import Series # 引入Series
# Series数据类型是ndarray结构
```

 

