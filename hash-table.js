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

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = dafaultToString(key)
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  //定义散列函数
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  //put
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value)
    }
  }
}