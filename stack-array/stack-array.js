/**
 * 栈是一个运算受限的线性表
 * 只允许在栈一端进行插入和删除操作
 * ! 特点： 先进后出， 后进先出
 * 程序中的栈结构：
 *  1. 函数调用栈
 *  2. 递归 
 *  3. 浏览器的历史记录
 */
//创建一个基于数组的栈
class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length - 1]
  }
  isEmpty(){
    return this.items.length === 0
  }
  clear(){
    this.items = []
  }
  size() {
    return this.items.length;
    }
}
  
const stack = new Stack();
console.log(stack.isEmpty())//true
stack.push(1);
stack.push(2);
console.log(stack.peek())//2
console.log(stack.size())

 