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
