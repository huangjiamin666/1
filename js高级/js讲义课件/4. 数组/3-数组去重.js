// let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// =>[1,2,3]

/*
 * 方案一：
 *   循环原有数组中的每一项，每拿到一项都往新数组中添加
 *   添加之前验证新数组中是否存在这一项，不存在再增加
 */
/* let newAry = [];
for (let i = 0; i < ary.length; i++) {
	// 循环获取原有数组中的每一项
	let item = ary[i];
	// 验证新数组中是否存在这一项
	if (newAry.includes(item)) {
		// 存在这一项，不在增加到新数组中，继续下一轮循环即可
		continue;//循环用continue
	}
	// 新数组中不存在这一项，我们加入到新数组中即可
	newAry.push(item);
}
console.log(newAry); */

/* let newAry = [];
ary.forEach(item => {
	if (newAry.includes(item)) return;//方法用return
	newAry.push(item);
});
console.log(newAry); */


/*
 * 方案三：容坤同学的思路 
 */
/* let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// 1.创建一个空对象
let obj = {};
// 2.循环数组中的每一项，把每一项向对象中进行存储 => item:item
for (let i = 0; i < ary.length; i++) {
	let item = ary[i];
	// 3.每一次存储之前进行判断:验证obj中是否存在这一项
	if (obj[item] !== undefined) {
		// 已经存在这一项
		ary.splice(i, 1);
		i--;
		continue;
	}
	obj[item] = item;
}
console.log(ary); */




// 基于splice实现删除性能不好：当前项被删后，后面每一项的索引都要向前提一位，如果后面内容过多，一定影响性能
/*
 * unique：实现数组去重的方法
 *  @params
 *     ary [Array] 要去重的数组
 *  @return
 *     [Array] 去重后的数组
 * by zhouxiaotian on 20190724   
 */
/* function unique(ary) {
	let obj = {};
	for (let i = 0; i < ary.length; i++) {
		let item = ary[i];
		if (obj[item] !== undefined) {
			//替换
			ary[i] = ary[ary.length - 1];
			ary.length--;
			i--;
			continue;
		}
		obj[item] = item;
	}
	return ary;
}
let aa = [12, 23, 12, 15, 25, 23, 25, 14, 16];
aa = unique(aa);
aa.sort((a, b) => a - b);
console.log(aa); */




// 基于ES6的Set（对应的Map）实现去重
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
ary = [...new Set(ary)];
console.log(ary);


数组重新排序 this.payConfigList = data.extList;
          if (data.extList.length > 0) {
           // console.log(data.extList)
            let one = [];
            let two = [];
            let three = [];
            let four = [];
            let five = [];
            let six = [];
            let seven = [];
            let eight = [];
            let night = [];
            data.extList.forEach((item) => {
              if (item.payType === 'AP') {
                one.push(item)
              } else if (item.payType === 'WC') {
                two.push(item)
              } else if (item.payType === 'YLSM') {
                three.push(item)
              } else if (item.payType === 'YSF') {
                four.push(item)
              } else if (item.payType === 'YHKZZ') {
                five.push(item)
              }else if(item.payType==='APBK'){
                six.push(item)
              }  else if(item.payType==='BK'){
                seven.push(item)
              }  else if(item.payType==='WCBK'){
                eight.push(item)
              }  else if(item.payType==='WCHB'){
                night.push(item)
              }
              
            });
             //one支付宝扫码 two微信扫码 three银联扫码 four云闪付 five 银行卡转账  six支付宝转银行卡 SEVEN银行汇款 EIGHT微信转银行卡 NIGHT微信红包
                // data.extList = one.concat(two, three, four, five, six)
            data.extList = one.concat(two, three, four, five, six,seven,eight,night)
            let arr = [];
            data.extList.forEach((item) => {
              let obj = {};
              obj['key'] = item.payType;
              obj['value'] = item.viewName;
              arr.push(obj)
            })
            this.rechargeList = arr;


			//在数组中循环，拿到特定的值修改相应的值
      this.gameList = common.sortGame(this.gamePlatformList, this.PicInfoList)
       
                 for(let i in this.gameList){
                if(this.gameList[i].platformCode=="NEWPT"){
                 this.gameList[i].isHeat="2"
                }