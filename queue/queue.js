export class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count++] = element
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const element = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return element
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
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

