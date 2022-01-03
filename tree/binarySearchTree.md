# 二叉搜索树
二叉搜索树是二叉树中的一种，它仅允许在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。

## 基本的方法

### search
```js
search(key){
  return this.searchNode(this.root,key)
}

searchNode(node,key){
   if(this.compareFn(node.key,key) === Compare.LESS_THAN){
       return this.searchNode(node.left,key)
   }else if(this.compareFn(node.key,key) === Compare.BIGEER_THAN){
       return this.searchNode(node.right,key)
   }else{
       return  node
   }
}

```


### remove
关于remove需要分三种情况：
1. 当前节点没有孩子节点
2. 当前节点只有一个孩子节点
3. 当前节点有两个孩子节点

::: 新思路 
如果进行分开处理的话，拿到一个节点的父节点，拿到当前节点，再加上前趋或者后继节点。
:::
```js 伪代码
const parent = getParent(key)
const node = search(key)
const nextNode = minNode(node.right)

// 一个孩子时
parent.left = node.left || node.right

// 两个孩子时  这里涉及到递归处理的
node.right = fn(node.key)
node.key = nextNode.key
```

## 求树的高度
```js
getTreeHeight(node){
  if(node == null) return -1
  return Math.max(this.getTreeHeight(node.left),
    this.getTreeHeight(node.right)
  )
} 
```