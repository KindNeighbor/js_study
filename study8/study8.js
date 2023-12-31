function constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = () => {
        console.log('안녕하세요 ' + this.name + ' 입니다');
    }
}

var person1 = new constructor('Kim', 20);
var person2 = new constructor('Choi', 30);

person1.sayHi();
person2.sayHi();

constructor.prototype.home = '서울';
console.log(person1.home);
console.log(constructor.prototype);
console.log(person1.__proto__);
console.log(Object.getPrototypeOf(person1));

Array.prototype.remove3 = function() {
    for (var i = 0; i < this.length; i++) {
            if ( this[i] === 3 ) {
            this.splice(i,1);
        }
    }
};

var arr = [1,2,3,4];
arr.remove3();

console.log(arr);

var parent = { name : 'Kim', age : 40};
var child = Object.create(parent);

console.log(child.age); // 40 출력 
child.age = 10;
console.log(child.age); // 10 출력 

class grandParent {
    constructor(name){
        this.성 = 'Kim';
        this.이름 = name;
    }

    func1() {
        console.log('Hello1');
    }
}

class Parent extends grandParent{
    constructor(name, age){
        super(name);
        this.나이 = age;
    }
    func2() {
        super.func1();
        console.log('Hello2');
    }
}

var obj3 = new Parent('aa', 13);
console.log(obj3);
obj3.func2();

var person1 = {
    name : 'Kim',
    age : 20,
    getName() {
        return this.name;
    },

    setName(name){
        this.name = name;
    }
}

console.log(person1.getName());
person1.setName('Choi');
console.log(person1.getName());

var person2 = {
    name : 'Choi',
    age : 30,
    get getName() {
        return this.name;
    },

    set setName(name){
        this.name = name;
    }
}

console.log(person2.getName);
person2.setName = 'Park';
console.log(person2.getName);

var person2 = {
    name : 'Choi',
    age : 30,
    get getName() {
        return this.name;;
    },

    set setName(name){
        this.name = name;
    }
}

console.log(person2.getName);
person2.setName = 'Park';
console.log(person2.getName);

var person3 = {
    name : 'Choi',
    age : 30,
    set info(data) {
        if (typeof data === 'object') {
                this.name = data.name || this.name;
                this.age = data.age || this.age;
            }
    },

    get info() {
        return {
            name: this.name,
            age: this.age
        };
    }
}
console.log(person3.info);
person3.info = { name: '김', age: 20 };
console.log(person3.info);  // { name: '김', age: 20 }

async function func1() {
    var promise = new Promise((resolve, reject) => {
        var a = 2 + 2;
        resolve(a);
    });

    promise.then(function(a) {
        console.log(a);
    });
}

func1();

async function func2() {
    var promise = new Promise((resolve, reject) => {
        var a = 1 + 1;
        resolve(a);
    });
    var result = await promise;
    console.log(result);
}

func2();

async function func3() {
    var promise = new Promise((resolve, reject) => {
        var a = 1 + 1;
        resolve(a);
    });
    try {
        var result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

func3();