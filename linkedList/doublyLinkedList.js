/*
 * @Description 双端链表
 * @Autor 朱俊
 * @Date 2021-12-25 16:40:34
 * @LastEditors 朱俊
 * @LastEditTime 2021-12-25 17:49:14
 */


import LinkedList from './linkedList';
import { DoublyNode } from './model'
import { defaultEqual } from './utils';

export class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEqual) {
    super(equalsFn)
    this.tail = undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      if (index === 0) {
        if (this.head == null) { // 当链表为空时
          this.head = node
          this.tail = node
        } else { // 当链表不为空时
          node.next = this.head
          this.head.prev = node
          this.head = node
        }
      } else if (index === this.count) {// 最后一位插入
        const current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index)
        const next = previous.next
        previous.next = node
        node.next = next
        next.prev = node
        node.pre = previous
      }
      this.count++

      return true
    }

    return false
  }

  removeAt(position) {
    // 这里因为remove它是使用了removeAt，在子类中重写了removeAt，那么父类中的 remove会调用的是哪个removeAt方法，我设想的是调用的是子类中的removeAt
    if (position >= 0 && position < this.count) {
      let current = this.head
      if (position === 0) {
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (position === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        current = this.getElementAt(position)
        const previous = current.prev
        const next = current.next
        previous.next = current.next
        next.prev = previous
      }
      this.count--

      return current.element
    }
    return undefined
  }
}

