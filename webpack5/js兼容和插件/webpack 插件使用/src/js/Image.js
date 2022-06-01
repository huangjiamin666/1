import imgSrc from '../img/a.jpg'
import '../css/image.css'
function packImg() {
    const oh2 = document.createElement('div')
    const img = document.createElement('img')
    img.width = 400
    // img.src= require('../img/a.jpg').default 第1种方法
    // img.src= require('../img/a.jpg') 第二种方法
    img.src = imgSrc // 第三种
    oh2.appendChild(img)

    const bgImg = document.createElement('div')
    bgImg.className = 'bgBox'
    oh2.appendChild(bgImg)
    return oh2
}

document.body.appendChild(packImg())