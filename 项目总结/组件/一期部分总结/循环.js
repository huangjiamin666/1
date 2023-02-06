const arr=[]
this.mapData.forEach(item=>{
  const obj={}
  obj.name=item
  obj.value=item
  arr.push(obj)
})
this.mapData=arr