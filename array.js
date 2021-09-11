//创建数组以及数组的初始化
/**
 * 1. new Array()
 * 2. []
 */
// const day0Array = new Array(
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// )

/**
 * ! 添加元素
 * 1. 添加一个元素到数组的最后位置 array.push(item)
 * 2. 在数组首位插入一个元素array.unshift(item)
 * 3. 在指定索引位置插入元素array.splice(index, 0, item)
 *    splice中间参数为0的时候是删除元素
 * 
 */
// day0Array.splice(1, 0, 'A')
// console.log(day0Array)

/**
 * ! 删除元素
 * 1. 删除数组最后的元素array.pop(item)
 * 2. 删除数组首位的元素array.shift(item)
 * 3. 删除指定索引位置的元素array.splice(start, number)
 * 
 */
// let myArray = [1, 2, 3, 4, 5]
//删除索引为3开始的连个元素
// myArray.splice(3, 2)
// console.log(myArray)

/**
 * ! 修改元素
 * 1. 修改指定索引位置的元素 array.splice(index, 1, item)
 * 2. 修改指定索引位置的几个元素 array.splice(index, number, item)
 */

//修改指定索引位置的元素
// let myArray = [1, 2, 3, 4, 5,6]
// myArray.splice(2, 1, "aasa")
// console.log(myArray)


//修改指定索引位置的几个元素
// let myArray = [1, 2, 3, 4, 5,6]
// myArray.splice(2, 2, "aasa", "ccccc")
// console.log(myArray)


/**
 * leetcode题目
 * 1. 求两数之和，并返回和目标值相同的两个数的下标
 */
//暴力解法
// var toSum = function(nums,  target){
//   for(let i = 0; i < nums.length; i ++){
//     for (let j = i + 1; j <nums.length; j ++){
//       if(nums[i] + nums[j] == target){
//         return [i, j]
//       }
//     }
//   }
// }

/**
 * 删除有序数组中的重复项
 */

 var removeDuplicates = function(nums) {
  const list = Array.from(new Set(nums))
  nums.splice(list.length, nums.length - list.length)
  list.forEach((el, i) => {
      nums[i] = el
  })
  return nums.length
};
