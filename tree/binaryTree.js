


class BinaryTree {
  nodes = []
  queue = []
  binaryTree = {}
  constructor(nodes) {
    this.nodes = nodes
    this.create()
  }

  create() {
    if (!this.nodes || this.nodes.length === 0) {
      this.binaryTree = null
      return null
    }
    this.binaryTree = { val: this.nodes[0] }
    this.queue.push(this.binaryTree)  // 将头节点首先压入

    for (let index = 1; index < this.nodes.length; index++) {
      const node = {
        val: this.nodes[index],
        left: null,
        right: null
      }
      this.queue.push(node) // 向队尾添加元素

      if (this.queue[0].left && this.queue[0].right) {
        this.queue.shift() // 出队
      }

      // 出队仅仅是队的维护行为  不能影响到树的扩展
      if (!this.queue[0].left) {
        this.queue[0].left = node
      } else {
        this.queue[0].right = node
      }

    }


    return this.binaryTree
  }


  prePrint(node, result) {
    if (!node) return
    result.push(node.val)
    this.prePrint(node.left, result)
    this.prePrint(node.right, result)

    return result
  }

  midPrint(node) {
    if (!node) return
    this.midPrint(node.left)
    console.log(node.val, ' ')
    this.midPrint(node.right)
  }

  levelPrint() {
    let queue = []
    queue.push(this.binaryTree)
    let index = 0
    while (queue[index]) {
      console.log(queue[index].val)
      if (queue[index].left) {
        queue.push(queue[index].left)
      }
      if (queue[index].right) {
        queue.push(queue[index].right)
      }
      index++
    }

    console.log(queue)
  }
}

const bt = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// const binaryTree = new BinaryTree([])


// console.log(binaryTree)
console.log('前序遍历：')

const result = bt.prePrint(bt.binaryTree, [])
console.log(result)
console.log('中序遍历：')
bt.midPrint(bt.binaryTree)
console.log('层次遍历：')
bt.levelPrint()
/* 
 我会比较纠结 采用什么样的方式来定义一个树结构。 树首先是由节点组成的


 我会想到层次遍历相关的东西 利用层次遍历生成一棵二叉树  
 利用队来进行维护
 出队条件：只要有一个节点满足了有两个孩子节点
 终止的条件是：节点使用完成了

这里关于队与树的关系  我是可以直接采用引用的方式的

发现有几个节点少了，可是是完整的遍历的，为什么？
if(this.queue[0].left && this.queue[0].right){
  this.queue.shift()
}else{
  if(!this.queue[0].left) this.queue[0].left = node
  if(!this.queue[0].right) this.queue[0].right = node
}
因为我在出队操作后，没有进行树节点的扩展。



关于类 new时  如果我的constructor 采用了return的方式的话，那么我将没有办法使用到类中的方法的。
因此不要在constructor时  使用return 

树形结构实现层次遍历？
同样还是利用队的方式，不断的将节点的左右孩子压入到队中去
*/