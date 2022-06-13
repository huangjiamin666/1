function fibonacci (n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
var onmessage = function (event) {
  var number = event.data
  console.log('分綫程接受到主綫程發送的數據：' + number)
  var result = fibonacci(number)
  postMessage(result)
  console.log('分綫程向主綫程返回數據：' + result)
}