/*
 * @Description 字典
 * @Autor 朱俊
 * @Date 2022-01-08 15:11:23
 * @LastEditors 朱俊
 * @LastEditTime 2022-01-08 15:45:56
 */
function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'undefined'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `${this.key}:${this.value};`
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  set(key, value) {
    if (key == null || value == null) return false
    this.table[this.toStrFn(key)] = new ValuePair(key, value)
    return true
  }

  remove(key) {
    if (!this.hasKey(key)) return false
    delete this.table[this.toStrFn(key)]
    return true
  }

  hasKey(key) {
    // return Object.keys(this.table).includes(this.toStrFn(key))
    // 书上实现方法
    return this.table[this.toStrFn(key)] != null
  }

  get(key) {
    if (!this.hasKey(key)) return false
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  clear() {
    this.table = {}
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    if (this.size() === 0) return true
    return false
  }
  keyValues() {
    return Object.values(this.table)
  }

  keys() {
    return this.keyValues().map(item => {
      return item.key
    })
  }

  values() {
    return this.keyValues().map(item => {
      return item.value
    })
  }

  forEach(callBackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0, len = valuePairs.length; i < len; i++) {
      const result = callBackFn(valuePairs[i])
      if (result === false) {
        break
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    const arrs = valuePairs.map(valuePair => {
      return valuePair.toString()
    })
    return arrs.join(' ')
  }
}


const dictionary = new Dictionary()

dictionary.set('name', 'zhujun')
dictionary.set('height', 170)
dictionary.set('sex', 'man')
dictionary.set('age', 28)

console.log(dictionary.toString())

dictionary.remove('name')
console.log(dictionary.toString())

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())

dictionary.forEach(item => {
  console.log(`${item.key}-${item.value}`)
  if (item.key == 'sex') {
    return false
  }
})