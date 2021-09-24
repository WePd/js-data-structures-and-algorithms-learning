class Queue{
  constructor(){
    this.count = 0;
    this.lowestCount = 0;//删除元素的数量
    this.items = {};
  }
  //添加新元素
  enQuene(element){
    //先添加元素然后再将count加1
    this.items[this.count] = element;
    this.count++;
  }
  //从队列删除元素 最先添加的也是先被移除的
  deQueue(){
    if (this.isEmpty()) return undefined;
    //暂存要删除的元素
    const result = this.items[this.lowestCount];
    //删除这个值
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  //查看队列头元素
  peek(){
    if(this.isEmpty()) return undefined;
    return  this.items[this.lowestCount];
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
// const queue = new Queue();
// console.log(queue.lowestCount)
// // console.log(queue.isEmpty())
// queue.enQuene(2)
// console.log(queue.lowestCount)
// queue.enQuene(3)
// console.log(queue.lowestCount)
// queue.enQuene(35)
// queue.enQuene(22)
// queue.deQueue();
// console.log(queue.lowestCount)
// // console.log(queue.size())
// // console.log(queue.peek())
// // console.log(queue.toString())
// queue.clear()
// console.log(queue.lowestCount)
// console.log(queue)//Queue { count: 0, lowestCount: 0, items: {} }
// console.log(queue.isEmpty())//true
// console.log(queue.size())//0
