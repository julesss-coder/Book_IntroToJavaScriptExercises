// 1
'Julia' + ' ' + 'Fe';

// 2
// Version 1:
// let number = 4936; 
// let ones = 4936 % 10;
// let tens = ((number - ones) % 100) / 10; 
// let hundreds = ((number - (ones + tens * 10)) % 1000) / 100;
// let thousands = (number - (ones + tens * 10 + hundreds * 100)) / 1000;

// Version 2:
let number = 4936; 
let ones = 4936 % 10;
number -= ones; // 4930
let tens = (4930 % 100) / 10;
number -= tens * 10; // 4900
let hundreds = (number % 1000) / 100; // 9
number -= hundreds * 100; // 4000
thousands = number / 1000;

// 3
String
Boolean
Number
Number
Undefined
object 

/* 4)
** Because when using a plus operator and at least one 
** string, all values in the expression are coerced into
** the String type and concatenated.
*/

// 5)
console.log(Number('5') + 10);

// 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 7
// No, it will be undefined.

// 8
let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];

// 9
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin:	'lizard',
};

// 10
3

// 12
true
