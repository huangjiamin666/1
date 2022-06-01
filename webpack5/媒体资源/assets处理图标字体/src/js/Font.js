import '../font/iconfont.css'
function packFont() {
    const oh2 = document.createElement('div')
    const span = document.createElement('span')
    span.className = 'iconfont icon-linggan lg-icon'
    oh2.appendChild(span)
    return oh2
}

document.body.appendChild(packFont())