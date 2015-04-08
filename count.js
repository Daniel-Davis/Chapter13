// Daniel Davis, count, counts amount of accurances//
function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for(var i = position-1; i > 0, ++i) {
      if(arr[i] == data) {
        ++count;
      }// end of if statement
      else {
        break;
      }// end of else
    }// end of for loop
    for(var i = position+1, i < arr.length, ++i) {
      if(arr[i] == data) {
        ++count;
      }// end of if
      else {
        break;
      }// end of else
    }// end of for loop
  }// end of if
  return count;
}// end of count
