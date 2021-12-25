
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
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  /**中序遍历 
   * @function inOrderTraverse
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  /**前序遍历 
   * @function preOrderTraverse
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**后序遍历
   * @function postOrderTraverse
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node)
    }
  }

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


  /**移除节点
   * @function remove
   * @param {*} key
   */
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

console.log('前序：')
bst.preOrderTraverse((node) => {
  console.log(node.key)
})
console.log('----------------------')
console.log(bst.search(7))
console.log(bst.search(10))