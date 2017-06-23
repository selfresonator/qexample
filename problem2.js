// Problem #2:

// A tic-tac-toe board is represented by a two dimensional vector. X is represented by :x, O is represented by :o, and empty is represented by :e. A player wins by placing three Xs or three Os in a horizontal, vertical, or diagonal row. Write a function which analyzes a tic-tac-toe board and returns :x if X has won, :o if O has won, and nil if neither player has won.
  
// Example input:
//   [[:x :e :o]
//    [:x :e :e]
//    [:x :e :o]]
// Result:
//   :x


// _____________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________
// MY ANSWER____________________________________________________________________________________________________________
// The solution I wrote for this is dense, but it works for this size board. I broke it up into smaller functions that I could
// use to check all sets of possibilities of orientation. So that means rows, columns, the ascending(major) diagonal and the
// descending(minor) diagonal. The solution works for any tic toe toe board that is 3 X 3, but NOT for every size board.
// This would be the next step in refactoring this for a cleaner, faster solution. Either way, I would always break a
// problem like this up into smaller components that I can easily solve and compare answers for those later to obtain my final answer.
// I also like to leave named function expressions at the bottom for more of a modular style of function writing. Helps
// with keeping it organized.
var testArr = [
  [':x', ':e', ':o'],
  [':x', ':e', ':e'],
  [':x', ':e', ':o']
];

var boardChecker = function(board) {
  var exArr = [];
  
  exArr.push(checkRows(board));
  exArr.push(checkColumns(board));
  exArr.push(checkMinDiagonal(board));
  exArr.push(checkMajDiagonal(board));

  if (exArr.indexOf(':x') !== -1) {
    return ':x';
  } else if (exArr.indexOf(':o') !== -1) {
    return ':o';
  } else {
    return 'nil';
  }
  
  
  function checkRows(input) {
    var charList = [':x', ':o'];
    var rowArray = [];
    
    // This first loop is to check each letter
    for (var i = 0; i < charList.length; i++) {
      var letter = charList[i];
      
      // Now we check each row. we increase the index for each column...
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          
          // ... and if the letter matches either element, then push that to an array that we count later
          if (input[j][k] === letter) {
            rowArray.push(letter);
          }
        }
        
        // If the array isnt the length of the board, empty the array and check the next row
        if (rowArray.length < 3) {
          rowArray = [];
        } else {
          return rowArray[0];
        }
      }
    }
    
    return 'nil';
  }
  

// The checkColumns function is essentially the same as the checkRows function, it just checks the indexes in the opposite direction since they are doing essentially the same operation.
  function checkColumns(input) {
    var charList = [':x', ':o'];
    var columnArray = [];
    
    // This first loop is to check each letter
    for (var i = 0; i < charList.length; i++) {
      // Set the letter in memory to reference later
      var letter = charList[i];
      
      // Now we check each column. We first increase the index for each row...
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          
          // ... and if the letter matches either element, then push that to an array that we use later
          if (input[k][j] === letter) {
            columnArray.push(letter);
          }
        }
        
        // If the array isnt the length of the board, emoty that array and check the next column
        if (columnArray.length < 3) {
          columnArray = [];
        } else {
          return columnArray[0];
        }
      }
    }
    
    return 'nil';
  }
  
  
  function checkMinDiagonal(input) {
    var charList = [':x', ':o'];
    var minArray = [];
    
    // This first loop is to check each letter
    for (var i = 0; i < charList.length; i++) {
      // Set the letter in memory to reference later
      var letter = charList[i];
      
      // Now we check the minor(descending) diagonal. we can use two references to the index in order to check each minor diagonal position on the board.
      for (var j = 0; j < 3; j++) {
        // ... and if the letter matches either element, then push that to an array that we use later
        if (input[j][j] === letter) {
          minArray.push(letter);
        }
        
      }
      
      // If the array isnt the length of the board, emoty that array and check the next column
      if (minArray.length < 3) {
        minArray = [];
      } else {
        return minArray[0];
      }
    }
    
    return 'nil';
  }
  
  function checkMajDiagonal(input) {
    var charList = [':x', ':o'];
    var majArray = [];
    var loIndex = 0;
    var hiIndex = 2;
    
    // This first loop is to check each letter
    for (var i = 0; i < charList.length; i++) {
      // Set the letter in memory to reference later
      var letter = charList[i];
      
      // Now we check the major(ascending) diagonal. We can use two references to the index in order to check each minor diagonal position on the board.
      for (var j = 0; j < 3; j++) {
        // ... and if the letter matches either element, then push that to an array that we use later
        // We use two index whose value gets switched depending on the place in the for loop it is
        if (input[loIndex][hiIndex] === letter) {
          majArray.push(letter);
        }
        
        loIndex++;
        hiIndex--;
      }
      
      
      // If the array isnt the length of the board, emoty that array and check the next column
      if (majArray.length < 3) {
        majArray = [];
      } else {
        return majArray[0];
      }
      
      loIndex = 0;
      hiIndex = 2;
    }
    
    return 'nil';
  }
}

var testArr1 = [
  [':x', ':e', ':o'],
  [':x', ':e', ':e'],
  [':x', ':e', ':o']
];

var testArr2 = [
  [':x', ':x', ':x'],
  [':e', ':o', ':e'],
  [':x', ':e', ':o']
];

var testArr3 = [
  [':o', ':e', ':e'],
  [':x', ':o', ':e'],
  [':x', ':e', ':o']
];

var testArr4 = [
  [':e', ':e', ':o'],
  [':x', ':o', ':e'],
  [':o', ':e', ':x']
];

var testArr5 = [
  [':o', ':e', ':x'],
  [':x', ':x', ':e'],
  [':e', ':e', ':o']
];

console.log('Problem 2 example 1 for colums:::', boardChecker(testArr1));               // ':x'
console.log('Problem 2 example 2 for rows:::', boardChecker(testArr2));                 // ':x'
console.log('Problem 2 example 3 for descending diagonals:::', boardChecker(testArr3)); // ':o'
console.log('Problem 2 example 4 for ascending diagonals:::', boardChecker(testArr4));  // ':o'
console.log('Problem 2 example 5 for a tie game:::', boardChecker(testArr5));           // 'nil'