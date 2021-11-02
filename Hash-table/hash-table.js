class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
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

//定义散列表类
class HashTable {
  constructor() {
    this.table = {}
  }

  //定义散列函数, 并没有冲突处理。连续传入相同的键值对，最终会存储最后输入的键值对
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

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  //将键和值加入散列表
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  //从散列表中取一个值
  get(key) {
    const ValuePair = this.table[this.hashCode(key)]
    return ValuePair == null ? undefined : ValuePair.value
  }
  //从散列表中删除一个值
  remove(key) {
    let index = this.hashCode(key);
    let ValuePair = this.table[index];
    if (ValuePair !== null) {
      delete this.table[index]
      return true
    }
    return false
  }
}



let hashtable = new HashTable();
hashtable.put('123', 123)
hashtable.put('234', 123)
hashtable.put('lqy', 123)
// console.log(hashtable);
console.log(hashtable.get('lqy')); //123
hashtable.remove('234')
console.log(hashtable);