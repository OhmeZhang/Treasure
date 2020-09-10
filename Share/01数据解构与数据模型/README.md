# 01对象和数组解构默认值



### 解构赋值场景



* 交换变量的值
* 从函数返回多个值
* 函数参数的定义
* 提取 JSON 数据
* 函数参数的默认值



### 使用解构赋值及设置默认值



查看“01对象和数组解构默认值”中的js文件



### 使用场景



```javascript
// 1.直接列表赋值
methods: {
    getSomethingList() {
        const params = {};
        getApiList(params).then(res => {
            const {success = false, data: {list = []} = {}, msg = '默认请求错误信息'} = res;
            if (success) {
                // this.somethingList = null; 
                // 用于展示默认页面 v-if="somethineList !== null && somethingList.length"
                this.somethingList = [...(this.something || []), ...list];
            }
        })
    }
}

// 2.谷小贝中类型常量，在表单编辑 和 编辑回显 都需要处理类型别名
const SEND_TYPE_LIST = [
    {
        img: "/send_type_01.png",
        name: "小程序信息",
        tag: "无限制",
        content: "会员将会在小程序中收到弹出和红点提示，直到内容被访问为止。",
        alias: "MINI"
    },
    {
        img: "/send_type_02.png",
        name: "小程序信息+公众号推送",
        tag: "每会员每天限发1条",
        content: "12小时未阅读，会员微信将会发出提示音并收到公众号推送信息。",
        alias: "MINI_MP"
    },
    {
        img: "/send_type_03.png",
        name: "小程序信息+公众号推送+短信",
        tag: "每会员每天限发1条",
        content: "24小时未阅读，会员将会收到手机短信。",
        alias: "MINI_MP_SMS"
    }
];

function getPushTypeName(status) {
    if(!status) {
		return '';
	}
    const [{name = ''} = {}] = SEND_TYPE_LIST.filter(v => v.alias === status);
    return name;
}

// 3.接口返回订单等状态
function getStatusAlias(status) {
    switch(status) {
        case '':
            // ...
            break;
    }
	
    // ... 其他定义获取状态的方法
}

const {success = false, data: {status = 'CLOSED', statusAlias = getStatusAlias(status)} = {}, msg = '默认请求错误信息'} = getApi();
```







# 02数据模型Model



### 为什么要用数据模型

1. 组件已经包含了一类数据的校验和渲染，也有少数场景无法做到。（例如无需组件渲染，却要用到数据的校验处理、组装数据等）。
2. 前端定义，后端调接口无压力。
3. 统一数据，后端改动只需修改模型。



### 使用前端数据模型

```typescript
export class CouponModel {
    
    name: string
    sale: number
    remark: string 
    // ...
    
    constructor({
        name = '',
        sale = 0,
        remark = ''
        // ...
    } = {}) {
        this.name = name;
        this.sale = sale;
        this.remark = remark;
        // ...
    }

	check() {
        // ...
        return new Promise()
    }

	build() {
        // ...
        return {
            
        }
    }
    
}

// 以上模型可以用于创建优惠券/编辑优惠券/优惠券列表

// 如果是作为奖品呢？

export class ActivityModel {
    
    rewardList: Array<CouponModel>
    
    constructor({
        rewardList = []
    } = {}) {
        this.rewardList = rewardList.map(v => new CouponModel(v));
    }
    
    check() {
        await Promise.all(this.rewardList.map(async item => {
            await item.check();
        }))
    }
    
    build() {
        const rewardList = this.rewardList.map(item => item.build);
        return {
            rewardList
        }
    }
    
}

const {data: {list = []}} = getApi();
this.somethineList = list.map(v => new ActivityModel(v));
```



# 03小技巧

1.小数取整

```JavaScript
1.234 | 0
~~1.234
1.234 >> 0
```



2.隐式转换

```javascript
// 数组/多维数组转为逗号分隔字符串(可用于多维数组转一维)：
""+[1, 2 , 3, 3, [2, 3, 4]]
```



3.生成指定长度的Array

```javascript
Array.from(new Array(10).keys()).map(_ => 1);
```

