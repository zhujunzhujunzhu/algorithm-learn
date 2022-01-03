
// 创建BinarySearchTree类
export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}


export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

export function defaultCompare(a, b) {
  if (a === b) return 0
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}


export class BinarySearchTree {
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
  remove(key) {
    return this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left == null && node.right == null) { // 当没有孩子节点
        node = null
        return node
      } else if (node.left) { // 当有一个孩子节点
        node = node.left
        return node
      } else if (node.right) {
        node = node.right
        return node
      } else { // 当有两个孩子节点
        // 找到当前的前趋或者后继，这里找后继 将后继节点替换成当前节点，这样的话再进行一次当前节点的操作
        const aux = this.minNode(node.right)
        node.key = aux.key
        node.right = this.removeNode(node.right, aux.key)
        return node
      }
    }
  }

  /**求树的高度
   * @function getHeight
   */
  getHeight() {
    return this.getTreeHeight(this.root)
  }

  getTreeHeight(node) {
    if (node == null) return -1
    const height = Math.max(this.getTreeHeight(node.left), this.getTreeHeight(node.right)) + 1
    return height
  }
}

/**
  remove(key) {
    const node = this.search(key)
    const _node = node
    if(!node) return 
    if(node.left && node.right){ // 存在有两个孩子节点时
      
    }else if(node.left || node.right){ // 存在有一个孩子节点时
        const parent =  null// 这里发现没有办法找到父节点
        parent.left = node.left || node.right
    }else{ // 当没有孩子节点时
       node = null // 直接删除 但是此时是没有引用关系的 因此这个必须是需要在递归里面去做的
    }

    return _node
  }

  关于这里的基本的
 */


const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
// bst.insert(3)
// bst.insert(5)
// bst.insert(8)
// bst.insert(7)


console.log(bst.min().key)

console.log(bst.max().key)
// console.log(bst.remove(7))
console.log('前序：')
bst.preOrderTraverse((node) => {
  if (node) console.log(node.key)
})
console.log('----------------------')
// console.log(bst.search(7))
// console.log(bst.search(10))

console.log('树的高度：', bst.getHeight())

console.log(bst.remove(7))