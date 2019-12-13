export const formatTimestamp = t => {  //时间戳格式化
	const date = new Date(t)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const week = date.getDay()
	const day = date.getDate()
	const hour = date.getHours()
	const minutes = date.getMinutes()
	const second = date.getSeconds()
	
	let weekRes = ''
	switch (week) {
	    case 0:
	        weekRes = "星期日";
	        break;
	    case 1:
	        weekRes = "星期一";
	         break;
	    case 2:
	        weekRes = "星期二";
	         break;
	    case 3:
	        weekRes = "星期三";
	         break;
	    case 4:
	        weekRes = "星期四";
	         break;
	    case 5:
	        weekRes = "星期五";
	         break;
	    case 6:
	        weekRes = "星期六";
	}
	return [year, month, weekRes, day, hour, minutes, second]
}

export const numberToChinese = num => {  //数字转汉字方法
	const chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
	const chnUnitSection = ["","万","亿","万亿","亿亿"];
	const chnUnitChar = ["","十","百","千"];
	const numToChn = num => {
	      const index =  num.toString().indexOf(".");
	      if(index != -1){
	          const str = num.toString().slice(index);
	          let a = "点";
			  for (let i = 1;i < str.length; i ++){
				  a += chnNumChar[parseInt(str[i])];
			   }
	          return a ;
	      }else{
	          return '';
	      }
	}
	//定义在每个小节的内部进行转化的方法，其他部分则与小节内部转化方法相同
	const sectionToChinese = section => {
	    var str = '', chnstr = '',zero= false,count=0;   //zero为是否进行补零， 第一次进行取余由于为个位数，默认不补零
	    while(section>0){
	         var v = section % 10;  //对数字取余10，得到的数即为个位数
	         if(v ==0){                    //如果数字为零，则对字符串进行补零
	             if(zero){
	                 zero = false;        //如果遇到连续多次取余都是0，那么只需补一个零即可
	                 chnstr = chnNumChar[v] + chnstr; 
	             }      
	         }else{
	             zero = true;           //第一次取余之后，如果再次取余为零，则需要补零
	             str = chnNumChar[v];
	             str += chnUnitChar[count];
	             chnstr = str + chnstr;
	         }
	         count++;
	         section = Math.floor(section/10);
	    }
	    return chnstr;
	}
	const a = numToChn(num);
	num = Math.floor(num);
	let unitPos = 0;
	let strIns = '';
	let chnStr = '';
	let needZero = false;
	if(num === 0){
		return chnNumChar[0];
	} 
	while(num > 0){
		let section = num % 10000;
		if(needZero){
			chnStr = chnNumChar[0] + chnStr;
		}
		strIns = sectionToChinese(section);
		strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
		chnStr = strIns + chnStr;
		needZero = (section < 1000) && (section > 0);
		num = Math.floor(num / 10000);
		unitPos ++;
	}
	let result = chnStr + a;
	const temp = result.split('')
	if (temp[0] === '一' && temp[1] === '十') {
		temp.splice(0, 1)
		result= temp.join('')
	}
	return result ? result : ''
}