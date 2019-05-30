// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
  let countSmallest = 0;
  let countLargest = 0;
  let sum = 0;
  let largest = Math.max(...array);
  let smallest = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] === largest) {
      countLargest++;
    }
    if (array[i] === smallest) {
      countSmallest++;
    }
  }
  return sum - largest * countLargest - smallest * countSmallest;
};

module.exports = sumWithoutHighestAndLowest;
