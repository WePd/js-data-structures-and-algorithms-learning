class Set {
  constructor() {
    //利用对象的形式创建集合
    this.items = {}
  }
  //判断一个元素有没有在集合中，若是在fanhuitrue，若是不在返回false
  has(element) {
    //因为使用对象创建的集合,则可以使用对象中的in来判断元素是否在集合中
    // return element in items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  //向集合中添加元素
  add(element) {
    //因为集合的特点是存储不重复的元素，则在存入之前要判断集合中有没有这个元素
    if (!this.has(element)) {
      //添加一个 element 的时候，把它同时作为键和值保存，因为这样有利于查找该元素
      this.items[element] = element;
      return true
    }
    return false
  }
  //clear
  clear() {
    this.items = {}
  }
  //删除元素
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true
    }
    //集合中没有这个元素
    return false
  }
  //size
  size() {
    return Object.keys(this.items).length
    //   let count = 0;
    //   for (let k in this.items) {
    //     if (this.items.hasOwnProperty(k)) {
    //       count++
    //     }
    //   }
    //   return count
  }
  //  
  values() {
    //利用Object内置的方法可以完成
    //Object.values()方法返回了一个包含给定对象所有属性值的数组
    // return Object.values(this.items)
    let values = []
    for (let k in this.items) {
      if (this.items.hasOwnProperty(k)) {
        values.push(k)
      }
    }
    return values
  }
  //求并集
  union(newSet) {
    //
    const maxSet = new Set()
    this.values().forEach(element => {
      maxSet.add(element)
    });
    newSet.values().forEach(element => {
      maxSet.add(element)
    })
    return maxSet
  }
  //交集
  intersection(newSet) {
    const set = new Set();
    for (let i = 0; i < this.values().length; i++) {
      if (newSet.has(this.values()[i])) {
        set.add(this.values()[i])
      }
    }
    return set
  }
  //差集
  difference(newSet) {
    const set = new Set()
    this.values().forEach(element => {
      if (!newSet.has(element)) {
        set.add(element)
      }
    })
    return set
  }
  //子集
  isSubset(newSet) {
    if (this.size() > newSet.size()) {
      //如果当前实例的元素比newSet的元素多的话就表明它不是一个子数组
      return false
    }
    let issubset = true
    this.values.every(element => {
      if (!newSet.has(element)) {
        //给每一个元素都经过判定若是不满足条件就给flase
        issubset = false;
        return false
      }
      return true
    })
    return issubset
  }
}

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
// console.log(set);//Set { items: { '1': 1, '2': 2, '3': 3 } }
// console.log(set.has(3));//true
set.delete(1)
// console.log(set);//Set { items: { '2': 2, '3': 3 } }
// console.log(set.size()); // 2
// console.log(set.values()); //[2, 3]
let set2 = new Set()
set2.add(2)
set2.add(3)
set2.add(7)
// const List = set2.union(set)
// console.log(List.values());//[ '2', '3', '5', '6', '7' ]
// const List = set2.intersection(set)
// console.log(List.values());// [ '2', '3' ]
const difference = set2.difference(set)
console.log(difference); //Set { items: { '7': '7' } }
console.log('-----------------------------------------------------------------');
//至此，集合完成2021-20-28