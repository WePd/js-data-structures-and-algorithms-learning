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

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

//定义基于线性探测法的hash类
class hashTbaleLinerProbing {
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
  //向表中添加键和值
  put(key, value) {
    if (key != null && value != null) {
      //获取位置
      const position = this.hasCode(key);
      //若在表中的这个位置为空，就将键值对存入这个位置
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value)
      } else {
        //这个位置已经其他元素占据了，开始向下一位找
        let index = position + 1;
        //一直重复寻找，直到找到一个空着的位置。
        while (this.table[index] != null) {
          index++
        }
        //存入
        this.table[index] = new ValuePair(key, value)
      }
      return true
    }
    return false
  }

  //获取元素
  get(key) {
    const position = this.hasCode(key);
    if (this.table[position] != null) {
      //如果这个位置正好就是这个key值就返回value
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1;
      //继续向下寻找
      while (this.table[index] != null && this.table[index] != key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value
      }
    }
    //key值不在哈希表中
    return undefined
  }
  remove(key) {
    const position = this.hasCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        //s删除这个元素之后可能还是会出现冲突。
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        //处理可能出现的冲突
        this.verifyRemoveSideEffect(key, position)
        return true
      }
    }
    return false
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hasCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}


let hashTable = new hashTbaleLinerProbing()
hashTable.put('lqy', 25)//'9': ValuePair { key: 'lqy', value: 25 },
hashTable.put('lqy', 25)// '10': ValuePair { key: 'lqy', value: 25 },
hashTable.put('wpd', 26)// '35': ValuePair { key: 'wpd', value: 25 }
hashTable.put('wawawa', 6)// '35': ValuePair { key: 'wpd', value: 25 }
// console.log(hashTable)
// console.log(hashTable.get('lqy')) //25
// console.log(hashTable.get('wpd')) // 26
hashTable.remove('wawawa')
console.log(hashTable)
console.log('------------------------------------------------------------')
//至此 基于线性探测法的hash表完成
