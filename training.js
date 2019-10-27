function unique(arr) {
    let uniqum = new Set(arr);
    return [...uniqum];
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
];

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let result = new Map();
    let forEach = arr.forEach((element) => {
         const key = element.toLowerCase().split("").sort().join("");
         if (!result.get(key)){
             result.set(key, element);
         }
    });

    return [...result.values()];
}

/*function getSecondsToday() {
    let time = new Date();
    let second = time.getHours()*3600 + time.getMinutes()*60 + time.getSeconds();
    return second;
}*/

function getSecondsToTomorrow(){
    let time = new Date();
    let second = time.getHours()*3600 + time.getMinutes()*60 + time.getSeconds();
    let daySecond = 24*3600;
    return daySecond - second;
}

function fib(n) {
    let a = 1;
    let b = 1;
    if (n === 1 || n === 2) return a;
    for (let i = 1; i < n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printLis(list) {
    let current = list ;
    while (current.next) {
        console.log(current.value);
        current = current.next;
    }
    current.value && console.log(current.value);
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
    { name: "Pete", age: 18, surname: "Peterson" },
];

const byField = fieldName => (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;

console.log(users.sort(byField('name')));

/*function f(x) {
    console.log(x);
}

function delay(func,ms){
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    };
}

let f1000 = delay(f, 1000);

function sum(a){
    let current = a;
    return function f(b){
        if (typeof b === "number"){
            current += b;
            return f;
        }
        return current;
    }
}


function inBetween(a, b){
    return (x) => {
            if (x >= a && x <= b) {
                return x;
            }
    }
}

function inArray(arr){
    return (item) => {
        for (let i of arr) {
            if (item === i) return true;
            console.log( i, item);
        }
        return false;
    }
}

function inArraySet(arr){
    let result = new Set(arr);
    return (item) => result.has(item);
}

const byField = (fieldName) => (a,b) => (a[fieldName] > b[fieldName] ? 1 : -1);
console.log(users.sort(byField('name')));


let arrNew = [1, 2, 3, 4, 5, 6, 7];
console.log( arrNew.filter(inBetween(3, 6)) );
console.log( arrNew.filter(inArray([1, 2, 10])) );
console.log( arrNew.filter(inArraySet([1, 2, 10])) );*/

Function.prototype.defer = function(ms) {
    return (...args) => {
        setTimeout(this, ms, ...args);
    };
};
function f(a, b) {
    console.log( a + b );
}

var a = 10;
(function() {
    var a = 15;
    global.x = function() {
        console.log(a);
    }
})();
x();

let fieldsParam = {
    field1: "a",
    field2: "b",
    field3: "c",
    field4: "d",
    field5: "e",
    field6: "e",
    field7: "e",
    field8: "e",
};

const getValidator = (fieldName) => {
    return function validator (){
        return fieldName;
    }
};

let validators = ((obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = getValidator(fieldsParam[key]);
        return acc;
    }, {});
})(fieldsParam);

console.log(getValidator(fieldsParam["field1"])());
console.log(Object.keys(validators).map((item) => validators[item]() ));