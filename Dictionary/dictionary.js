class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}


/**
 * 理想情况下，在字典中的键都应该为字符串，但是javascrit不是强类型的语言，不能保证所有的键都是字符串
 * 所以我们需要一个将作为键传入的对象转化为字符串。
 * @param {*} item 
 * @returns 
 */
//转化为字符串
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

//定义字典类
export default class Dictionary {
  constructor() {
    //会将元素存储在一个Object实例中而不是数组。
    this.table = {};
  }
  //hasKey()检测一个键是否存在于字典中
  hasKey(key) {
    return this.table[dafaultToString(key)] != null
  }
  // set()在字典和 ValuePair 类中设置键和值，可以添加新的值或者修改已有的值
  set(key, value) {
    if (key != null && value != null) {
      //创建一个
      const tablekey = dafaultToString(key);
      this.table[tablekey] = new ValuePair(key, value)
    }
    return false
  }

  /**
   * 
   * @returns objString
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }

  //移除字典中的一个值。
  remove(key) {
    //首先判断字典中有没有这个key
    if (this.hasKey(key)) {
      let keyValue = this.table[dafaultToString(key)];
      delete this.table[dafaultToString(key)];
      return keyValue;
    }
    return false
  }
  //根据键查看在字典中的值
  get(key) {
    const valuePair = this.table[dafaultToString(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  //valuePairs  会以数组形式返回字典中的所有 valuePair 对象
  valuePairs() {
    //利用Object.values内置方法完成
    // return Object.values(this.table)

    //另一种实现方法
    let valuePairs = [];
    for (const i in this.table) {
      //为了保证key存在
      if (this.hasKey(i)) {
        valuePairs.push(this.table[i])
      }
    }
    return valuePairs
  }

  //以数组返回字典中的所有键
  keys() {
    // return this.valuePairs().map(valuePairs => valuePairs.key)

    let keys = [];
    for (let i = 0; i < this.valuePairs().length; i++) {
      keys.push(this.valuePairs()[i].key)
    }
    return keys
  }

  forEach(fn) {
    const valuePairs = this.valuePairs();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = fn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

}


// let dic = new Dictionary()
// dic.set('wohqq', 'tis')
// dic.set('hahahah1', 2)
// dic.set('hahah2', 2)
// dic.set('hahah3', 3)
// // console.log(dic.hasKey('wohqq'));
// dic.remove('hahah3')
// // console.log(dic);
// // console.log(dic.get('hahah2')); //ValuePair { key: 'hahah2', value: 2 }
// // console.log(dic.valuePairs());
// // console.log(dic.keys());
// dic.forEach((k, v) => {
//   console.log('forEach:', `key: ${k}, value: ${v}`);
// })

// console.log('------------------------------------------------------------------');
//至此，字典完成2021-11-1