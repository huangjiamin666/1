pdf預覽  const binaryData=[]
         binaryData.push(res)
         const blob=new Blob(binaryData,{type,'application/pdf'})
         const url = URL.createObjectURL(blob)
         window.open(url)