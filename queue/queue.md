
# 队

队列是遵循先进先出的原则的一组有序的项。
这里是基于javascript对象的方式实现。

## 基本方法

```js
class Queue {
  constructor(){
    this.lowestCount = 0
    this.count = 0
    this.items = {}
  }
}  
```

### enqueue(element) 入队 
入队只需要压入 
```js
function enqueue(element){
  this.items[this.count++] = element
}

```

### dequeue() 出队

```js
function dequeue(){
  if(this.isEmpty()) return undefined
  const element = this.items[this.lowestCount]
  delete this.items[this.lowestCount]
  this.lowesetCount--
  return element
}

```

### peek() 查看队首

```js
function peek(){
   if(this.isEmpty()) return undefined
   return this.items[this.lowestCount]
}
```

### size() 查看队大小 
```js
function size(){
  return this.count - this.lowestCount
}
```

### isEmpty() 判断队是否为空
```js
function isEmpty(){
  return this.size() === 0 ?true :false
}
```

### clear() 清空队
```js 
 function clear() {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }
```
