class Stack{
  constructor(){
    this.count = 0;
    this.items = {}
  }
  //每次只能插入一个元素
  push(element){
    this.items[this.count] = element;
    this.count++;
  }
  //判断一个栈的大小
  size(){
    return this.count
  }
  //p判断一个栈是否为空
  isEmpty(){
    return this.count === 0
  }
  //从栈中弹出元素
  pop(){
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  //查看栈顶元素
  peek(){
    if(this.isEmpty()) return undefined
    return this.items[--this.count]
  }
  //清空栈
  clear(){
    this.items = {};
    this.count = 0
  }
  //toString方法
  toString(){
    if(this.isEmpty()) return '';
    //用栈底部的值做初始值
    let objString = `${this.items[0]}`;
    //跌打栈的键，直到栈顶。
    for(let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
stack.push(3)
stack.push(5)
// console.log(stack)//Stack { count: 2, items: { '0': 3, '1': 5 } }
// console.log(stack.size())//2
// console.log(stack.isEmpty())//false
// stack.pop()
console.log(stack)
// console.log(stack.peek())//5
console.log(stack.toString())//3, 5
