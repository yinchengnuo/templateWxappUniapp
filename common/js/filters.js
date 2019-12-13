import { numberToChinese, formatTimestamp } from './utils.js'

export const deg = (value, stauts) => {  //deg 转 学位过滤器
	switch (+value) {
		case 0: {
			switch (+stauts) {
				case 0:
					return "未获得学位资格";
				case 1:
					return "初中资格";
				case 2:
					return "高中资格";
				case 3:
					return "大学资格";
			}
		}
	    case 1:
	        return "大学毕业";
	    case 2:
	        return "学士学位";
	    case 3:
	        return "硕士学位";
	    case 4:
	        return "博士学位";
	    case 5:
	        return "学霸";
	}
}

export const numToZh = value => {  //数字转汉字过滤器
	return value ? numberToChinese(value) : ''
}

export const getYear = value => {  //时间戳转年份过滤器
	return formatTimestamp(+value)[0]
}

export const getMonth = value => {  //时间戳转月份过滤器
	const month = formatTimestamp(+value)[1] + ''
	return month.length === 1 ? '0' + month : month  //月份只有一位数字时补零
}

export const getDay = value => {  //时间戳转周过滤器
	return formatTimestamp(+value)[2]
}

export const getDate = value => {  //时间戳转 日 过滤器
	const date = formatTimestamp(+value)[3] + ''
	return date.length === 1 ? '0' + date : date  //日期份只有一位数字时补零
}

export const getHousr = value => {  //时间戳转 时 过滤器
	return formatTimestamp(+value)[4]
}

export const getMinute = value => {  //时间戳转 分 过滤器
	return formatTimestamp(+value)[5]
}

export const getSecond = value => {  //时间戳转 秒 过滤器
	return formatTimestamp(+value)[6]
}

export const willDeg = (value, max) => {
	if (value >= 0 && value < 300) {
		return '大学毕业'
	} else if (value >= 300 && value < 599) {
		return '学士毕业'
	} else if (value >= 600 && value < 999) {
		return '硕士毕业'
	} else if (value >= 1000 && value < 1499) {
		return '博士毕业'
	} else if (value >= 1500 && value < max) {
		return '成为学霸'
	}
	return ''
}

export const lessScore = (value, max) => {
	if (value >= 0 && value < 300) {
		return 300 - value
	} else if (value >= 300 && value < 599) {
		return 599 - value
	} else if (value >= 600 && value < 999) {
		return 999 - value
	} else if (value >= 1000 && value < 1499) {
		return 1499 - value
	} else if (value >= 1500 && value < max) {
		return max - value
	}
	return ''
}