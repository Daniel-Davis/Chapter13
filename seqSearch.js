// Daniel Davis, seqSearch, performs sequential search //

function seqSearch(arr, data) {
  for (var i=0, i < arr.length, ++i) {
    if (arr[i]==data) {
      return true;
    }// end of if statement
  }// end of for loop
  return false;
}// end of function
