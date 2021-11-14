/**给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
*/

var twoSum = function (nums, target) {
  //s首先创建一个map
  const map = new Map();
  //循环num数组，用traget减去数组中的每一个值。
  for (let i = 0; i < nums.length; i++) {
    //用目标值减去数组的每个值
    const val = target - nums[i]
    //判断在map中有没有val，若是没有就将s数组的这个值放入map,为了方便Map的查找，将数组的值作为map的键，将数组索引作为map的值
    if (map.has(val)) {
      return [map.get(val), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};

console.log(twoSum([2, 3, 4, 5], 6))