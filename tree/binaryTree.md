# 二叉树
1. 实现一棵二叉树。
2. 利用前中后序遍历可以打印出来。
3. 利用中序与前序反向推导出二叉树。


## 层次遍历实现二叉树构建
这里我认为是有两个技巧。
首先利用队来进行当前构建节点的维护。
再一个就是利用引用，保证队与实际的构建树的联系的，否则的话，我是需要去在树中去找到对应的节点的。
```js
function create(nodes){
  if(!nodes || nodes.length === 0)  return null
  let head = {val:nodes[0]}
  let queue = [head]
  let tree = head

  for(let index=1;index<nodes.length;index++){
    let node = nodes[index]
    queue.push(node)
    if(queue[0] && queue[0].left && queue[0].right){
      queue.shift()
    }
    queue[0].right && queue[0].left = node
    queue[0].left && queue[0].right = node

  }
  return tree
}

```

## 二叉树遍历 
1. 前序 
2. 中序
3. 后序   这三种利用递归很容易实现

```js  前序遍历
function prePrint(node,result){
  if(!node) return result
  result.push(node.val)
  prePrint(node.left,result)
  prePrint(node.right,result)
  return result
}
```

4. 层次

```js
function levelPrint(){
  let queue = []
  let index = 0
  queue[index] = this.binaryTree
  while(queue[index]){
    if(queue[index].left){
      queue.push(queue[index].left)
    }
    if(queue[index].right){
      queue.push(queue[index].right)
    }
    index++
  }

  console.log(queue.map(it=>it.val))
}

```
