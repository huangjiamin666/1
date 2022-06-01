pdf預覽  const binaryData=[]
         binaryData.push(res)
         const blob=new Blob(binaryData,{type,'application/pdf'})
         const url = URL.createObjectURL(blob)
         window.open(url)

excel文件上傳導出的插件xlsx

把文件按照二進制進行讀取(formData也是二進制)
export function readFile(file){
  return new Promise(resolve=>{
    let reader=new FileReader()
    reader.readAsBinary(file)
    reader.onload=ev=>{
      resolve(ev.target.result)
    }
  })
}


通過插件讀取二進制數據解析為json
 let data=await readFile(file)
 let workbook=xlsx.read(data,{type:'binary'});
 console.log(workbook)
 worksheet = workbook.Sheets[workbook.SheetNames[0]]
 data=xlsx.utils.sheet_to_json(worksheet)

 設置異步間隔延遲
 export function delay(interval=0){
   return new Promise(resolve=>{
     let timer=setTimeout(_=>{
       clearTimeOut(timer);
       resolve()
     },interval)
   })
 }