/*
 * @Description avl树的处理
 * @Autor 朱俊
 * @Date 2021-12-23 18:24:11
 * @LastEditors 朱俊
 * @LastEditTime 2021-12-31 09:17:55
 */
import { BinarySearchTree, defaultCompare, Compare, Node } from './binarySearchTree'

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BLANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  /**获取平衡因子
   * @function getBalanceFactor
   * @param {*} node
   */
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2: return BalanceFactor.UNBALANCED_RIGHT
      case -1: return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 0: return BalanceFactor.BLANCED
      case 1: return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2: return BalanceFactor.UNBALANCED_LEFT
    }
  }

  /**求树的高度
   * @function getHeight
   */
  getHeight() {
    return this.getNodeHeight(this.root)
  }
  getNodeHeight(node) {
    if (node == null) return -1
    const height = Math.max(this.getTreeHeight(node.left), this.getTreeHeight(node.right)) + 1
    return height
  }
  /**大右旋
   * @function rotationLL
   * @param {*} node
   */
  rotationLL(node) {
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }
  /**大左旋
   * @function rotationRR
   * @param {*} node
   */
  rotationRR(node) {
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }
  /**左-右  先进行小左旋 再进行大右旋
   * @function rotationLR
   * @param {*} node
   */
  rotationLR(node) {
    // 先小右旋 再左旋
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }
  /** 右-左
   * @function rotationRL
   * @param {*} node
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }


  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key)
    } else if (this.compareFn(node.key, key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node // 重复的键
    }
    // 如果需要进行平衡操作
    // 获取平衡因子 
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // 左侧失衡
      if (this.compareFn(node.key, key) === Compare.LESS_THAN) { // 小于时 大右旋
        node = this.rotationLL(node)
      } else {
        node = this.rotationLR(node)
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // 右侧失衡
      if (this.compareFn(node.key, key) === Compare.BIGGER_THAN) { // 大于时 大左旋
        node = this.rotationRR(node)
      } else {
        node = this.rotationRL(node)
      }
    }
    return node
  }

  remove() { }

  removeNode() {
    super.removeNode(node)
  }
}