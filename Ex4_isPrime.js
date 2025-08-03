function isPrime(num) {
    if (num <= 1) return false;

    let divisors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);

            if (i !== num / i) {
                divisors.push(num / i);
            }
        }

        if (divisors.length > 2) return false;
    }
    return true;
}


console.log(isPrime(1))  /* false */
console.log(isPrime(2))  /* true  */
console.log(isPrime(-1)) /* false */
console.log(isPrime(4)) /* false */
console.log(isPrime(49)) /* false */