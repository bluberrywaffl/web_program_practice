const rows = 5; // number of rows in the pyramid
let pyramid = ""; // initialize an empty string to store the pyramid shape

// iterate through each row of the pyramid
for (let i = 1; i <= rows; i++) {
  // add spaces before the first asterisk in each row to center the pyramid shape
  for (let j = 1; j <= rows - i; j++) {
    pyramid += " ";
  }
  // add asterisks to the pyramid shape for the current row
  for (let k = 1; k <= 2 * i - 1; k++) {
    pyramid += "*";
  }
  // add a new line character to separate each row of the pyramid shape
  pyramid += "\n";
}

// print the completed pyramid shape to the console
console.log(pyramid);
