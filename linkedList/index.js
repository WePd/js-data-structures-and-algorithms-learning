const { node } = require("webpack");

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = undefined;
    this.count = 0
  }
  //清除链表元素
  clear() {
    this.count = 0;
    this.head = undefined
  }
  //尾部添加元素
  //肯会有两种情况，一是链表为空，另一种是链表不为空，在尾部添加元素
  push(element) {
    const node = new Node(element);
    let current;
    //如果head为null或者undefined,就需要让head指向node 元素。
    if (this.head == null) {
      this.head = node
    } else {
      //如果链表不为空。
      current = this.head;
      //要先找到链表尾部，需要循环，当current.next为null或者undefined的时候知道到表尾了
      //链表最后一个节点的下一个元素始终是 undefined 或 null。
      while (current.next != null) {
        current = current.next
      }
      //指向下一个节点
      current.next = node
    }
    this.count++
  }
  //根据特定位置删除元素, 并返回删除的元素
  removeAt(index) {
    //首先判断y有没有越界
    if (index >= 0 && index < this.count) {
      let current = this.head
      //删除第一个元素
      if (index === 0) {
        this.head = current.next;
      } else {
        //删除的是其他位置的元素
        //1. 取得要删除索引的前一个元素
        const previous = this.getElementAt(index - 1)
        //要删除的元素节点
        //右边为要删除节点的下一个节点
        //接着将要删除节点的next指向下下个节点，把要删除的节点排除
        current = previous.next
        previous.next = current.next
      }
      //链表数量-1
      this.count--
      //返回要删除节点的元素值
      return current.element
    }
    return '这是一个无效的索引'
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
  //任意位置插入元素
  insert(index) {
    //首先也是先判断有没有越界
    if (index >= 0 && index <= this.count) {
      //创建一个插入元素的节点
      let node = new Node(element)
      //插入到第一个位置
      if (index === 0) {
        node.next = this.head
        this.headt = node
      }
      //获取要插入索引的前一个节点
      let first = this.getElementAt(index - 1);

    }
    return '这是一个无效的索引'
  }
}

let list = new LinkedList()
list.push(2)
list.push(3)
list.push(9)
list.push(9)
list.push(9)
console.log(list);
console.log(list.removeAt(0))
console.log(list)
