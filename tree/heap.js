


/**
创建堆，堆的作用是什么？
它可以进行最值的维护。
完全二叉树是可以使用一维数组来进行维护的

index --> 孩子节点 index*2+1 index*2+2
 */


function getParent(index) {
  return parseInt((index - 1) / 2)
}

function getLeft(index) {
  return index * 2 + 1
}

function getRight(index) {
  return index * 2 + 2
}

function createHeap(nodes) {
  let heap = []
  for (let index = 0; index < nodes.length; index++) insertHeap(nodes[index], heap)
  return heap
}


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

const heap = createHeap([1, 2, 3, 4, 5, 6, 7, 8])
// console.log(heap)
insertHeap(12, heap)
console.log(heap)

// takeHeap(heap)

// takeHeap(heap)


let top = takeHeap(heap)
let index = 0
while (index++ < 8) {
  console.log(top)
  top = takeHeap(heap)
}