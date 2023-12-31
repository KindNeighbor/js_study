function sol(a, b, c) {
    console.log(a + b + c);
}

var array1 = [1, 2, 3]
sol(...array1);

function add(a, b = time(a)) {
    console.log(a+b);
}

function time(b) {
    return b * b;
}

add(4);

function sol2(a, b, c) {
    console.log(arguments);
}

function sol3(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

function sol4(a, b, c) {
    for (let i = 0; i <arguments.length; i++) {
        console.log(arguments[i]);
    }
}

sol2(...array1);

sol3(...array1);

sol4(...array1);

// 1.
var a1 = [1,2,3];
var b1 = '김밥';
var c1 = [...b1, ...a1];
console.log(c1);


// 2.
var a2 = [1,2,3];
var b2 = ['you', 'are'];
var c2 = function(a2,b2){
    console.log([...a2]);
    console.log([...b2]);
    console.log([[...a2], ...[...b2]]);
    console.log( [[...a2], ...[...b2]][1] );
}
c2(a2,b2);


// 3.
function func1(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
}
func1(3);


// 4.
function func2(a = 5, b = a * 2 ){
    console.log(a + b);
}
func2(undefined, undefined);


// 5.
function makeArray(...value){
    return value;
}

var newArray = makeArray(1,2,3,4,5);
console.log(newArray); 

function makeArray2() {
    return arguments;
}

var newArray2 = makeArray2(1,2,3,4,5);
console.log(newArray2); 


// 6.
function func3(...numbers) {
    let max = -9999999;
    numbers.forEach(function(a) {
        max = Math.max(max, a);
    })
    console.log(max);
}

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
func3(...numbers);
console.log(Math.max(...numbers));


// 7.
function sortFunc1(string){
    var array3 = [...string];
    console.log(...array3.sort());
}

sortFunc1('bear'); 

//8.

function countChar(string) {

    var obj1 = {};
    console.log([...string]);
    [...string].forEach(function(val) {
        if (obj1[val] > 0) obj1[val]++;
        else obj1[val] = 1;
    })

    console.log(obj1);
}

countChar('aaabbbbcc');