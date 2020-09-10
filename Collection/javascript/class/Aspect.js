/**
 * 切片类 Aspect
 * 定义方法的参数：Function(arg<object>, resolve<Function>, reject<Function>)
 */
class Aspect {

    /**
     * 切面类
     * @param main 主方法
     * @param around 环绕通知
     * @param before 前置通知
     * @param after 后置通知
     */
    constructor({main = null, around = null, before = null, after = null, success = null, fail = null}) {
        if (!main && this.isFn(main)) {
            throw new Error('Missing main notification method');
        }
        this._before = before;
        this._main = main;
        this._after = after;
        this._around_before = around;
        this._around_after = around;
        this.queue = ['_before', '_around_before', '_main', '_around_after', '_after'];
        this.actionQueue = [];
        this.actionCurrent = '';
        this.actionArgument = {};
        this.baseArgument = {};

        this._success = success; // 状态回调
        this._fail = fail; // 状态回调
    }

    isFn(arg) {
        return typeof arg === 'function';
    }

    observe(obj, key, watchFun) {
        let val = obj[key]; // 给该属性设默认值
        const _this = this;
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            set: function (value) {
                watchFun(value, val, _this); // 赋值(set)时，调用对应函数
                val = value;
            },
            get: function () {
                return val;
            }
        })
    }

    async watchCallback(newVal, oldVal, _this) {
        const callback = await new Promise((resolve, reject) => {
            _this[newVal](_this.actionArgument, resolve, reject);
        })
        _this.actionArgument = {..._this.baseArgument || {}, ...callback || {}};
        const filterArr = _this.actionQueue.filter(v => v !== newVal);
        if (filterArr.length) {
            _this.actionQueue = filterArr;
            _this.actionCurrent = _this.actionQueue[0];
        } else {
            _this.callback('SUCCESS', 'COMPLETE');
        }
    }

    run(arg) {
        this.baseArgument = arg || {};
        this.actionArgument = arg || {};
        this.actionQueue = this.queue.filter(v => this.isFn(this[v]));
        if (this.actionQueue.length) {
            this.observe(this, 'actionCurrent', this.watchCallback);
            this.actionCurrent = this.actionQueue[0];
        } else {
            this.callback('FAIL', 'Function list is empty');
        }
    }

    callback(type, msg) {
        switch (type) {
            case 'SUCCESS':
                this.isFn(this._success) && this._success(msg);
                break;
            case 'FAIL':
                this.isFn(this._fail) && this._fail(msg);
                break;
        }
    }

}