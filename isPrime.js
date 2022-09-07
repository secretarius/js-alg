function fib(n) {
    const numbers = [1, 1]
    for(let i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1]) // 
    }
    return numbers[n]
}

console.log(fib(4));
console.log(fib(5));

function isPrime(n) {
    //for(let i = 0; i < Math.sqrt(n); i++) {
    for(let i = 0; i < n; i++) { //1
        if(n % i === 0) { // n
            return false; // 1
        }
    }
    return true; // 1
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(9));

