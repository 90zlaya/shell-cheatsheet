# JavaScript Knowledgebase
> Important points about JavaScript

## Table of Contents

1. [Prime Numbers](#prime-numbers)
1. [Remove Duplicates](#remove-duplicates)
1. [Copy Array](#copy-array)

[↩ back to list of cheatsheets](README.md#list-of-cheatsheets)

1. ### Prime Numbers

[Theory about prime number](https://en.wikipedia.org/wiki/Prime_number) states that a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. Number 2 is prime number but all other even numbers aren't prime (they are composite numbers). Only odd numbers qualify to be prime numbers. 

We're going to create algorithm to find if given number is prime or not, and we're going to do that as fast as possible. In following code snippet, we will determine if number `1000000000000001` is prime number. Boolean will be returned for any input. Only if number is prime `true` will be returned. 

```javascript
const isPrime = (number) => {
    if (number === 2) {
        // Number 2 is prime
        return true;
    } else if (!Number.isInteger(number) || (number < 2) || !(number % 2)) {
        // Non-numbers, numbers smaller than 2 and even numbers aren't prime
        return false;
    } else {
        let loopCounter = 0; // We want to count number of loops
        for (let i=3; i<=(number-1); i+=2) {
            loopCounter++;
            if ((number % i) === 0) {
                console.log(`Looped only ${ loopCounter } times`);
                return false;
            }
        }
    }
    return true;
};

console.log(isPrime(1000000000000001)); // Will enter loop for 3 times and return false
```

[⬆ back to top](#table-of-contents)

2. ### Remove Duplicates

The objective is to create sorted array of unique numbers from given array `repeatingNumbers` in fewest lines.

```javascript
const repeatingNumbers = [2, 5, 7, 2, 9, 6, 5, 8, 1, 3, 4, 3];
const uniqueNumbers = [...new Set(repeatingNumbers)].sort();
console.log('Unique numbers', uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

We are using `Set` to get unique values which returns `object`, so spread syntax is needed to convert `object` to `array`. Finally, `sort` is used to create ascending order. 

[⬆ back to top](#table-of-contents)

3. ### Copy Array

The objective is to copy array `originalNumbers` to new array `allNumbers` and add 8 and 9 to newly created array in fewest lines.

```javascript
const originalNumbers = [1, 2, 3, 4, 5, 6, 7];
const allNumbers = [...originalNumbers, 8, 9];
console.log('All numbers', allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

We are using spread syntax to create new array `allNumbers` and then add 8 and 9 to it. 

[⬆ back to top](#table-of-contents)
