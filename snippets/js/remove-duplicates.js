const repeatingNumbers = [2, 5, 7, 2, 9, 6, 5, 8, 1, 3, 4, 3];
const uniqueNumbers = [...new Set(repeatingNumbers)].sort();
console.log('Unique numbers', uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
