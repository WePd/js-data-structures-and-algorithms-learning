// const fibonacci = []
// fibonacci[1] = 1
// fibonacci[2] = 1
// for (let i = 3; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }
// for (let i = 1; i < fibonacci.length; i++) {
//   console.log(fibonacci[i]);
// }

//数组开头插入元素
arr = [1, 2, 3, 4, 5]
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length - 1; i >= 0; i--) {
    //将所有元素都向后移一位
    this[i + 1] = this[i]
  }
  this[0] = value
}
arr.insertFirstPosition(0)
console.log(arr);

//删除数组开头的元素
Array.prototype.removeFirstPosition = function () {
  const first = this[0]
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  this.length--
  return first
}
arr.removeFirstPosition()
console.log(arr);

//

// let index = Math.random(0, 11)
// console.log(index);