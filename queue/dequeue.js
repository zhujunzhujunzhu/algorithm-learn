/*
 * @Description 双端队列
 * @Autor 朱俊
 * @Date 2022-01-07 21:26:32
 * @LastEditors 朱俊
 * @LastEditTime 2022-01-07 23:09:48
 */
export class DeQueue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront(element) {
    this.items[this.lowestCount--] = element
  }

  addBack(element) {
    this.items[this.count++] = element
  }


  removeFront() {
    const element = this.items[this.lowestCount + 1]
    delete this.items[this.lowestCount + 1]
    this.lowestCount++
    if (this.size() === 1) this.clear()
    return element
  }

  removeBack() {
    const element = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    if (this.size() === 1) this.clear()
    return element
  }

  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount + 1]
  }

  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }


  isEmpty() {
    if (this.size() === 0) return true
    return false
  }

  size() {
    return this.count - this.lowestCount
  }

  forEach(cb) {
    Object.entries(this.items).forEach(([key, value]) => {
      cb({ key, value })
    })
  }

  clear() {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }

  toString() {
    let str = ''
    this.forEach(({ key, value }) => {
      str += `${key}:${value};`
    })
    return str
  }
}

const dequeue = new DeQueue()

dequeue.addFront(1)
dequeue.addFront(2)
dequeue.addBack(3)
dequeue.addBack(4)

console.log(dequeue.toString())


console.log(dequeue.size())
console.log(dequeue.peekFront())
console.log(dequeue.peekBack())

dequeue.removeBack()
console.log(dequeue.toString())

dequeue.removeFront()
console.log(dequeue.toString())

dequeue.removeFront()
console.log(dequeue.toString())

console.log(dequeue.isEmpty())