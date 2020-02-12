import request from '@/common/js/request.js'

export const _API_Index = data => request.get('/', data) // 获取 index 首页数据

export const _API_IndexDownload = data => request.downloadFile('https://yinchengnuo.com/static/images/0.jpg', data)

export const _API_IndexUpload = data => request.uploadFile('/user/auth_share', data)