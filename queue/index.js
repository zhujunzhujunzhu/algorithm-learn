
import { Queue } from './queue.js'

const queue = new Queue()

queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.toString())

queue.dequeue()
console.log(queue.toString())

console.log(queue.size())
console.log(queue.peek())

queue.dequeue()
queue.dequeue()
console.log(queue.isEmpty())
queue.dequeue()
console.log(queue.size())
console.log(queue.isEmpty())