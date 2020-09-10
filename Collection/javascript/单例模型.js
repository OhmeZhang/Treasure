class Object{
    constructor() {
        if (!Object.instance) {
            //将this挂载到Object这个类的instance属性上
            Object.instance = this;
        }
        return Object.instance;
    }
}