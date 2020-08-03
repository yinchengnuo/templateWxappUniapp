// 数字千位打点
export const toThousand = str => {
  return str.toString().replace(str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 字符串打点截取
export const sliceStr = (str, len) => {
  return str ? (str.length > len ? `${str.replace(/<[\s\S]+?>/g, '').slice(0, len)}...` : str.replace(/<[\s\S]+?>/g, '')) : ''
}
