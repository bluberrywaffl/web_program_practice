//변수, 상수
let myVariable = 123;
const myConstant = "Hello, world!";

console.log(myVariable); // 123
console.log(myConstant); // Hello, world!

//데이터 타입
let myNumber = 123;
let myString = "Hello, world!";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = { name: "John", age: 30 };
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber); //number
console.log(typeof myString); //string
console.log(typeof myBoolean); //boolean
console.log(typeof myNull); //object (a bug in Javascript)
console.log(typeof myUndefined); //undefined
console.log(typeof myObject); //object
console.log(typeof mySymbol); //symbol

//연산자
let x = 10;
let y = 5;

console.log(x + y); //15
console.log(x - y); //5
console.log(x * y); //50
console.log(x / y); //2
console.log(x % y); //0

console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false
console.log(x === y); //false
console.log(x !== y); //true

let a = true;
let b = false;

console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //false

//조건문
let age = -10;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else if (age < 13 && age > 0) {
    console.log("You are a child.");
} else {
    console.log("You are not born yet!");
}

//switch문
let fruit = "blueberry";

switch (fruit) {
    case "apple":
        console.log("This is an apple.");
        break;
    case "banana":
        console.log("This is a banana.");
        break;
    case "orange":
        console.log("This is an orange.");
        break;
    case "blueberry":
        console.log("I really love blueberries.");
        break;
        default:
        console.log("Unknown fruit.");
}

//for문
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("D - Day");
for (let i = 1; i < 6; i++) {
    console.log("D - ", i);
    //console.log(i);
}

//while문
let i = 0;

while(i < 5) {
    console.log(i);
    i++;
}

let j = 15 

while(j > 0) {
    console.log(j);
    j--;
}

//배열 순회
const arr = [20, 30, 40, 50, 60];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//함수
function add(a, b) {
    return a + b;
}

let result = add(105, -29);

console.log(result); //3

function mod(a, b) {
    if(a > b) {
        return a % b;
    }
    else if(a <= b) {
        return b % a;
    }
}

let result1 = mod(55, 25);

console.log(result1);

//circle

function circ(a) {
    return a * 2 * 3.14;
}

let result2 = circ(5);
console.log(result2);

//객체
let myObject2 = {
    name: "James",
    age: 100,
    isMarried: false,
};

console.log(myObject2.name); //James
console.log(myObject2.age); //100
console.log(myObject2.isMarried); //false

//배열
let myArray = ["apple", "banana", "orange"];

console.log(myArray[0]); //apple
console.log(myArray[1]); //banana
console.log(myArray[2]); //orange