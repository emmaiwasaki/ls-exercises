let multiply = (input1, input2) => {
  return input1 * input2;
}

let getNum = (prompt) => {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNum = getNum('enter the first number ');
let secondNum = getNum('enter the second number ');
console.log(`${firstNum} * ${secondNum} = ${multiply(Number(firstNum), Number(secondNum))}`);


/*
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/
