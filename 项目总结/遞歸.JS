formatData(nodes) {
  nodes.map(child => {
    child.regId = child.regId || child.id
    child.regName = child.orgName || child.regName
  })
  return nodes.filter(item => item.subNodes || item.id).map(item => {
    item = Object.assign({}, item)
    if (item.subNodes) {
      item.subNodes = this.formatData(item.subNodes)
    }
    return item
  })
}

// localStorage中只能存字符串 所以經常要使用JSON.stringfy()存，JSON.parse()取
