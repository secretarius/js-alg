
// function findBinaryEl(sortedArray, element) {
//     let startIndex = 0;
//     let endIndex = sortedArray.length - 1;

//     while(startIndex <= endIndex) {
//         console.log('RUNNING');
        

//     const middleIndex = Math.floor((endIndex - startIndex) / 2);

//     if(element === sortedArray[middleIndex]) {
//         return middleIndex;
//     }

//     if(sortedArray[middleIndex] < element) {
//         startIndex = middleIndex + 1;
//     } else {
//         endIndex = middleIndex - 1;
//     }
// }
// }

// const array = [1, 5, 9, 13, 99, 100]

// console.log(findBinaryEl(array, 99));

function findEl(sortedArr, element) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;
  
    while (startIndex <= endIndex) {
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  
      if (element === sortedArr[middleIndex]) {
        return middleIndex;
      }
  
      if (sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
  }
  
  const arra = [1, 5, 9, 13, 99, 100];
  
  console.log(findEl(arra, 99));