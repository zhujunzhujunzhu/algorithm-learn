
// 创建BinarySearchTree类
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}


const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if (a === b) return 0
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}


class BinarySearchTree {
  constructor(compare = defaultCompare) {
    this.compareFn = compare
    this.root = null
  }


  /**插入
   * @function insert
   * @param {*} key
   */
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }


  /**搜索
   * @function search
   * @param {*} key
   */
  search(key) { }

  /**中序遍历 
   * @function inOrderTraverse
   */
  inOrderTraverse() {

  }

  /**前序遍历 
   * @function preOrderTraverse
   */
  preOrderTraverse() { }

  /**后序遍历
   * @function postOrderTraverse
   */
  postOrderTraverse() { }

  /**求最小值 
   * @function min
   */
  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  /**求最大值 
   * @function max
   */
  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  remove(key) { }
}


const bst = new BinarySearchTree()
bst.insert(5)
bst.insert(7)
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(6)


console.log(bst.min().key)

console.log(bst.max().key)