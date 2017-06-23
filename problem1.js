// Problem #1:

// Given a vector of integers, find the longest consecutive sub-sequence of increasing numbers.
// If two sub-sequences have the same length, use the one that occurs first. An increasing sub-sequence must have a length of 2 or greater to qualify.

// Example input:
//   [1 0 1 2 3 0 4 5]
// Result:
//   [0 1 2 3]

// TODO: tests for normal input/output,
//   two groups of the same length,
//   negative numbers

// _____________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________
// MY ANSWER____________________________________________________________________________________________________________
// Muy solution for this can be easily tested for three questions: 1) Does a sub-sequence exists, 2) What is the LONGEST
// sub-sequence, and 3) Does this function work with negative numbers?
// I use a subroutine in order to go through the list, since we dont know exactly how long the list will be or how many
// times we will have to loop through it.


// We check to see if the element is the beginning of a sub-sequence if the next element is one number higher than the last.
var checkSequence = function(input) {
  var loIndex = 0;
  var currentSeq = [];
  var finalSeq = [];
  
  for (var i = 0; i < input.length; i++) {
    subroutine(input);
  }
  
  return finalSeq;
  
  // I personally like subroutines. They help alot for solving problems like this and i believe it comes in handy for this solution
  // The subroutine goes through the rest of the list starting from the current index of the for loop.
  function subroutine(nums) {
    // base case for recursive action, which checks if the loIndex is at the end of the list.
    if (loIndex === input.length-1) return;
    
    // If the current element 1 less than the next element, then count that as a sequence. If not, skip it and reset the current sequence
    if (nums[loIndex+1] === nums[loIndex] + 1) {
      if (currentSeq.length === 0) currentSeq.push(nums[loIndex]);
      currentSeq.push(nums[loIndex+1]);
    } else {
      currentSeq = [];
    }
    
    // Increase the loIndex so we dont have to start all the way back over every time we want to check an element in the list
    loIndex++;
    
    // Finally if the current sub-sequence is longer than the last, set that as the final answer.
    // This guarantees the first squence is used if there are two sequences of the same length.
    if (currentSeq.length > finalSeq.length) finalSeq = currentSeq;
    
    subroutine(nums);
  }
}

console.log('Problem 1 example:::', checkSequence([1,0,1,2,3,0,4,5]));