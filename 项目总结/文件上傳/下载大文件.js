import { saveAs } from 'file-saver';
  axios({
    method: 'post',
    url: 'api/file',
    responseType: 'blob'
}).then(res=> {
     if (res.data){
       fileName = this.fileName;
      // 有文件名就用自定义的，没有就从header获取
        if (!fileName) {
          fileName = fileNameFromHeader(
            res.headers["content-disposition"] || ""
          );
        }
        
      let blob = new Blob([res.data],{
      type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});
+      saveAs(blob, fileName );
      }
}).catch((error) => {
  console.log(error)
})

function fileNameFromHeader(disposition) {
  let result = null;
  disposition = disposition.split(";")[1];
  if (disposition && /filename=.*/gi.test(disposition)) {
    result = disposition.match(/filename=.*/gi);
    return decodeURIComponent((result[0].split("=")[1]).replace(/\+/g, '%20'));
  }
  return "null";
}