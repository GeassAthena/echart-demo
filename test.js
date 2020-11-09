const { arguments } = require("file-loader")

//模板字符串
let name = '马兵'
let age = 23
let person = [{
    name: '马兵',
    age: 23
  }, {
    name: 'jack',
    age: 12
  },
  {
    name: 'mary',
    age: 18
  }
]

function fn(arr, ...args) {
  let res
  if (args[1] >= 18) {
    res = '成年人'
  } else {
    res = '未成年人'
  }
  //   console.log(arr)
  //   console.log(args)
  return args[0] + arr[1] + res
}
let newArr = person.map(item => {
  return fn `${item.name}是${item.age}`
})
// let str = fn `${name}是${age}`
console.log(newArr)

//箭头函数
let fn = (a, b) => {
  console.log(a + b)
  console.log(this)
}
let fn1 = a => console.log(a)
fn(1, 2)
fn1(2)
let fn2 = a => b => a + b
// 等价于
// let fn2 = function (a) {
//   return function (b) {
//     return a + b
//   }
// }
/*
console.log(fn2(1)(2))
let fn = a => a+1
console.log(fn)
console.log(fn(1))
let fn = () => console.log(arguments)
fn(1,2,3)
let fn = (...args) => console.log(args)
fn(1,2,3)
*/
let obj = {
  0: 'a',
  1: 'b',
  length: 3
}
let res = Array.from(obj)
console.log(res)
let arr = new Array(2)
let arr1 = Array.of(2,2)
console.log(arr1)