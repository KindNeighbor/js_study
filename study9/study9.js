const array1 = [1, 2, 3, 4, 5];
    array1.forEach((value, index, arr) => {
    console.log(value);
    console.log(index);
    console.log(arr);
});

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(obj[key]);
    console.log(key);
}

const array2 = [1, 3, 5, 7, 9];
    for (let index in array2) {
    console.log(index);
}

class parent {
                
}
parent.prototype.name = 'Park';

var obj1 = new parent();
obj1.age = 15;

for (var key in obj1) {
    console.log(obj1[key]);
}

for (var key in obj1) {
    if (obj1.hasOwnProperty(key)) {
            console.log(obj1[key]);
    }
}

var array3 = [2,3,4,5];
console.log( array3[Symbol.iterator]() );

const array4 = [1, 3, 5, 7, 9];
for (let value of array4) {
    console.log(value);
}

const str = "Hello";
for (let char of str) {
    console.log(char); // 'H', 'e', 'l', 'l', 'o' 순서대로 출력
}
console.log(...str);

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let [key, value] of map) {
    console.log(key, value); // 'a' 1, 'b' 2, 'c' 3 순서대로 출력
}

var array = [2,3,4];
console.log(array[Symbol.iterator]);

var { name : a, age : b } = { name : 'Kim', age : 30 };
console.log(a);
console.log(b);
var { c, d } = { c : 'Kim', d : 30 };
console.log(c);
console.log(d);
var { e, f = 15 } = { e : 'Kim'};
console.log(e);
console.log(f);