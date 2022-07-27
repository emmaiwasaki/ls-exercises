let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);

let getName = (prompt) => {
  let rlSync2 = require('readline-sync');
  let name = rlSync2.question(prompt);
  return name;
} 

let firstName2 = getName('what is your first name?');
let lastName2 = getName('what is your last name?');
console.log(`Hello, ${firstName2} ${lastName2}!`);