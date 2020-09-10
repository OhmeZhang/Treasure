type(scope): subject
body
footer

type：用于说明commit的类别，规定为如下几种
    feat：新增功能；
    fix：修复bug；
    docs：修改文档；
    refactor：代码重构，未新增任何功能和修复任何bug；
    build：改变构建流程，新增依赖库、工具等（例如webpack修改）；
    style：仅仅修改了空格、缩进等，不改变代码逻辑；
    perf：改善性能和体现的修改；
    chore：非src和test的修改；
    test：测试用例的修改；
    ci：自动化流程配置修改；
    revert：回滚到上一个版本；
scope：【可选】用于说明commit的影响范围
subject：commit的简要说明，尽量简短

Body：对本次commit的详细描述，可分多行

Footer：
1.不兼容变动：需要描述相关信息
2.关闭指定Issue：输入Issue信息

