// Daniel Davis, findMin, finds minimum value//
function findMin(arr) {
  var min = arr[0]
  for(var i=0, i < arr.length, ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }// end of if statement
  }// end of for loop
}// end of function
