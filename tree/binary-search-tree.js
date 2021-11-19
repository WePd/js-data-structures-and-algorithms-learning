// const { node } = require("webpack");

//二叉搜索树节点类
class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return '${this.key}'
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
//比较节点值大小
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

//二叉搜索树结构类
class binarySearchTree {
  constructor(compare = defaultCompare) {
    this.compare = compare //比较节点值
    this.root = null // 根节点
  }
  //insert() 向书中插入新键
  insert(key) {
    //若是树为空，就讲这个键作为根
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      //其他情况比较复杂,利用辅助函数
      this.insertNode(this.root, key)
    }
  }
  //需要比较大小，左小右大
  insertNode(node, key) {
    if (this.compare(key, node.key) === Compare.LESS_THAN) {
      //key值小于节点值
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  //search() 在树中查找一个键， 若是有的话返回rue, 若是不存在返回false
  search(key) {
    return searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) retrun false
    //和根节点比较
    if (this.compare(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compare(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  //inOrderTraverse()：通过中序遍历方式遍历所有节点
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  //preOrderTraverse()：通过先序遍历方式遍历所有节点
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  //postOrderTraverse()：通过后序遍历方式遍历所有节点
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  //min()：返回树中最小的值/键
  //在二叉搜索树中， 因为左小右大的关系， 可以顺着左子树的左子树找下去
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let current = node;
    //直到没有左子树为止
    while (current != null && current.left != null) {
      current = current.left
    }
    return current
  }
  //max()：返回树中最大的值/键。
  max() {
    return node => {
      let current = node
      while (node != null && current.right != null) {
        current = current.right
      }
      return currnet
    }
  }
  //remove(key)：从树中移除某个键。
  //对于移除一个节点的情况比较复杂， 这个节点可能是叶节点 也可能是左子树节点 或者右子树节点， 还可能是有两个子节点的节点
  //! 稍后再实现
}



const tree = new binarySearchTree()
tree.insert(3)
tree.insert(2)
tree.insert(5)
console.log(tree);
const printNode = (value) => console.log(value); //定义回调函数
tree.inOrderTraverse(printNode) // 2 3 5
tree.preOrderTraverse(printNode) // 3 2 5
tree.min() // 2
tree.max() // 5








