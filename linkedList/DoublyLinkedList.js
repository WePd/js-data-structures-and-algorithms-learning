//主要用于判断元素是否相等
function Equals(a, b) {
  return a === b;
}

//节点类
class DoublyNode {
  constructor(element, next, pre) {
    this.element = element;
    this.next = next;
    this.pre = pre
  }
}

//双向链表类
class DoublyLinkedList {
  constructor() {
    this.head = undefined;
    this.count = 0;
    this.tail = undefined;
  }
  //链表的大小
  size() {
    return this.count
  }
  //清空链表
  clear() {
    this.count = 0
    this.head = undefined;
    this.tail = undefined;
  }
  //获取链表头部元素
  getHead() {
    return this.head
  }
  //获取尾部
  getTail() {
    return this.tail
  }
  //向尾部添加元素
  push(element) {
    const node = new DoublyNode(element)
    if (this.head == null) {
      //向空链表中添加
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.pre = this.tail;
      //将添加的元素作为新表尾
      this.tail = node;
    }
    this.count++
  }
  //getElement获取元素位置索引
  getElementAt(index) {
    //同样的先判断有没有越界
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      //从链表开始循环直到index
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    //若是越界返回undefined
    return "这是一个无效的索引"
  }
  //在任意位置插入元素
  insert(element, index) {
    //首先判断有没有越界
    if (index >= 0 && index <= this.count) {
      //创建节点
      const node = new DoublyNode(element);
      //如果index为0
      if (index === 0) {
        //判断链表是否为空
        if (this.head == null) {
          this.head = node;
          this.tail = node
        } else {
          node.next = this.head;
          this.head.pre = node;
          this.head = node;
        }
        //在尾部添加
      } else if (index === this.count) {
        //获取到尾部
        this.tail.next = node;
        node.pre = this.tail;
        //更新尾部,让尾部指向新加入的节点
        this.tail = node
      } else {
        //在中间位置插入元素
        //取到要插入节点的前一个元素
        const previous = this.getElementAt(index - 1)
        node.next = previous.next;
        previous.next = node;
        previous.next.pre = node;
        node.pre = previous
      }
      this.count++;
      return true
    }
    return false
  }
  // 从任意位置删除元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        //删除表头元素
        this.head = this.head.next
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.pre = undefined;
        }
      } else if (index === this.count - 1) {
        //删除最后一项
        this.tail = this.tail.pre;
        this.tail.next = undefined
      } else {
        var del = this.getElementAt(index);
        console.log(del);
        //比较绕
        del.pre.next = del.next;
        del.next.pre = del.pre
      }
      this.count--;
      return del
    }
    return false
  }
  // indexOf()获取元素的索引位置，查找不到则返回-1
  indexOf(element) {
    //这个地方判定的时候要注意最后一个尾元素指向null
    for (let i = 0; i < this.count && this.head != null; i++) {
      if (Equals(element, this.head.element)) {
        return i
      }
      this.head = this.head.next
    }
    return -1
  }
  //转化为字符串
  toString() {
    //判断是否为空
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let objNext = this.head.next
    while (objNext != null) {
      objString = `${objString}, ${objNext.element}`;
      //控制变量向后移
      objNext = objNext.next;
    }
    return objString
  }
}


let dblList = new DoublyLinkedList()
dblList.insert(1, 0)
dblList.insert(2, 1)
// console.log(dblList);
// console.log(dblList.indexOf(1));// 0
// console.log(dblList.indexOf(2));// 1
// console.log(dblList.indexOf(22));// -1
dblList.push(3)
dblList.push(4)
dblList.push(5)
// console.log(dblList);//count = 5
// console.log(dblList.removeAt(0));
dblList.removeAt(2)
// console.log(dblList);
console.log(dblList.toString());// 1 2 4 5
console.log('---------------------------------------------------');
//至此双向链表完成 2021-10-26