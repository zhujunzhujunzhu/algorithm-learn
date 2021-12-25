/*
 * @Description 
 * @Autor 朱俊
 * @Date 2021-12-24 21:06:09
 * @LastEditors 朱俊
 * @LastEditTime 2021-12-25 17:49:45
 */

import { defaultEqual } from "./utils.js";
import { Node } from './model.js'

export default class LinkedList {
  constructor(equalsFn = defaultEqual) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  /**向链表尾部添加元素
   * @function push
   * @param {*} element
   */
  push(element) {
    const node = new Node(element)

    if (this.head === undefined || this.head === null) { // 当链表为空时
      this.head = node
    } else {
      let current = this.head
      while (current && current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }


  /**通过索引获取元素
   * @function getElementAt
   * @param {*} index
   */
  getElementAt(index) {
    // 进行边界的一个判断
    if (index >= 0 && index < this.count) {
      let i = 0
      let current = this.head
      while (current) {
        if (index === i) break
        i++
        current = current.next
      }
      return current
    }
    return false
  }

  /**通过索引移除元素
   * @function removeAt
   * @param {*} position
   */
  removeAt(position) {
    if (position >= 0 && position < this.count) {
      let current = this.head
      if (position === 0) {
        this.head = this.head.next
        this.count--
      } else {
        const previous = this.getElementAt(position - 1)
        previous.next = current.next
        this.count--

        current = previous.next
      }

      return current.element
    }
    return undefined
  }


  /**获取元素索引
   * @function indexOf
   * @param {*} element
   */
  indexOf(element) {
    let current = this.head
    let index = 0
    let position = -1
    while (current) {
      if (this.equalsFn(element, current.element) === true) {
        position = index
        break
      }
      index++
      current = current.next
    }
    return position
  }

  insert(element, position) {
    if (position >= 0 && position <= this.count) {
      let previous = null
      const node = new Node(element)
      if (position === 0) {
        const current = this.head
        this.head = node
        node.next = current
      } else {
        previous = this.getElementAt(position - 1)

        const current = previous.next
        previous.next = node
        node.next = current
      }

      this.count++
      return true
    }
    return false
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  toString() {
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.element)
      current = current.next
    }

    console.log(`string: ${arr.join(',')}`)
  }

  getHead() {
    return this.head
  }
}




const linkedList = new LinkedList()

linkedList.push(1)
linkedList.push(2)
linkedList.push(3)


linkedList.toString()


console.log(linkedList.getElementAt(1).element)

// console.log(linkedList.removeAt(0))
// console.log(linkedList.removeAt(2))
// console.log(linkedList.removeAt(1))
// linkedList.toString()

// console.log(linkedList.indexOf(3))

// console.log(linkedList.remove(3))

// linkedList.toString()

linkedList.insert(4, 2)

linkedList.toString()