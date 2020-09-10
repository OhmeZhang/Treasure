// example_01
const [a, b = 2] = [1];
console.log(a, b); // 1, 2

// example_02
const [c = 1, d = 2] = [undefined, null];
console.log(c, d); // 1, null 默认值没有才生效