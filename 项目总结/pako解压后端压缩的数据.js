
import pako from "pako";
this.uncompress(ssjson)
//（1）解压缩
uncompress(b64Data) {
    var strData = atob(b64Data);
    var charData = strData.split("").map(function (x) {
        return x.charCodeAt(0);
    });
    var binData = new Uint8Array(charData);
    var data = pako.inflate(binData);
    var strData = this.Utf8ArrayToStr(data);
    return strData;
}
//（2）fix解压中文乱码
Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
                );
                break;
        }
    }
    return out;
}
// （3）压缩
compress(json) {
    var binaryString = pako.gzip(json, { to: "string" });
    return btoa(binaryString);
}