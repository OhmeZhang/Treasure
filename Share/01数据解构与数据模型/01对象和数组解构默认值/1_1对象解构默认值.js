// example_01
const {a, b, c = 'default'} = {a: 1, b: 2};
console.log(a, b, c); // 1, 2, default

// example_02
function defaultValue() {
	return 'default_1';
}

const {d, e, f = defaultValue()} = {d: 3, e: 4};
console.log(d, e, f); // 3, 4, default_1

// example_03 
const {g, h, i} = {g: undefined, h: null};
console.log(g, h, i); // undefined null undefined

// const {success, data, msg} = {};
// success, data, msg => undefined undefined undefined; 

const {success, data: {name, age, enum: {name = ''} = {}}, msg} = {};
// console.log(name, age); => Cannot read property 'name' of undefined

const {success, data: {name, age} = {}, msg} = {};
// console.log(name, age); => undefined undefined