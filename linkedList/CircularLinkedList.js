//主要用来对比元素是不是相等
function Equals(a, b) {
  return a === b;
}

//c创建节点类
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

//创建循环链表类
class CircularLinkedList {
  constructor() {
    this.head = undefined;
    this.count = 0
  }
  //链表添加元素
  push(element) {
    //创建节点
    const node = new Node(element)
    //若为空链表
    if (this.head == null) {
      this.head = node
    } else {
      //找到最后一个元素
      let index = this.getElementAt(this.size() - 1)
      index.next = node
    }
    //最后一个节点的next指向头部
    node.next = this.head
    this.count++
  }
  //在任意位置插入元素
  insert(element, index) {
    //首先判断有没有月越界
    if (index >= 0 && index <= this.count) {
      //创建节点
      let node = new Node(element)
      //接着判断插入位置
      //如果索引为0
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          //将新节点的尾部指向链表头部
          node.next = this.head;
        } else {
          //添加到一个非空的循环链表
          node.next = this.head;
          this.head = node
          //在将新节点的next指向this.head之后还要保障更新之后的链表尾部元素重新指向新头部
          let last = this.getElementAt(this.size() - 1)
          last.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next;
        previous.next = node
      }
      this.count++;
      return true
    }
    return false
  }
  //获取索引位置元素
  getElementAt(index) {
    //首先判断索引是否越界
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return false
  }
  //获取链表长度
  size() {
    return this.count
  }
  //判断链表是否为空
  isEmpty() {
    return this.size() === 0
  }
  //清空链表
  clear() {
    this.count = 0;
    this.head = undefined
  }
  //从任意位置移除元素
  removeAt(index) {
    //判断有没有越界
    if (index >= 0 && index < this.count) {
      let removed = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          //如果长度正好唯一，则直接令this.head =undefined
          this.head = undefined
        } else {
          let head = this.head
          let last = this.getElementAt(this.size() - 1)
          this.head = this.head.next;
          //尾部指向头部
          last.next = this.head;
          this.head.next = this.head;
          removed = head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        removed = previous.next;
        previous.next = previous.next.next;
      }
      this.count--;
      return removed.element
    }
    return undefined
  }
  //获取元素索引,找到返回索引找不到返回-1
  indexOf(element) {
    let listHead = this.head;
    for (let i = 0; i <= this.size() && this.head != null; i++) {
      if (Equals(element, listHead.element)) {
        return i
      }
      listHead = listHead.next
    }
    return -1
  }
  //移除元素
  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
}

let circulinklist = new CircularLinkedList()
circulinklist.insert(1, 0)
circulinklist.insert(2, 1)
// console.log(circulinklist);
// console.log(circulinklist.getElementAt(0));
// console.log(circulinklist.size());//2
// console.log(circulinklist.isEmpty());//false
circulinklist.push(3)
// console.log(circulinklist);
// console.log(circulinklist.getElementAt(2));
console.log(circulinklist.removeAt(2)) //3
// console.log(circulinklist.getElementAt(5));//false
console.log(circulinklist.indexOf(0));//-1
console.log(circulinklist.indexOf(1));//0
console.log(circulinklist.remove(1)); //1
console.log(circulinklist);

console.log('--------------------------------------------------------');
//至此，循环链表完成 2021-10-27