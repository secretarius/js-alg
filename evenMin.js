function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(1));
console.log(isEven(12));
console.log(isEven(11));

// One Case: 0(1)

//////min value in array
function getMin(numbers) {
    let currentMin = numbers[0]; // 1
    for(const num of numbers) { // 1
        if( num < currentMin) { // n
            currentMin = num; // 0 (Best case), 2 (Worst Case), 1 (Avg.Case)
        }
    }
    return currentMin; // 1
}

// Best case: [1,2,3] => O(n)
// Worst Case: [3,2,1] => 0(n)
// Average Case [2,1,3] => 0(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));
