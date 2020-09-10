# idea使用技巧--前端

### 查找

- 全局搜索： `ctrl + shift + F` /  `cmd + shift + F`
- 全文替换： `ctrl + shift + R `/  `cmd + shift + R`
- 查找文件：`shift + shift`  ；search anywhere
- 转到变量声明：ctrl+点击 、`cmd + B` /`ctrl + B`
- 最近文件：`cmd + E` /`ctrl + E`
- 来回导航：`cmd + [` 、`cmd + ]`    /   `ctrl + alt + →`、`ctrl + alt + ←` 
- 复制文件全路径：`ctrl+shift+c`



### 代码

- 复制整行：`ctrl + D`
- 剪切整行：`cmd + X` /`ctrl + Y`
- 粘贴缓存区：`cmd + shift + V`
- 大小写切换：`cmd+shift+U`
- 格式化代码：`cmd + alt +L` /`ctrl + alt +L`
- 扩展选择：`alt + ↑`/`ctrl + W`  ; 比如按一次,选中word，按两次，选择表达式, 三次, 整个函数
- 缩小选择：`alt + ↓`/`ctrl + shift + W`
- 语法检查：开启eslint检测，eslint自动修复设置快捷键`cmd + ctrl + L` /`Alt+L`



### 重构

- 重命名：`shift + F6` ；修改函数名，变量名，文件名，同时修改所有引用的位置
- 抽取函数： `cmd + alt +M` / `  ctrl + alt + M`  ；整块代码抽取成函数
- 抽取变量：`cmd + alt + V` / `  ctrl + alt + V` ；当前选中抽取为变量
- 移动整块代码：`cmd + shift + ↑↓`  /`ctrl + shift + ↑↓`
- 包裹： `cmd + alt + T` / `ctrl + alt + T`，外层包裹，比如 if、try catch等



### live template

​	如：`log`  、`iter` 、`importitem`  等

​    详情见：`editor` -> `live templte`



### Git

commit：`cmd + K`/`ctrl + K`

拉取：`cmd + T`/`ctrl + T`

push：`cmd + shift +K` /`ctrl + shift +K`

本地历史记录：local history  => show history

远程提交历史记录：git => show history



### Emmet

创建一个html：输入！+  tab建

其他例子：div>ul>li  、 ul>li*5、div#header+div.page+div#footer.class1.class2.class3 ....

官方文档：https://docs.emmet.io/abbreviations/syntax/

参考资料：https://my.oschina.net/u/4258523/blog/3419690



### 其他

idea vue项目设置路径别名（适用于@vue/cli 高版本）

https://blog.csdn.net/qq_34707272/article/details/105730090



### 自定义eslint fix

`control+shift+L`

