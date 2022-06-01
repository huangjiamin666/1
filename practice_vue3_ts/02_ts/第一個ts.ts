// 1.類型注解
function greeter(person: string) {
  return 'Hello, ' + person
}

let user = 'Yee' // 此時user只能是字符串

console.log(greeter(user))

// 2.接口 是一種能力，一種約束而已
// 在 TypeScript 里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。
interface Person {
  firstName: string
  lastName: string
}

function greeters(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let users = {
  firstName: 'Yee',
  lastName: 'Huang'
}

console.log(greeters(users))

// 3.類
class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeterst(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let userst = new User('Yee', 'Huang')

console.log(greeterst(userst))