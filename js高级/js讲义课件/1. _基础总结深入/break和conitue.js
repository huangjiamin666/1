/*
break只能用于退出循環語句或者switch，
不能在if語句中使用break和continue
但可以用在循環内部的if中，對循環起作用，立即終止離他最近的那個循環語句

label:循環語句
使用break語句時，可以在break后跟著一個label,這樣break將會結束指定的循環，而不是最近的
*/
outer:
for (var i = 0; i < 5; i++) {
  console.log('@外層循環' + i)
  for (var j = 0; j < 5; j++) {
    break // 這樣只會結束内層循環
    break outer; //結束外層循環
    console.log('内層循環' + j)
  }
}
/*
 區別 continue只會跳過當次循環，繼續執行其他循環
*/