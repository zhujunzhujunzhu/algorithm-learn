
import { Queue } from './queue.js'

import { DeQueue } from './dequeue.js'

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


function hotPotato(elementList, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}

// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
// const result = hotPotato(names, 7)

// result.eliminated.forEach(name => {
//   console.log(`${name}被淘汰！`)
// })

// console.log(`胜利者：${result.winner}`)

// 回文检查器实现
function palindromeChecker(aString) {
  if (aString === undefined || aString === null) return false // 边界处理

  const dequeue = new DeQueue() // 双端队列
  const str = aString.split(' ').join('') // 去空格

  // 1个字符不算回文
  if (str.length === 1) return false
  for (let i = 0, len = str.length; i < len; i++) {
    dequeue.addBack(str.charAt(i))
  }
  let flag = true
  while (dequeue.size() > 1) {
    if (dequeue.removeBack() !== dequeue.removeFront()) {
      flag = false
      break
    }
  }
  console.log(`${aString} ${flag ? '是' : '不是'}回文！`)
  return flag
}
palindromeChecker('ada')
palindromeChecker('adaa')
palindromeChecker('aadaa')
palindromeChecker('adaa')
palindromeChecker('cccbcccb')
palindromeChecker('cccbccc')
