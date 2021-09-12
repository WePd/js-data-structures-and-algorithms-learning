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

//  var removeDuplicates = function(nums) {
//   const list = Array.from(new Set(nums))
//   nums.splice(list.length, nums.length - list.length)
//   list.forEach((el, i) => {
//       nums[i] = el
//   })
//   return nums.length
// };


/**
 *!  Array构造函数有两个ES6新增的静态方法：
 1. from()
    from() 用于将类数组结构转换为数组实例
    Array.from(item, mapFn, thisArg):
        item是一个类数组的对象，可以是任何可以迭代的结构.
        如果指定了该参数，新数组中的每个元素会执行该回调函数
        可选参数，执行回调函数 mapFn 时 this 对象
    可以对现有的数组进行浅复制
  2. of()
    Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
*/
// nums = [1,2,3,4]
// let m = Array.from(nums)
// console.log(m)
// console.log(m === nums) //false 浅复制

//! Array.from(obj, mapFn, thisArg) ===> Array.from(obj).map(mapFn, thisArg)