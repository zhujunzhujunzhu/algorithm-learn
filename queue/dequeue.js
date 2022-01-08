/*
 * @Description 双端队列
 * @Autor 朱俊
 * @Date 2022-01-07 21:26:32
 * @LastEditors 朱俊
 * @LastEditTime 2022-01-08 14:43:51
 */

/**
 定义头尾指针 front tail
 添加时 如果当前指针指向是没有元素 添加进入  
       如果当前指针指向是有元素 tail++|front-- 之后 添加进入 
 移除时 如果当前指针指向是没有元素的  移除失败
        如果当前指针指向是有元素 先移除之后 tail--| front++
 求长度 如果当前指向是没有元素的 为空
        如果当前指向是有元素的  tail-front +1
 */
export class DeQueue {
  constructor() {
    this.front = 0
    this.tail = 0
    this.items = {}
  }

  addFront(element) {
    if (!this.items[this.front]) this.items[this.front] = element
    else this.items[--this.front] = element
  }

  addBack(element) {
    if (!this.items[this.tail]) this.items[this.tail] = element
    else this.items[++this.tail] = element
  }


  removeFront() {
    if (this.isEmpty()) return false
    const element = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return element
  }

  removeBack() {
    if (this.isEmpty()) return false
    const element = this.items[this.tail]
    delete this.items[this.tail]
    this.tail--
    return element
  }

  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.front]
  }

  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.tail]
  }


  isEmpty() {
    if (this.size() === 0) return true
    return false
  }

  size() {
    if (this.items[this.tail] == null && this.items[this.front] == null) return 0
    return this.tail - this.front + 1
  }

  forEach(cb) {
    Object.entries(this.items).forEach(([key, value]) => {
      cb({ key, value })
    })
  }

  clear() {
    this.items = {}
    this.front = 0
    this.tail = 0
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

// dequeue.addFront(1)
// dequeue.addFront(2)
// dequeue.addBack(3)
// dequeue.addBack(4)

// console.log(dequeue.toString())


// console.log(dequeue.size())
// console.log(dequeue.peekFront())
// console.log(dequeue.peekBack())

// dequeue.removeBack()
// console.log(dequeue.toString())

// dequeue.removeFront()
// console.log(dequeue.toString())

// dequeue.removeFront()
// console.log(dequeue.toString())

// console.log(dequeue.isEmpty())

dequeue.addBack('a')
dequeue.addBack('d')
dequeue.addBack('a')
console.log(dequeue.toString())
dequeue.removeBack()
console.log(dequeue.toString())

dequeue.removeFront()
console.log(dequeue.toString())
console.log(dequeue.size())
dequeue.removeBack()
console.log(dequeue.isEmpty())

