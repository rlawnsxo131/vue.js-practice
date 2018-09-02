//ES5
//1
var num = 100;
var sumNumbers = function(a,b){
  return a+b;
};
sumNumbers(10,20); //30
//3
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
  console.log(i); //5
//4
var sumNumbers = function(a,b){
  return a+b;
};
//5
var nameSpaceA = {
  num : 10
};
var nameSpaceB = {
  num : 20
};
console.log(nameSpaceA.num); //10
console.log(nameSpaceB.num); //20
//ES6
//1
const num = 100;
let sumNumbers = (a,b) => {
  return a+b;
};
sumNumbers(10,20); //30
//2
let a = 10;
a = 20; //20

const a = 10;
a = 20; //Uncaught TypeError : Assignment to constant variable
//3
let i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
  console.log(i); //10;
//4
var sumNumbers = (a,b) => {
  return a+b;
};
//5
// ./app/login.js
export const id = 'test';

// ./main.js
import {id} from '.app/login.js';
console.log(id); //test
