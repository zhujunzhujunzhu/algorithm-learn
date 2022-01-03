/*
 * @Description 利用对象来实现栈
 * @Autor 朱俊
 * @Date 2022-01-03 14:56:37
 * @LastEditors 朱俊
 * @LastEditTime 2022-01-03 20:58:57
 */

export class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element) {
    this.items[this.count++] = element
  }

  pop() {
    if (this.isEmpty()) return undefined
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    // let arr = Object.entries(this.items).map(([key, value]) => {
    //   return value
    // })
    // return arr.join(',')
    return Object.values(this.items).join(',')
  }
}


// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// console.log(stack.toString())
// console.log('size', stack.size())

// // console.log(stack.peek())
// console.log(stack.pop())
// console.log('size', stack.size())
// stack.clear()
// console.log(stack.toString())

// console.log(stack.size())

// console.log(stack.isEmpty())