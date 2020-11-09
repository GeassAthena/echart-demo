###拉勾网ES6入门到精通

#### 7.箭头函数
在函数与函数体之间使用箭头连接，忽略function关键字。
+ 只有一个形参的时候可以忽略参数的小括号,只有一条return语句时可以忽略函数体的中括号。
+ 箭头函数内部没有arguments,可以使用剩余运算符获得输入参数。
+ 箭头函数没有自己执行主体this,与执行环境有关，继承上下文，无法通过call/aplly/bind改变this指向

```JavaScript
let fn = (a, b) => {
    return a + b
}
let fn = a => a + 1 //console.log(fn(1)) 输出2
let fn = x => y => x + y //console.log(fn(1)(2)) 输出3
let fn = () => console.log(arguments) //fn(1,2) 没有输出参数
let fn = (...args) => console.log(args) //剩余运算符获取输入参数
```

#### 8.数组新API
##### 8.1 Array.from
将类数组对象(有迭代器的对象)转换成对象,length属性会影响转换后的数组长度,长于使用undefined补充，短于则切割。
```JavaScript
//类数组对象
let obj = {
    0: 'a',
    1: 'b',
    length: 2
}
let res = Array.from(obj) //res=['a','b']
```
##### 8.2 Array.of和Array.fill
Array.of创建具有可变数量参数的数组，而不考虑参数的类型和数量;Array.fill(item ,start, end)给数组填充元素，第一个参数不可忽略，用固定值填充从起始索引到终止索引的全部元素，不包括终止索引。
```JavaScript
Array.of(1) //[0]
Array.of('a', 1) //['a', 1]
```
##### 8.3 Array.find和Array.findIndex