import axios from 'axios'

console.log('HMR1112hghdfsdsdf111111111ds11')
// axios.get('https://api.github.com/users').then(res => {
//     console.log(res)
// })
axios.get('/api/users').then(res => {
    console.log(res)
})