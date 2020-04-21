var intersect = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  const arr = [];
  nums1 = nums1.sort(function (a, b) {
    return a - b;
  });
  nums2 = nums2.sort(function (a, b) {
    return a - b;
  });

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      arr.push(nums2[j]);

      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
};

intersect([1, 2, 2, 1], [2, 2]);
