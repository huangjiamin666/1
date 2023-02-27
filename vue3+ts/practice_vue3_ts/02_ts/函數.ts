// 1.基本函數
// 命名函数
function add(x, y) {
  return x + y
}

// 匿名函数
let myAdd = function (x, y) {
  return x + y;
}

// 2. 函数类型
// # 为函数定义类型
// 让我们为上面那个函数添加类型：
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。TypeScript 能够根据返回语句自动推断出返回值类型。
function add1(x: number, y: number): number {
  return x + y
}

let myAdd1 = function (x: number, y: number): number {
  return x + y
}

// 3. 书写完整函数类型
// 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。
// add3:類型=function{}
// add3 ====>函數add3
//   (x: number, y: number) => number當前的函數類型
//   function (x: number, y: number): number {return x + y}相當於符合上面的函數的值
let myAdd2: (x: number, y: number) => number =
  function (x: number, y: number): number {
    return x + y
  }


//   3. 可选参数和默认参数

function buildName(firstName: string = 'A', lastName?: string): string {
  if (lastName) {
    return firstName + '-' + lastName
  } else {
    return firstName
  }
}

console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())

// 4. 剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。

// 在 TypeScript 里，你可以把所有参数收集到一个变量里：
// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。

function infos(x: string, ...args: string[]) {
  console.log(x, args)
}
infos('abc', 'c', 'b', 'a')


// 5. 函数重载
// 函数重载: 函数名相同, 而形参不同的多个函数
// 在JS中, 由于弱类型的特点和形参与实参可以不匹配, 是没有函数重载这一说的 但在TS中, 与其它面向对象的语言(如Java)就存在此语法

/* 
函数重载: 函数名相同, 而形参不同的多个函数
需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
*/

// 重载函数声明
function addts(x: string, y: string): string
function addts(x: number, y: number): number

// 定义函数实现
function addts(x: string | number, y: string | number): string | number {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}

console.log(addts(1, 2))
console.log(addts('a', 'b'))
// console.log(add(1, 'a')) // error