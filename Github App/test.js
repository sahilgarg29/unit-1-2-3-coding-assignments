function permutations(arr, i, ans) {
  if (i == arr.length) {
    ans.push(arr.join(" "));

    return;
  }

  for (var j = i; j < arr.length; j++) {
    swap(arr, i, j);
    permutations(arr, i + 1, ans);
    swap(arr, i, j);
  }
}

function swap(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

var newArr = [];
permutations([1, 2, 3], 0, newArr);
console.log(newArr);
