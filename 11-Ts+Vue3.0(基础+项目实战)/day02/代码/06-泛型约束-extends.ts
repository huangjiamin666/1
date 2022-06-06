export {}
type StrOrNum = string|number
interface PersonItf<N extends StrOrNum,G>{
  name:N;   // 需求： N只接受字符串 或者 数字
  getName:()=>G
}

let obj:PersonItf<number,number>={
  name:1,
  getName(){
    return 1
  }
}