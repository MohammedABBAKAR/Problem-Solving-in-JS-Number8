// You are given an array (which will have a length of
//      at least 3, but could be very large) containing integers. 
//      The array is either entirely comprised of odd integers or 
//      entirely comprised of even integers except for a single integer N. 
//      Write a method that takes the array as 
// an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


// Check if the majority of integers are even or odd
// Find the outlier based on the majority



  function findOutlier(integers) {
    
    const isEvenMajority = integers.filter(e => e % 2 === 0).length > 1;

    
    return integers.find(e => (e % 2 === 0) !== isEvenMajority);
}

// Example usage:
const result = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
console.log(result); // Outputs 11



// function findOutlier(integers) {
//     // Check if the majority of integers are even or odd
//     const isEvenMajority = integers.filter(e => e % 2 === 0).length > 1;

//     // Find the outlier based on the majority
//     return integers.find(e => e % 2 === 1)
// }

// // Example usage:
// const result = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
// console.log(result); // Outputs 11