栈是一个运算受限的线性表
  只允许在栈一端进行插入和删除操作
  特点： 先进后出， 后进先出
  程序中的栈结构：
    1. 函数调用栈  
    2. 递归 
    3. 浏览器的历史记录

#### 创建一个基于数组的栈
```js
class Stack {
  constructor() {
    this.items = []
  }
}
```
栈的常见操作：
  1. push():添加元素
  2. pop(): 出栈
  3. peek(): 返回栈顶的元素，不会对栈做任何修改
  4. isEmpty()：如果栈中没有元素就返回true, 否则返回false
  5. size(): 返回栈里的元素个数，
  6. toString(): 将栈结构的内容以字符串的形式返回 
  7. clear():移除栈里面的所有元素

接着就可以分别实现每个方法：
1. 向栈里面添加元素(也就是栈的栈顶，也就是一战的末尾)
 ```js
push(element) {
    this.items.push(element)
  }
```
2. 移除元素
```js
pop(){
  return this.items.pop()
}
```
3. 查看栈顶元素
```js
seek(){
    return this.items[this.items.length - 1]
  }
```
4. 检查栈是否为空
```js
isEmpty(){
    return this.items.length === 0
  }
```
5. 清空元素
```js
clear(){
    this.items = []
  }
```

#### 创建一个基于Javascript对象的stack类






