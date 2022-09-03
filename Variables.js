// 1
let name = "Victor";
let times = ['morning', 'afternoon', 'evening'];
for (let i = 0; i < times.length; i++) {
  console.log(`Good ${times[i]}, ${name}!`);
}

// 2
let age = 39;
let decade = 10;
console.log(`You are ${age} years old.`);
while (decade <= 40) {
  console.log(`In ${decade} years, you will be ${decade + age} years old.`);
  decade += 10;
}

// 3

/*
** Error, because foo is not visible outside its block.
*/

/* 4
** The first three messages are logged to the console.
** Line 6 throws an error, because a constant cannot be reassigned to a new value.
*/

// 5
/* I had some questions about this exercise, so I posted them on StackOverflow.com: https://stackoverflow.com/questions/73591104/how-exactly-does-variable-shadowing-work-javascript
*/

// 6
/* No, it won't produce an error. In the code block, `FOO` will have its own scope, so it is a different variable from the global `FOO`, even though its name is the same.
*/