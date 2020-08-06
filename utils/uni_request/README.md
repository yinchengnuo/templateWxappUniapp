# 欢迎使用 uni_request.js

最近在使用uni-app开发应用，因为用axios用的太顺手了，就对uni.request方法做了一个封装，使其使用起来和axios的方法和效果一样。因为是自己现做现用，api设计的都比较简单，代码不也不复杂，但是却很实用。如有BUG，还请不吝指出，非常感谢。

### 主要功能：

* 支持异步拦截器（请求/响应拦截器中支持异步操作并阻塞）
* 支持Promise 操作，错误捕获
* 支持全局错误监听
* 支持文件上传/下载
* 支持主动取消请求（包括普通请求 GET POST 等）
* 支持超时取消

----

# 封装


## 初始化

```javascript
import uni_request from './uni_request.js'

const request = uni_request({ // 有效配置项只有三个
	baseURL: 'http://192.168.0.13/dwbsapp', //baseURL
	timeout: 12345, // 超时时间，单位毫秒。默认 60 秒
	header: { 'x-custom-header': 'x-custom-header' }, // 设置请求头，建议放在请求拦截器中
	statusCode: [200, 401] // 服务器相应状态码为 200/401 时，网络请求不会 reject。也就是不会被 catch 到。如响应 401 时可以在响应拦截后 await 刷新 token + await 重新请求 + return response。即可实现无痛刷新。 
})
```
## 请求拦截器

可以设置多个, 同时可以也可以使用异步方法。拦截器回调函数接受4个参数，分别是 config, method, url, data。其中 config 中包含请求头和请求体（ uploadFile()请求的请求体只包含 formData 部分），同时也可以在请求拦截器中取消请求：

```javascript

request.interceptors.request.use(async (config, ...args) => {
	await new Promise(resolve => setTimeout(() => resolve(), 3000))
	console.log('请求拦截器, 网络请求会等 3 秒后上面的异步任务结束后执行') // args[0] method args[1] url args[3] data
	config.header.Authorization = 'Bearer ' + $store.state.app.token // 修改请求头
	config.body.test = 'test' // 修改请求体
	// config.cancel = true // 取消请求
	return config
})

```
## 响应拦截器

响应拦截器（可以设置多个, 同时可以也可以使用异步方法。拦截器回调函数接受4个参数，分别是 response, method, url, data：

```javascript
request.interceptors.response.use((response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
	const { data: res } = response // args[0] method args[1] url args[3] data
	await new Promise(resolve => setTimeout(() => resolve(), 3000))
	if (res.code === 200) {
		console.log('响应拦截器， 会阻塞 3 s')
	}
	return response
})
```

## 全局错误监听
当某个请求出现 请求失败、超时、服务器请求异常、主动取消等都会触发 onerror 方法。onerror 接收4个参数，分别是 method url data reason（失败原因）。 onerror 事件一个 request 实例只能设置一个，后设置的会覆盖前面的。onerror 中也支持异步操作：

```javascript
request.onerror = async (...args) => { // 请求失败统一处理方法（可以也可以使用异步方法）
	console.log('网络请求失败了', `url为${args[1]}`)
}
```

# 使用

## 基本使用

```javascript
request.get('/').then(res => {
	console.log(res)
}).catch(e => console.error(e))

request.get('http://xxx.com').then(res => { // 也可以使用配置的 baseURL 之外的 url，但是注意 url 路径要写完整
	console.log(res)
}).catch(e => console.error(e))
```

## 高级使用
request[method] 最多可以接受 5 个参数。本别是：
|  参数   | 类型  |备注  |默认值|
|  ----  | ----  | ----  |----|
| url  | String |url |必填 |
| data  | Object |data |{} |
| header  | Object |自定义请求头 |{} |
| reqIntercept  | Boolean |是否被请求拦截器拦截 |false |
| resIntercept  | Boolean |是否被响应拦截器拦截 |false |

```javascript
request.get('/', { name: 'zhangsan' }, { 'Content-Type': 'application/x-www-form-urlencoded' }, true, true).then(res => {
	console.log(res)
}).catch(e => console.error(e)) // 此请求不被被任意拦截器拦截
```

## 取消请求

如果想要取消某个请求，需要在 then 之前将 request.get 方法返回的 promise 对象保存在一个变量里。在需要的时候调用 abort 方法，会使当前网络请求取消并且使 request.get 方法返回的 promise 进入 reject 状态，可被 catch 捕获，错误信息为 【网络请求失败：主动取消】。如果在请求拦截器的异步期间取消，那么会在请求拦截器的异步操作结束后直接使返回的 Promise 进入 reject 状态，并不会发出网络请求

```javascript
const task = request.get('/abort') 
task.then(res => {
	console.log(res)
}).catch(e => console.error(e)) // 网络请求失败：主动取消
task.abort()
```

## 上传下载

### 上传

上传文件仅支持单文件上传，uploadFile() 方法接受两个参数：url 和 config。config 中有效配置项有四个，分别是：name filePaht header formData：

```javascript
request.uploadFile('/upload', {
	name: 'img',
	filePath: 'tempFilePath',
	formData: {
		a: 1,
		b: 2
	},
	header: {}
}).then(res => ...).catch(e => console.error(e))
```

### 下载

uploadFile() 方法接受两个参数：url 和 config。config 中有效配置项只有有一个 header ：

```javascript
request.uploadFile('/download', {
	header: {}
}).then(res => {
	console.log(res) // cookies: [], errMsg: "downloadFile:ok", header: { ... },statusCode: 200, tempFilePath: "http://tmp/w...d2.jpg"
}).catch(e => console.error(e))
```

### 取消上传/下载

和普通请求取消一样。也需要在 then 之前将 request 方法返回的 promise 对象保存在一个变量里。在需要的时候调用 abort 方法。

```javascript
const task = request.uploadFile('/download', {
	header: {}
})
task.then(res => {
	console.log(res) // cookies: [], errMsg: "downloadFile:ok", header: { ... },statusCode: 200, tempFilePath: "http://tmp/w...d2.jpg"
}).catch(e => console.error(e))

task.abort() // 取消上传/下载
```

### 监听上传/下载进度

和请求取消一样。也需要在 then 之前将 request 方法返回的 promise 对象保存在一个变量里。

```javascript
const task = request.uploadFile('/download', {
	header: {}
})
task.then(res => {
	console.log(res) // cookies: [], errMsg: "downloadFile:ok", header: { ... },statusCode: 200, tempFilePath: "http://tmp/w...d2.jpg"
}).catch(e => console.error(e))

fileU.onProgressUpdate(e => console.log(e)) // { progress: 2， totalBytesExpectedToSend: 1254676， totalBytesSent: 35244 }
```

### 注意事项

#### 默认所有服务器响应不为 [200, 401] 的请求会被视为请求失败，会被 catch 和被 onerror 监听，如果想要更多请求不被 catch 。可以在实例化时配置 statusCode: [201, 302, ...]

onerror

![onerror](https://raw.githubusercontent.com/yinchengnuo/uni_request/master/mde.png)


