export const deepClone = obj => { // 深克隆方法
	const targetObj = obj.constructor === Array ? [] : {}
	Object.keys(obj).forEach(keys => {
		if (obj[keys] && typeof obj[keys] === 'object') {
			targetObj[keys] = deepClone(obj[keys])
		} else {
			targetObj[keys] = obj[keys]
		}
	})
	return targetObj
}

export const clearTypeListZeros = typeList => { // 清除某件商品 typeList 中 type 对象的 size 和 choosed 对象中 value 为 0 的 key,并在 size 对象长度为 0 时,清除 type 对象 
	typeList.forEach(e => {
		Object.keys(e.size).forEach(ee => {
			if(e.size[ee] === 0) {
				delete e.size[ee]
				delete e.choosed[ee]
			}
		})
	})
	for(let i = typeList.length - 1; i > -1; i --) {
		if(!Object.keys(typeList[i].size).length) {
			typeList.splice(i, 1)
		}
	}
}

export const clearGoodTypeListZero = shopcarList => { // 当某件商品的 typeList 为 0 时,从购物车清除这件商品
	for(let i = shopcarList.length - 1; i > -1; i --) {
		if(!shopcarList[i].typeList.length) {
			shopcarList.splice(i, 1)
		}
		shopcarList[i] ? shopcarList[i].choosed = shopcarList[i].typeList.some(e => Object.keys(e.choosed).some(ee => e.choosed[ee] === true)) : ''
	}
}

export const mergeGoodToShopcar = (origin, target) => { // 当新添加的商品购车已经存在时,合并
	origin.typeList.forEach(typeItem => {
		for(let targetTypeListIndex = target.typeList.length - 1; targetTypeListIndex > -1; targetTypeListIndex --) {
			if (typeItem.id === target.typeList[targetTypeListIndex].id) {
				Object.keys(target.typeList[targetTypeListIndex].size).forEach(size => {
					if(typeItem.size[size]) {
						typeItem.size[size] += target.typeList[targetTypeListIndex].size[size]
					} else {
						typeItem.size[size] = target.typeList[targetTypeListIndex].size[size]
					}
					typeItem.choosed[size] = true
				})
				target.typeList.splice(targetTypeListIndex, 1)
			}
		}
	})
	origin.typeList.splice(origin.typeList.length - 1, 0, ...target.typeList)
	origin.typeList.sort((a, b) => +a.id - +b.id)
}

export const confirmOrder = goodList => { // 点击确认订单结算前去掉冗余的辅助数据
	const list = []
	goodList.forEach(e => {
		clearTypeListZeros(e.typeList)
		const typeList = []
		e.typeList.forEach(type => {
			const typeItem = {}
			typeItem.id = type.id
			typeItem.name = type.name
			typeItem.size = type.size
			typeList.push(typeItem)
		})
		const obj = {}
		obj.id = e.id
		obj.typeList = typeList
		list.push(obj)
	})
	return list
}

export const clearShoplistConfirmed = (goodList, payload) => { // 提交订单后清除购物车中已经提交的类型或者商品
	payload.forEach((e, i) => {
		e.typeList.forEach((ee, ei) => {
			Object.keys(ee.size).forEach(eee => {
				goodList[i].typeList[ei].size[eee] = 0
			})
		})
		clearTypeListZeros(goodList[i].typeList) // 清除这件商品的 typeList
	})
	clearGoodTypeListZero(goodList) // 清除购物车中 typeList 长度为 0 的商品
}