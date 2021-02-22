<?php

function isPrime($number) {
    if ($number === 2) {
        // Number 2 is prime
        return true;
    } else if (!is_int($number) || ($number < 2) || !($number % 2)) {
        // Non-numbers, numbers smaller than 2 and even numbers aren't prime
        return false;
    } else {
        $loopCounter = 0; // We want to count number of loops
        for ($i=3; $i<=($number-1); $i+=2) {
            $loopCounter++;
            if (($number % $i) === 0) {
                echo "Looped only $loopCounter times";
                return false;
            }
        }
    }
    return true;
}

echo isPrime(1000000000000001); // Will enter loop for 3 times and return false
