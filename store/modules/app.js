import { _API_Font } from '@/apis/index.js'

export default {
	namespaced: true,
	state: {
		token: 'token',
		fontFaceList: []
	},
	mutations: {},
	actions: {
		getFontFaceList({ state }) {
			G.$request(_API_Font(), fontFaceList => state.fontFaceList = fontFaceList)
		},
		getFontFace({ state: { fontFaceList }}) {
			Promise.all(fontFaceList.map(e => uni.loadFontFace(e)))
		}
	}
}
