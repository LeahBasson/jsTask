let first_number = 15;
let second_number = 17;

//1 
let third_number = first_number;
first_number = second_number;
second_number = third_number;

console.log('first number:',first_number);
console.log('second number:',second_number);

//2
// [first_number, second_number] = [second_number, first_number];
// console.log('first number:', first_number);
// console.log('second number:', second_number);

//3
// first_number = first_number ^ second_number;
// second_number = first_number ^ second_number;
// first_number = first_number ^ second_number;

// console.log('first number:', first_number);
// console.log('second number:', second_number);