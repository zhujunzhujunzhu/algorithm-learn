/*
 * @Description 栈的应用
 * @Autor 朱俊
 * @Date 2022-01-03 20:43:52
 * @LastEditors 朱俊
 * @LastEditTime 2022-01-03 21:14:20
 */


// 将十进制转换为二进制
import { Stack } from './stack.js'

// 十进制转换为二进制的基本的思路是 不断的除以2 然后压入到栈中 最后弹出组成数字
function decimalToBinary(decNumber) {
  let stack = new Stack()

  while (decNumber) {
    stack.push(decNumber % 2)
    decNumber = parseInt(decNumber / 2)
  }
  let s = ''
  while (!stack.isEmpty()) {
    s += stack.pop()
  }
  return parseInt(s)
}


// console.log(decimalToBinary(10))

// 将十进制转换为2-36进制内的任何进制
function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber, rem
  if (!(base >= 2 && base <= 36)) {
    return ''
  }
  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }
  let s = ''
  while (!remStack.isEmpty()) {
    s += digits[remStack.pop()]
  }
  return parseInt(s)

}

console.log(baseConverter(100345, 8))