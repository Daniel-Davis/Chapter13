// Daniel Davis, findSecondMin, finds the second smallest element //

function findSecondMin(arr) {
  
var min = arr[0];
var output = arr[1];

for(var i=0, i < arr.length, ++i) {
  if (arr[i] < min) {
    min = arr[i];
  }// end of if statement
  if (arr[i] < output && arr[i] > min) {
    output = arr[i];
  }// end of if statement
}// end of for loop
return min;
return output;
}// end of function
