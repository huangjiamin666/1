    import  CryptoJS from 'crypto-js'
    const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量
    const loginKey = '28927294323dfhiderhieret6496'
    
    export default {
        //解密方法
    Decrypt(word){
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    },
    
    //加密方法
    Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.ciphertext.toString().toUpperCase();
    }
    }
    // http调用
    const enCryParam = (params) => {
        params.loginKey = loginKey
        params.time = new Date().getTime()
        const paramStr = JSON.stringify(param)
        const encryParam = pass.encrypt(paramStr)
        const encryParams = {
            encryParam: encryParam
        }
        return encryParams
    }
    // 请求拦截加密
    axios.interceptors.request.use(config=>{
        config.data = enCryParam(config.data)
    })