const tf = (i) => (i < 10 ? '0': '') + i
const formatDate = (time,format = 'yyyy-MM-dd') => {
    if (!time) {
        return ''
    }
    const t = time instanceof Date ? time : new Date(time) 
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g,function(a) {
        switch(a) {
            case 'yyyy':
                return tf(t.getFullYear()) > 1970 ? tf(t.getFullYear()) : ''
            case 'MM': 
                return tf(t.getMonth() + 1)
            case 'mm': 
                return tf(t.getMinutes())
            case 'dd':
                return tf(t.getDate())
            case 'HH':
                return tf(t.getHours())
            case 'ss':
                return tf(t.getSeconds())
        }
    })
}
export { formatDate }