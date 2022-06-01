// 1. 布尔值
let isDone: boolean = false;
isDone = true;
// isDone = 2 // error

// 2. 数字
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制

// 3. 字符串
let myname: string = 'tom'
myname = 'jack'
// name = 12 // error
let age: number = 12
const info = `My name is ${myname}, I am ${age} years old!`

// 4. undefined 和 null
// TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 它们的本身的类型用处不是很大：
let u: undefined = undefined
let n: null = null

// 5. 数组
// 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
let list1: number[] = [1, 2, 3]
// 第二种方式是使用数组泛型，Array<元素类型>：
let list2: Array<number> = [1, 2, 3]

// 6.元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。
let t1: [string, number]
t1 = ['hello', 10] // OK
t1 = [10, 'hello'] // Error
// 当访问一个已知索引的元素，会得到正确的类型：

console.log(t1[0].substring(1)) // OK
console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法

// 7. 枚举
// enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。

enum Color {
  Red,
  Green,
  Blue
}

// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
let myColor: Color = Color.Green  // 1
console.log(myColor, Color.Red, Color.Blue)
// 默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号：

enum Color { Red1 = 1, Green1, Blue1 }
let ct: Color = Color.Green1 // 2
// 或者，全部都采用手动赋值：

enum Color { Red2 = 1, Green2 = 2, Blue2 = 4 }
let cx: Color = Color.Green // 2
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

enum Color { Red3 = 1, Green3, Blue3 }
let colorName: string = Color[2]

console.log(colorName)  // 'Green3'

// 8. any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean
// 在对现有代码进行改写的时候，any 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。并且当你只知道一部分数据的类型时，any 类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [1, true, 'free']
list[1] = 100

// 9. void
// 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
  console.log('fn()')
  return undefined
  return null
  return 1 // error
}
// 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：
let unusable: void = undefined

// 10.object
// object 表示非原始类型，也就是除 number，string，boolean之外的类型。
// 使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：

function fn2(obj: object): object { //傳參返回值都是object
  console.log('fn2()', obj)
  return {}
  // return undefined
  // return null
}
console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))


// 11. 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种
// 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值

function toString2(x: number | string): string {
  return x.toString()
}
// 需求2: 定义一个一个函数得到一个数字或字符串值的长度

function getLength(x: number | string) {

  // return x.length // error

  if (x.length) { // error
    return x.length
  } else {
    return x.toString().length
  }
}

// 12. 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法

/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLengtht(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}
console.log(getLengtht('abcd'), getLengtht(1234))

// 13. 类型推断
// 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
// 有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'