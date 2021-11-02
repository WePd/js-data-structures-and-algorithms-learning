//基于拉链法

//节点类
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next
  }
}


class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

//主要用来对比元素是不是相等
function Equals(a, b) {
  return a === b;
}

function dafaultToString(item) {
  if (item === null) {
    return ''
  } else if (item === undefined) {
    return undefined
  } else if (typeof item === 'string' || item instanceof string) {
    return `${item}`
  }
  return item.toString()
}

//链接类
class Linkedlist {
  constructor() {
    this.head = undefined;
    this.count = 0
  }

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

  isEmpty() {
    return this.count == 0
  }
  getHead() {
    return this.head
  }
  indexOf(element) {
    let listHead = this.head
    //对链表遍历
    for (let i = 0; i < this.count && this.head != null; i++) {
      //利用自己封装的函数比较元素是否相等
      if (Equals(element, listHead.element)) {
        //如果相对则返回索引值
        return i
      }
      //每次比较玩之后都要将比较元素赋为下一个节点的位置
      listHead = listHead.next
    }
    return -1
  }
  //remove(element)移除元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
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
}


//声明基于拉链法的冲突处理类
class hashTableSperateChaining {
  constructor() {
    this.table = {}
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = dafaultToString(key)
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37;
  }

  hasCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      //先拿到一个位置
      const position = this.hasCode(key);
      //如果这个位置还没有元素
      if (this.table[position] == null) {
        //在这个位置空间开辟链表
        this.table[position] = new Linkedlist
      }
      this.table[position].push(new ValuePair(key, value))
      return true
    }
    return false
  }

  get(key) {
    const position = this.hasCode(key);
    //先拿到key在表中的位置
    const link = this.table[position];
    //判断这个位置是否合法
    if (link != null && !link.isEmpty()) {
      //q取到这个位置链表的头
      const head = link.getHead();
      if (head.element.key === key) {
        //如果链表头的元素和我们要的key相同就返回这个节点的value
        return head.element.value
      }
      //每次比较完之后移动到下一个节点
      head = head.next;
    }
    //若是位置不合法就返回undefined
    return undefined
  }


  remove(key) {
    const position = this.hasCode(key);
    const link = this.table[position];
    if (link != null && !link.isEmpty()) {
      const head = link.getHead();
      //取到链表头
      while (head != null) {
        if (head.element.key === key) {
          //移除链表头
          link.remove(head.element)
          //删除完元素之后判端链表是否为空，若为空则删除这个节点
          if (link.isEmpty()) {
            delete this.table[position]
          }
          return true
        }
        head = head.next
      }
    }
    return undefined
  }

}

let hashTable = new hashTableSperateChaining()

hashTable.put('123', 123)
hashTable.put('123', 123)
hashTable.put('lqy', 26)
// console.log(hashTable);
// console.log(hashTable.get('lqy'))//26
// console.log(hashTable.get('lq')) //undefined
hashTable.remove('123')
console.log(hashTable);
// console.log(hashTable.get('lqy'));