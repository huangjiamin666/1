export const columnDefs = [
    {
        headerName: '分行',
        headerClass: 'ag-center-aligned-header',
        pinned: 'left',
        editable: false,
        children: [
            {
                headerName: '--',
                headerClass: 'searchFh',
                field: 'name',
                editable: false,
                pinned: 'left',
                width: 120,
                cellClass: 'span-item',
            }
        ]
    },
    {
        headerName: '項目',
        headerClass: 'ag-center-aligned-header',
        pinned: 'left',
        editable: false,
        children: [
            {
                headerName: '--'，
                field: 'studentId',
                pinned: 'left',
                editable: false,
                width: 300
            }
        ]
    },
    {
        headerName: '參數',
        headerClass: 'ag-center-aligned-header',
        pinned: 'center',
        children: [
            {
                headerName: '2021/1/30',
                field: 'JAN',
                editable: true,
                hide: false,
                type: 'percent', 
                width: 120
            },
            {
                headerName: '2021/1/30',
                field: 'FEB',
                editable: true,
                hide: false,
                type: 'percent', 
                width: 120
            },
            {
                headerName: '2021/1/30',
                field: 'MAR',
                editable: true,
                hide: false,
                type: 'percent', 
                width: 120
            }
        ]
    }
]
export const numFormat=(value,type)=>{
    if(!value)return '0.00'
    if(type="million"){
        value=Number(value)/10000;
    }
    if(type=='handeredMillion'){
        value=Number(value)/100000000
    }
    if(value&&typeof value!=='number'&&(value.indexOf("%")>-1||value.indexOf('-')>-1))return value
    value=Number(value).toFixed(2);
    var intPart =value.split(".")[0] // 獲取整數部分
    var intPartFormat=intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,");//將整數部分逢三進一
    var floatPart='.00' // 預定義小數部分
    var value2Array=value.split('.')
    // =2表示數據有小數位
    if(value2Array.length==2){
        floatPart=value2Array[1].toString();//拿到小數部分
        if(floatPart.length==1){
            return intPartFormat+'.'+floatPart
        }
    }else {
        return intPartFormat+floatPart
    }
}