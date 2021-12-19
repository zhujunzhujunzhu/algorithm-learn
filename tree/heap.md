# 堆
它的作用可以用来维护最值。


## 插入
插入的基本的过程，是先将节点压入到堆的最后位置，然后不断向上调整。
调整的过程是，（大顶堆）当遇到比它小的父结点时，进行交换后，进行递归操作。
```js

/**添加节点
 * @function insertHeap
 * @param {*} node
 * @param {*} heap
 */
function insertHeap(node, heap) {
  heap.push(node)
  //  不断向上调整
  adjust(node, heap.length - 1, heap)
}

/** 不断向上调整
 * @function adjust
 * @param {*} node
 * @param {*} index
 * @param {*} heap
 */
function adjust(node, index, heap) {
  const parentIndex = getParent(index)
  if (parentIndex < 0) return
  const parent = heap[parentIndex]
  if (parent < node) {
    heap[parentIndex] = node
    heap[index] = parent
    adjust(node, parentIndex, heap)
  }
}
```



## 弹出 
弹出的是堆顶元素。
弹出后，进行堆的调整，整个过程是，当前节点与它的两个孩子节点，比大小的过程，（大顶堆）选出最大的孩子，并进行节点交换的操作。不断递归。

```js

/**弹出堆
 * @function takeHeap
 * @param {*} heap
 */
function takeHeap(heap) {
  const top = heap.shift()
  const last = heap.pop()
  heap.unshift(last)
  takeAdjust(heap[0], 0, heap)
  return top
}

function takeAdjust(node, index, heap) {
  const li = getLeft(index)
  const ri = getRight(index)

  const lc = heap[li]
  const rc = heap[ri]
  if (node >= lc && node >= rc) return
  if (lc > node && lc >= rc) { // 左孩子大
    heap[li] = node
    heap[index] = lc
    takeAdjust(node, li, heap)
  }
  if (rc > node && rc > lc) {// 右孩子大
    heap[ri] = node
    heap[index] = rc
    takeAdjust(node, ri, heap)
  }
}
```