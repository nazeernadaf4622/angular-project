//1)Largest Number in array
var arr = [2, 4, 6, 8, 10, 12, 20, 24, 34, 36, 40, 42];
console.log(Math.max(...arr));

//Second Largest Number in Array
var arr1 = [2, 4, 6, 8, 10, 12, 20, 24, 34, 36, 40, 42];
var arr2 = arr1.sort((a, b) => b - a)[1];
console.log("The Second Largest number is", arr2);

console.log("*****************");

//2)Even and Odd 
var EvenOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(EvenOdd);
odd = [];
even = [];
for (var i = 0; i < EvenOdd.length; ++i) {
  if (EvenOdd[i] % 2 == 0) {
    even.push(EvenOdd[i]);
  }
  else {
    odd.push(EvenOdd[i]);
  }
}
console.log('Even Number ', even);
console.log('Odd Number', odd);

console.log("*****************");

//9)Pattern Program

let p = "*"
for (i = 1; i <= 4; i++) {
  console.log(p.repeat(i));
}

console.log("*****************");

//3)Factorial Of Number
function factorial(n) {
  let fact = 1
  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(5)

console.log("*****************");

//5)Prime Number
function prime(num) {
  let count = 0
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      count = count + 1

    }
  }
  if (count == 2) {
    console.log(num, 'is prime number');
  }
  else {
    console.log(num, 'is not a prime number');
  }
}
prime(4)

console.log("*****************");

//6)Fibonacci Series

function Fibonacci(num) {
  let a = 0;
  let b = 1;
  str = "";
  for (let i = 0; i < num; i++) {
    str += String(a);
    str += " ";
    c = a + b;
    a = b;
    b = c;
  }
  console.log(`for input ${num} the fibonoci series is ${str}`);
}
Fibonacci(3);

console.log("*****************");

//7)Bubble Sort
function Bubble(bArr) {
  for (let i = 0; i <= bArr.length; i++) {
    for (let j = 0; j <= bArr.length - i - 1; j++) {
      if (bArr[j] > bArr[j + 1]) {
        let temp = bArr[j];
        bArr[j] = bArr[j + 1];
        bArr[j + 1] = temp;
      }
    }
  }

  console.log(`the sorted array is ${bArr}`);
}
Bubble([4, 8, 24, 32, 27, 36, 38, 42, 40]);

console.log("*****************");

//8)Palindrome 

var isPalindrome = function (val) {
  if (val == val.split('').reverse().join('')) {
    console.log('is palindrome');
  } else {
    console.log('is not palindrome');
  }
};
isPalindrome("hello")

console.log("*****************");

//10)Object Iteration  
const object = {
  a: 1,
  b: 4,
  c: 3
};
for (const property in object) {
  console.log(property, object[property]);
}

console.log("****************");

//11)2 Examples on each loop like for loop, for in
//for in loop

var persons = {
  firstName: 'Pavi', // loop through an object
  lastName: 'Deep',
  age: 26,
  gender: 'Female'
}
for (var mykey in persons) {
  console.log(`${mykey}:-${persons[mykey]}`);
}
console.log("--------------------------------------");
//for of loop
var Fruit = ['Apple', 'Orange', 'Green Apple', 'Mango']
for (var fruits of Fruit) {
  console.log(fruits);
}

console.log("****************");

// 12)Array Destructuring and Object Destructuring

console.log("-----------Object Destructuring---------");
const person = {
  firstName: 'Pavithra',
  lastName: 'Pradeep',
  age: 26,
  hobbies: ['Singing', 'Cooking'],
  address: {
    state: 'TamilNadu',
    pincode: 638104,
    city: 'Erode'
  }
}
const { firstName, lastName } = person
console.log('first name', firstName);
console.log('last name', lastName);

//multiple level
const { hobbies, address: { state, city } } = person
console.log('hobbiess', hobbies);
console.log('state', state);
console.log('city', city);


console.log('--------------Array Destructuring-----------------');

const fruitts = ['apple', 'pine apple', 'orange', 'banana']
const [fruitts1, fruitts2] = fruitts
console.log(fruitts1);
console.log(fruitts2);

console.log("****************");

// 13)	Generate Id by using a button. Id Should change everytime When we click the button
function changeme(color) {
  document.body.style.background = color;
}


//change color by taking input value
function changecol() {
  let co = document.getElementById('changecolorofcolor').value;
  document.body.style.backgroundColor = co;
  document.getElementById("changecolor").value = co;
  document.body.style.color = "white";
}

//16)change the color by dropdown
function changeme(color) {
  document.body.style.background = color
}

// get value when we click the button
function getvalue() {
  let gets = "srinivas c r"
  document.getElementById("getvalue").value = gets
}


const arr3 = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5]
let myObject = new Object();
for (i = 0; i < arr3.length; i++) {
  if (arr3[i] !== arr3[i - 1]) {
    let values = arr3.filter((val, ind, arr) => val == arr3[i]).length;
    myObject[arr3[i]] = values;
  }
}
console.log(myObject);
let tojson = JSON.stringify(myObject)
console.log(tojson);


const arr4 = [2, 2, 3, 3, 4, 4, 5, 5]
let obj = new object();
for (i = 0; i < arr4.length; i++) {
  if (arr4[i] !== arr4[i - 1]) {
    let values = arr4.filter((val, index, arr) => val == arr4[i].length);
    obj[arr4[i]] = values;
  }
}
console.log(obj);