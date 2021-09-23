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

//将十进制转化为二进制
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';
  while (number > 0) { 
    rem = Math.floor(number % 2); 
    remStack.push(rem); 
    number = Math.floor(number / 2); 
}
  while (!remStack.isEmpty()) { 
    binaryString += remStack.pop().toString();
}
  return binaryString;
}
  console.log(decimalToBinary(2))