'use strict'

const a = 2;
const multiply = num => num * a;
console.log(multiply(3));

const numbers = [1,2,3,4];
const doubled = numbers.map( i => multiply(i) );
console.log(`doubled`, doubled)
