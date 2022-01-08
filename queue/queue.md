
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

## 双端队列
### 实现思路 
 1. 定义头尾指针 front tail
 2. 添加时 如果当前指针指向是没有元素 添加进入  
       如果当前指针指向是有元素 tail++|front-- 之后 添加进入 
 3. 移除时 如果当前指针指向是没有元素的  移除失败
        如果当前指针指向是有元素 先移除之后 tail--| front++
 4. 求长度 如果当前指向是没有元素的 为空
        如果当前指向是有元素的  tail-front+1
### 头部添加
```js
function addFront(element){
  if(!this.items[this.front]){
    this.items[this.front] = element
  }else{
    this.items[--this.front] = element
  }
}

```
### 尾部添加
```js
function addBack(element){
  if(!this.items[this.tail]){
    this.items[this.tail] = element
  }else{
    this.items[++this.tail] = element
  }
}
```

### 头部移除
```js
function removeFront(){
  if(this.isEmpty()) return false
  const element = this.items[this.front]
  delete this.items[this.front]
  this.front --
  return element
}
```

### 尾部移除
```js
function  removeBack() {
    if(this.isEmpty()) return false
    const element = this.items[this.tail]
    delete this.items[this.tail]
    this.tail--
    return element
  }
```

### 求大小
```js
function size(){
  if (this.items[this.tail] == null && this.items[this.front] == null) return 0
  return this.tail - this.front + 1
}
```

## 应用

### 击鼓传花游戏
```js
let elimitatedList = []
while(queue.size()>1){
   for(let i=0, len=queue.length;i<len;i++){
     queue.enqueue(queue.dequeue())
   }
   elimitatedList.push(queue.dequeue())
}
```


### 回文检查器
1. 将干扰字符清除，我们这里只清除空格
2. 将字符入双端队列
3. 不断将前端出队值 `dequeue.removeFront()` 与  后端出队值`dequeue.removeBack()`进行比较，当出现不一致时,说明不是回文。

核心代码：
```js
 const dequeue = new Dequeue()
 ...
 let flag = true
 while(dequeue.size()>1){
   if(dequeue.removeBack() !== dequeue.removeFront()){
      flag = false
      break
   } 
 }
```