const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const total = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(total); // 15