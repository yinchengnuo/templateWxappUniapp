import request from '@/utils/request.js'

export const _API_Font = data => request.get('/fonts', data) // 获取字体列表
export const _API_MsgSecCheck = data => request.get('/check', data) // 获取字体列表

export const _API_Index = data => request.get('/', data) // 获取 index 首页数据

export const _API_IndexUpload = data => request.uploadFile('/user/auth_share', data) // 上次文件接口
export const _API_IndexDownload = data => request.downloadFile('https://yinchengnuo.com/static/images/0.jpg', data) // 下载文件接口
