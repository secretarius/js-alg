function facto(number) {
    let result = 1;
    for (let index = 2; index <= number; index++) {
        result = result * index
    }
    return result;
}

console.log(facto(3));
console.log(facto(4));
console.log(facto(5));


// O(n)


function factorial(number) {
   if(number <= 1) { // 1
    return 1; // 1
   }
   return number * factorial(number -1); // 1
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// In every function call => 0(1)
// But we trigger multiple function calls => n function calls 
// T = n * 0(1) = 0(n)
// T = 1 * n = n => 0(n)

let count = 0;
function fibo(n){
    count++
    //[1, 1, 2, 3, 5, 8 ]
    if(n == 0 || n == 1 ) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}

// loop base solution: (O)n
// 0(n^2)

// console.log(fib(4));
// console.log(fib(5));

fibo(5);
console.log('Count ', count);
count = 0;

fibo(10);
console.log('Count ', count);
count = 0;

fibo(20);
console.log('Count ', count);
count = 0;

fibo(30);
console.log('Count ', count);
count = 0;