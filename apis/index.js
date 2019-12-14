import request from '@/common/js/request.js'

export const _API_Index = data => request.get('/', data) // 获取 index 首页数据