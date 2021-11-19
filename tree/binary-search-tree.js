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
  //inOrderTraverse()：通过中序遍历方式遍历所有节点
  //preOrderTraverse()：通过先序遍历方式遍历所有节点
  //postOrderTraverse()：通过后序遍历方式遍历所有节点
  //min()：返回树中最小的值/键
  //max()：返回树中最大的值/键。
  //remove(key)：从树中移除某个键。

}



const tree = new binarySearchTree()
tree.insert(3)
tree.insert(2)
tree.insert(5)
console.log(tree);





