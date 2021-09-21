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
//斐波那契数
// const result = [];
// result[1] = 1;
// result[2] = 1;
// for(let i = 3; i < 20; i++){
//   result[i] = result[i - 1] + result[i - 2];
// }
// //遍历数组
// for(let i = 1; i < result.length; i++){
//   console.log(result[i])
// }


/**
 * ! 添加元素
 * 在javascript中，数组是一个可以修改的对象。如果添加元素，它会动态增长。在其他语言中，只能重新再新建一个数组。
 * 1. 添加一个元素到数组的最后位置 array.push(item)
 * 2. 在数组首位插入一个元素array.unshift(item)实现方法如下：
 * 3. 在指定索引位置插入元素array.splice(index, 0, item)
 *    splice中间参数为0的时候是删除元素
 * 
 */

//? unshift方法的实现类似
// 就是将所有的元素向右移，然后再将数组索引为0的位置填入要插入的元素。
// Array.prototype.insertFirstPosition = function(value) {
//   //将所有元素向后移
//   for(let i = this.length; i >= 0; i--){
//     this[i] = this[i -1];
//   }
//   this[0] = value;
// }

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
 * ! 在任意位置添加或者删除元素
 * 1. 修改指定索引位置的元素 array.splice(index, 1, item)
 * 2. 修改指定索引位置的几个元素 array.splice(index, number, item)
 */

//splice(num1, num2)
// splice(a, b)作用是删除用索引5开始之后的三个元素

//修改指定索引位置的元素，当splice(a, b, c)中间的参数为0的时候是插入元素的，若中间参数为非0则为删除元素。
// let myArray = [1, 2, 3, 4, 5,6]
// myArray.splice(2, 1, "aasa")
// console.log(myArray)


//修改指定索引位置的几个元素
// let myArray = [1, 2, 3, 4, 5,6]
// myArray.splice(2, 2, "aasa", "ccccc")
// console.log(myArray)

// !数组合并可以使用concat方法
// !every():会迭代数组中的每个元素，直到返回false
//! 与every()方法相反，some迭代数组的每个元素，直到函数返回true
//! 如果要迭代整个数组，可以用 forEach 方法。它和使用 for 循环的结果相同
//! map, filter都会返回新数组。
//! reduce(): 接受四个参数，previousValue、currentValue、[index] 和 [array]。返回的是一个叠加值。若是数组元素求和可以使用。

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
  // 3. entries、keys和values
  // enteries返回的是包含entries 方法返回包含键值对的@@iterator
  // keys 方法返回包含数组索引的@@iterator
  // values 方法返回的@@iterator 则包含数组的值
  nums = [1,2,3,4,5,6]
  //返回有迭代器的完整键值对
  // let num = nums.entries()
  //返回包含迭代器的键值
  // let num = nums.keys()
  //在输出的是时候首先要执行next()方法以激活迭代器
  // console.log(num.next().value)~
  // console.log(num.next())
  // console.log(num.next())

//! Array.from(obj, mapFn, thisArg) ===> Array.from(obj).map(mapFn, thisArg)

// 搜索有两个方法：indexOf()返回与参数匹配的第一个元素的索引。 lastIndexOf()返回的是与参数匹配的最后一个元素的索引。
// ES6新增方法
    // find()和findIndex()接收一个回调函数，搜索一个满足函数条件的值
    // 不同的是：find()返回的是第一个满足条件的值，而findIndex()返回的则是这个值在数组里面的索引。如果都没有满足条件，find返回undefine
    // findIndex()返回-1
// 如果要判断在数组中是否总在某个元素，则可以使用includes()方法，存在就返回true,反之false
//! 输出为字符串
// 两个方法： toString()将数组输出为一个字符串。若是想用不同的分隔符把元素隔开，可以使用join()方法