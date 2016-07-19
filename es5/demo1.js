'use strict';

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by SamMFFL on 16/7/19.
 */

var a = 0;
var PI = 3.14;

var _loop = function _loop(i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
};

for (var i = 0; i < 5; i++) {
    _loop(i);
}

var getValue = function getValue() {
    return 4.55;
};

var arr = ['apple', 'banana', 'orange'];

var breakfast = arr.map(function (fruit) {
    return fruit + 's';
});

console.log(breakfast);

function Person() {
    var _this = this;

    this.age = 0;

    setInterval(function () {
        // |this| 指向 person 对象
        _this.age++;
    }, 1000);
}

var person = new Person();

var getFinalPrice = function getFinalPrice() {
    var price = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var tax = arguments.length <= 1 || arguments[1] === undefined ? 0.1 : arguments[1];
    return price * tax + price;
};
getFinalPrice(200);

//================

// function foo(x,y,z) {
//     console.log(x,y,z);
// }
//
// let arr = [1,2,3];
// foo(...arr); // 1 2 3

function getCar(make, model, value) {
    var _ref;

    return _ref = {
        make: make,
        model: model,
        value: value
    }, _defineProperty(_ref, 'ma' + make, true), _defineProperty(_ref, 'depreciate', function depreciate() {
        this.value += 250;
    }), _ref;
}

var car = getCar('Barret', 'Lee', 4000);

var oValue = 8;
console.log(oValue); // 8

var bValue = 2; // 二进制使用 `0b` 或者 `0B`
console.log(bValue); // 2

//============================

function foo() {
    return [1, 2, 3];
}
var arr2 = foo(); // [1,2,3]

var _arr = _slicedToArray(arr2, 3);

var a1 = _arr[0];
var b1 = _arr[1];
var c1 = _arr[2];

//============================

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var _bar = bar();

var x = _bar.x;
var y = _bar.y;
var z = _bar.z;

console.log(x, y, z); // 4 5 6

//===========================
var parent = {
    foo: function foo() {
        console.log("Hello from the Parent");
    }
};

var child = _obj = {
    foo: function foo() {
        _get(Object.getPrototypeOf(_obj), 'foo', this).call(this);
        console.log("Hello from the Child");
    }
};

Object.setPrototypeOf(child, parent);
child.foo();

//=================

var user = 'Barret';
console.log('Hi ' + user + '!');

//==================
var nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = nicknames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var nickname = _step.value;

        console.log(nickname);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}