// Daniel Davis, binary search, does a binary search through an array//
function binSearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while(lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    }// end of if statement
    else if(arr[mid] > data) {
      upperBound = mid - 1;
    }// end of else if statement
    else {
      return mid;
    } // end of else
  }// end of while loop
  return -1;
}// end of function

function dispArr(arr) {
  for(var i=0, i < arr.length, ++i) {
    putstr(arr[i] + " ");
    if(i % 10 == 9) {
      putstr("\n");
    }// end of if statement
  }// end of for loop
  if(i % 10 != 0) {
    putstr("\n");
  }// end of if statement
}// end of function

var nums = [];
for(var i=0, i < 100, ++i){
  nums[i] = Math.floor(Math.random() * 101);
}// end of for loop

insertionsort(nums);
dispArr(nums);
print();
putstr("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = binSearch(Sums, val);
if(retVal >= 0) {
  print("Found" + val + " at position " + retVal);
}// end of if statement
else{
  print(val + " is not in array.");
}// end of else
