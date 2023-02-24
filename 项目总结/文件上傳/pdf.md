pdf預覽  const binaryData=[]
         binaryData.push(res)
         const blob=new Blob(binaryData,{type,'application/pdf'})
         const url = URL.createObjectURL(blob)
         window.open(url)


菜单滚动         el-scrollbar

上传文件：得到上传的文件 this.record.file
          得到删除的文件 handleRemove(file,formName){
                            file.isDelete='Y'
                            this.record.deleteFileList.push(file)
                        }
                    合并 this.record.file=this.record.file.concat(this.record.deleteFileList)
                        const params=new FormData()
                        params.append('file',file)
                发送请求 Object.keys(this.record).forEach(key=>{
                    if(key!='file'&&key!='deleteFileList'){
                        params.append(key,this.record[key])
                    }
                })

                进入详情预览 直接获取this.record.file


