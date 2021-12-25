/*
 * @Description 
 * @Autor 朱俊
 * @Date 2021-12-24 21:09:36
 * @LastEditors 朱俊
 * @LastEditTime 2021-12-24 21:10:28
 */

export class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

export class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}