let counte = 0;
function fibon(n, memo) {
  counte++;

  let result;

  if (memo[n]) {
    return memo[n];
  }
  //[1, 1, 2, 3, 5, 8 ]
  if (n == 0 || n == 1) {
    result = 1;
  } else {
    result = fibon(n - 1, memo) + fibon(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

const memo = {};
fibon(5, memo);
console.log('Count ', counte);
console.log('memo ', memo);
counte = 0;

fibon(6, memo);
console.log('Count ', counte);
console.log('memo ', memo);
counte = 0;

fibon(20, {});
console.log('Count ', counte);
counte = 0;

fibon(30, {});
console.log('Count ', counte);
counte = 0;


//    0(n)