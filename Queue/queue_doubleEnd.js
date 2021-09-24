class Queue{
  constructor(){
    this.count = 0;
    this.lowestCount = 0;//删除元素的数量
    this.items = {};
  }
  //队首添加新元素
  addFront(element){
    //如果添加前为空的
    if(this.isEmpty()){
      this.addBack(element)
    }else if(this.lowestCount > 0){
       this.lowestCount--;
       this.items[this.lowestCount] = element;
  }else {
    for (let i = this.count; i > 0; i--) { // {3}
      this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }
  //队尾添加新元素
  addBack(element){
    this.items[this.count] = element;
    this.count++;
  }
  
  //从队列删除元素 最先添加的也是先被移除的
  removeFront(){
    if (this.isEmpty()) return undefined;
      //暂存要删除的元素
      const result = this.items[this.lowestCount];
      //删除这个值
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
  }
  //队尾删除
  removeBack(){
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  //查看队列头元素
  peekFront(){
    if(this.isEmpty()) return undefined;
    return  this.items[this.lowestCount];
  }
  //查看队尾元素
  peekBack(){
    if(this.isEmpty()) return undefined
    return this.items[--this.count]
  }
  //检查队列是否为空
  isEmpty(){
    return this.count - this.lowestCount === 0;
  }
  //返回队列长度
  size(){
    return this.count - this.lowestCount;
  }
  //清空队列
  clear(){
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }
  //toString
  toString(){
    if(this.isEmpty()) return '';
    //先选定队首元素
    let objString = `${this.items[this.lowestCount]}`;
    //接着迭代出之后的元素
    for(let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
const dequeue = new Queue()
console.log(dequeue.isEmpty())
