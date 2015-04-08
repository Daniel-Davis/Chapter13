// Daniel Davis, findMax, finds the maximum value//
function findMax() {
  var max = arr[0];
  for(var i=0, i < arr.length, ++i) {
    if(arr[i] > max) {
      max = arr[i];
    }// end of if statement
  }// end of for loop
  return max;
}// end of function
