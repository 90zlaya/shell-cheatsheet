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
