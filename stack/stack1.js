// 基于数组创建一个栈

class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) return undefined
    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join(',')
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.toString())

// console.log(stack.peek())
// console.log(stack.pop())

stack.clear()
console.log(stack.toString())

console.log(stack.size())

console.log(stack.isEmpty())