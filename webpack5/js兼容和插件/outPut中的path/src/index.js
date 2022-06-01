import './title.js'
if(module.hot) {
    module.hot.accept(['./title.js'], () => {
        console.log('title.js更新了')
    })
}