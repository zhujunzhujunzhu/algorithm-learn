# 基本介绍

链表是一种数据结构，不同于数组的是，链表中的元素在内存中并不是连续存放的。相比于数组，添加或者移除元素的是不需要移动其它元素的。

## 基本的工具方法

### push(element)
1. 当前链表为空时 `this.head === null || this.head === undefined` 
```js
if(this.head === null || this.head === undefined){
  this.head = new Node(element)
}
```
2. 当链表不为空时，找到最后一个节点
```js
let current = this.head
while(current && current.next){
  current = current.next
}
current.next = new Node(element)
```

以上两种情况分开处理，是因为如果链表为空时，是对头节点进行的是赋值操作，而链表不为空时，对最后一个节点进行的是尾指针的指向操作。

3. 压入操作成功后，链表长度需要自增

### getElementAt(position)
1. 超出边界时，返回 false
```js
if(index < 0  || index >= this.count) return false
```
2. 边界内，找到当前元素
```js
let index = 0
let current = this.head

while(current && current.next){
  if(index++ === position) break
  current = current.next
}

return current
```


### indexOf(element)
1. 如果不能够找到匹配的值，返回-1
2. 如果能够找到匹配的值，返回值的索引
```js
let current = this.head
let index = 0

let position = -1
while(current){
  if(this.equalsFn(element,current.element)){
    position = index
    break
  }
  current = current.next
  index++
}

return position
```

### insert(element,position)
1. 位置越界的处理
```js
if(position<0 || position> this.count ){
  return false
}
```
:::tip 提示
此处需要注意插入位置为`this.count`时，为尾部插入 
:::
2. 位置为0的处理
```js
if(position===0){
  const current = this.head
  this.head = new Node(element)
  this.head.next = current
}
```
3. 位置不为0时，找到前置节点

```js
const previous = this.getElementAt(position-1)
const current = previous.next

previous.next = new Node(element)
previous.next.next = current
```

:::tip 提示
 插入成功后 `this.count++`
:::




