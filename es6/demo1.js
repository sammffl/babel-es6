/**
 * Created by SamMFFL on 16/7/19.
 */

let a = 0;
const PI = 3.14;

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}


var getValue = () => 4.55;

let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
    return fruit + 's';
});

console.log(breakfast);

function Person() {
    this.age = 0;

    setInterval(() => {
        // |this| 指向 person 对象
        this.age++;
    }, 1000);
}

var person = new Person();

var getFinalPrice = (price = 0, tax = 0.1)=> price * tax + price;
getFinalPrice(200);

//================

// function foo(x,y,z) {
//     console.log(x,y,z);
// }
//
// let arr = [1,2,3];
// foo(...arr); // 1 2 3

function getCar(make, model, value) {
    return {
        make,
        model,
        value,
        ['ma' + make]: true,
        depreciate(){
            this.value += 250;
        }
    };
}


let car = getCar('Barret', 'Lee', 4000);


let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10; // 二进制使用 `0b` 或者 `0B`
console.log(bValue); // 2

//============================


function foo() {
    return [1, 2, 3];
}
let arr2 = foo(); // [1,2,3]

let [a1,b1,c1] = arr2;

//============================

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6

//===========================
var parent = {
    foo() {
        console.log("Hello from the Parent");
    }
}

var child = {
    foo() {
        super.foo();
        console.log("Hello from the Child");
    }
}

Object.setPrototypeOf(child, parent);
child.foo();

//=================

let user = 'Barret';
console.log(`Hi ${user}!`);

//==================
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
    console.log(nickname);
}


//========================
//
// var p = new Promise(function(resolve, reject) {
//     if () {
//         // fulfilled successfully
//         resolve(/* value */);
//     } else {
//         // error, rejected
//         reject(/* reason */);
//     }
// });

