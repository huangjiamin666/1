import axios from 'axios'

console.log('HMR1112hghdfsdsdf11111111111')
// axios.get('https://api.github.com/users').then(res => {
//     console.log(res)
// })
axios.get('/api/users').then(res => {
    console.log(res)
})