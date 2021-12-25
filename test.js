var majorityElement = function (nums, k) {
  var eArr = [];
  var countArr = [];
  for (var i = 0; i < k - 1; i++) {
    eArr[i] = Number.MAX_VALUE;
    countArr[i] = 0;
  }

  for (var i = 0; i < nums.length; i++) {
    var flag = false;

    for (var j = 0; j < eArr.length; j++) {
      if (nums[i] == eArr[j]) {
        countArr[j]++;
        flag = true;
        break;
      }
    }

    if (flag) continue;

    for (var j = 0; j < eArr.length; j++) {
      if (countArr[j] === 0) {
        eArr[j] = nums[i];
        flag = true;
        break;
      }
    }

    if (flag) continue;

    for (var j = 0; j < eArr.length; j++) {
      countArr[j] -= 1;
    }
  }

  for (var i = 0; i < k - 1; i++) {
    countArr[i] = 0;
  }

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < eArr.length; j++) {
      if (nums[i] == eArr[j]) {
        countArr[j]++;
        break;
      }
    }
  }

  var ans = [];

  for (var i = 0; i < eArr.length; i++) {
    if (countArr[i] > nums.length / k) {
      ans.push(eArr[i]);
    }
  }

  console.log(ans);
};

majorityElement([3, 1, 2, 2, 1, 2, 3, 3], 4);
